import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import DetectionForm from "../components/detection/DetectionForm";
import Swal from "sweetalert2";

const DiseaseDetection = ({ isLoggedIn }) => {
  // State untuk mengelola FAQ accordion
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Apakah sistem ini dapat mendiagnosis semua jenis penyakit?",
      answer:
        "Tidak, sistem ini hanya dilatih untuk mendeteksi penyakit-penyakit umum berdasarkan database yang kami miliki. Saat ini sistem dapat mendeteksi sekitar 40 jenis penyakit umum yang sering ditemui di masyarakat.",
    },
    {
      question: "Bagaimana tingkat akurasi dari sistem deteksi ini?",
      answer:
        "Berdasarkan pengujian yang telah dilakukan, sistem memiliki akurasi sekitar 85% untuk penyakit-penyakit umum. Namun, akurasi ini bergantung pada kelengkapan dan kejelasan gejala yang dimasukkan. Semakin spesifik gejala yang Anda masukkan, semakin akurat hasil prediksinya.",
    },
    {
      question: "Apakah data yang saya masukkan akan disimpan?",
      answer:
        "Ya, data gejala dan hasil deteksi disimpan secara anonim untuk keperluan pengembangan dan peningkatan akurasi sistem. Kami tidak menyimpan data pribadi apapun kecuali Anda membuat akun dan memberikan izin untuk itu. Anda dapat membaca kebijakan privasi kami untuk informasi lebih lanjut.",
    },
  ];

  // Function to handle navigation to /history
  const handleHistoryClick = () => {
    if (!isLoggedIn) {
      Swal.fire({
        title: "Akses Terbatas",
        text: "Anda perlu login terlebih dahulu untuk melihat riwayat deteksi",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#4F9962",
        cancelButtonColor: "#6B7280",
        confirmButtonText: "Login Sekarang",
        cancelButtonText: "Nanti Saja",
        customClass: {
          popup: "rounded-xl",
          title: "text-xl font-bold text-gray-800",
          htmlContainer: "text-gray-600",
          confirmButton: "rounded-lg text-sm font-medium px-5 py-2.5",
          cancelButton: "rounded-lg text-sm font-medium px-5 py-2.5",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      navigate("/history");
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-6">
            Deteksi Penyakit
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-6">
            Masukkan gejala yang Anda alami untuk mendapatkan prediksi penyakit
            dan rekomendasi tindakan awal. Sistem kami menggunakan algoritma
            machine learning untuk memberikan hasil yang akurat.
          </p>
          <button
            onClick={handleHistoryClick}
            className="bg-white hover:bg-gray-50 text-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            Lihat Riwayat Deteksi
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <DetectionForm isLoggedIn={isLoggedIn} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-text-primary mb-4 pb-3 border-b-2 border-primary">
                Bagaimana Cara Kerjanya?
              </h3>
              <ol className="list-decimal pl-5">
                <li className="mb-3 text-gray-700">
                  Masukkan gejala yang Anda rasakan
                </li>
                <li className="mb-3 text-gray-700">
                  Sistem akan menganalisis gejala dengan algoritma machine
                  learning
                </li>
                <li className="mb-3 text-gray-700">
                  Dapatkan prediksi penyakit beserta rekomendasi tindakan
                </li>
                <li className="mb-3 text-gray-700">
                  Konsultasikan hasil deteksi dengan profesional kesehatan
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-text-primary mb-4 pb-3 border-b-2 border-primary">
                Keterbatasan
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sistem deteksi penyakit ini hanya bersifat prediksi awal dan
                bukan pengganti diagnosis medis profesional. Hasil yang
                diberikan berdasarkan pada analisis statistik dari data gejala
                dan tidak menjamin keakuratan 100%. Selalu konsultasikan dengan
                dokter atau tenaga medis untuk diagnosis yang akurat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12 relative">
            Pertanyaan Umum
            <span className="absolute w-16 h-1 bg-primary bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></span>
          </h2>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg mb-4 overflow-hidden shadow-sm"
              >
                <div
                  className="flex justify-between items-center p-5 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4 className="text-lg font-medium text-text-primary">
                    {faq.question}
                  </h4>
                  <span className="text-2xl text-primary transition-transform duration-300 transform">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>

                <div
                  className={`px-5 pb-5 border-t border-gray-200 ${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed pt-3">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiseaseDetection;
