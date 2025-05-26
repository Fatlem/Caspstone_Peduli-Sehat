import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function History({ isLoggedIn }) {
  const navigate = useNavigate();
  console.log("isLoggedIn : ", isLoggedIn);

  // Cek status login saat komponen dimuat
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  // Jika sudah login, tampilkan konten
  return (
    <div className="mt-20 h-screen">
      <strong>RIWAYAT DETEKSI</strong>
    </div>
  );
}

export default History;
