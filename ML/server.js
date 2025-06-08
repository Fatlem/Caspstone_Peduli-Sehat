const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const port = 3000;

// Get the absolute path to the virtual environment's Python
const pythonPath = path.join(__dirname, "venv", "bin", "python3");

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Serve static files from the current directory
app.use(express.static("."));

// Get symptoms list
app.get("/symptoms", async (req, res) => {
  try {
    console.log("Reading symptoms from selected_features.json");
    const data = await fs.readFile("selected_features.json", "utf8");
    const symptoms = JSON.parse(data);
    console.log(`Found ${symptoms.length} symptoms`);
    res.json({
      success: true,
      symptoms: symptoms,
    });
  } catch (error) {
    console.error("Error reading symptoms:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Make prediction
app.post("/predict", async (req, res) => {
  const symptoms = req.body.symptoms;
  if (!symptoms || !Array.isArray(symptoms)) {
    return res.status(400).json({
      success: false,
      error: "Invalid symptoms data",
    });
  }

  try {
    await fs.writeFile("temp_input.json", JSON.stringify(symptoms));

    const python = spawn(pythonPath, ["predict.py"]);
    let dataString = "";
    let errorString = "";

    python.stdout.on("data", (data) => {
      dataString += data.toString();
    });

    python.stderr.on("data", (data) => {
      console.error(`Python Error: ${data}`);
      errorString += data.toString();
    });

    python.on("close", (code) => {
      try {
        // Only try to delete if file exists
        fs.access("temp_input.json")
          .then(() => fs.unlink("temp_input.json"))
          .catch(() => {}); // Ignore if file doesn't exist

        if (code !== 0) {
          console.error("Python process exited with code:", code);
          console.error("Error output:", errorString);
          return res.status(500).json({
            success: false,
            error: "Error running prediction script",
          });
        }

        const result = JSON.parse(dataString);
        res.json(result);
      } catch (error) {
        console.error("Error parsing result:", error);
        res.status(500).json({
          success: false,
          error: "Error processing prediction result",
        });
      }
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log("Using Python from:", pythonPath);
  console.log("Make sure you have all required files:");
  console.log("- randomforest_model.joblib");
  console.log("- label_encoder.joblib");
  console.log("- selected_features.json");
});
