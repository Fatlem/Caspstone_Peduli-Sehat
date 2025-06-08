import express, { response } from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
import cookieParser from "cookie-parser";
const salt = 10;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_auth",
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not authenticated" });
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "Token is not ok" });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};

app.get("/is-logged-in", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

app.post("/register", (req, res) => {
  const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });
    const values = [req.body.name, req.body.email, hash];
    db.query(sql, [values], (err, result) => {
      if (err) return res.json({ Error: "Interesting data Error in Server" });
      return res.json({ Status: "Success" });
    });
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ?";
  db.query(sql, [req.body.email], (err, data) => {
    if (err) return res.json({ Error: "Loggin error in Server" });
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (err, response) => {
          if (err) return res.json({ Error: "Password compare error" });
          if (response) {
            const name = data[0].name;
            const token = jwt.sign({ name }, "jwt-secret-key", {
              expiresIn: "1d",
            });
            res.cookie("token", token);
            return res.json({ Status: "Success" });
          } else {
            return res.json({ Error: "Password not matched" });
          }
        }
      );
    } else {
      return res.json({ Error: "No Email Existed" });
    }
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

// Get user ID from token
const getUserId = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not authenticated" });
  }

  jwt.verify(token, "jwt-secret-key", (err, decoded) => {
    if (err) {
      return res.json({ Error: "Token is not ok" });
    }

    // Get user ID from database using decoded name
    const sql = "SELECT id FROM login WHERE name = ?";
    db.query(sql, [decoded.name], (err, result) => {
      if (err) return res.json({ Error: "Database error" });
      if (result.length === 0) return res.json({ Error: "User not found" });

      req.userId = result[0].id;
      next();
    });
  });
};

// Save detection history
app.post("/save-detection", getUserId, (req, res) => {
  const { symptoms, detection_result } = req.body;
  const sql =
    "INSERT INTO detection_history (user_id, symptoms, detection_result) VALUES (?, ?, ?)";

  db.query(
    sql,
    [req.userId, JSON.stringify(symptoms), detection_result],
    (err, result) => {
      if (err) return res.json({ Error: "Error saving detection history" });
      return res.json({ Status: "Success", id: result.insertId });
    }
  );
});

// Get user's detection history
app.get("/detection-history", getUserId, (req, res) => {
  const sql =
    "SELECT * FROM detection_history WHERE user_id = ? ORDER BY created_at DESC";

  db.query(sql, [req.userId], (err, result) => {
    if (err) return res.json({ Error: "Error fetching detection history" });

    // Parse symptoms JSON string back to object
    const history = result.map((record) => ({
      ...record,
      symptoms: JSON.parse(record.symptoms),
    }));

    return res.json({ Status: "Success", history });
  });
});

app.listen(8081, () => {
  console.log("Sudah Running yaa...");
});
