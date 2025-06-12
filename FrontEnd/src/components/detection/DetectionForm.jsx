import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Select from "react-select";
import axios from "axios";
import diseaseData from "../../data/diseaseData";

const SymptomTag = ({ text, onRemove }) => {
  return (
    <div className="bg-primary-light text-primary-dark py-1 px-3 rounded-full text-sm flex items-center gap-2">
      {text}
      <button
        onClick={onRemove}
        className="hover:text-red-500 transition-colors flex items-center justify-center"
      >
        <FaTimes />
      </button>
    </div>
  );
};

const ResultSection = ({ result, onClose }) => {
  const diseaseInfo = diseaseData[result.disease.toLowerCase()] || {
    description: "Informasi penyakit tidak tersedia.",
    recommendation:
      "Silakan konsultasikan dengan dokter untuk informasi lebih lanjut.",
  };

  return (
    <div className="mt-8 bg-white rounded-lg p-5 shadow-default relative">
      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-300">
        <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="text-xl text-gray-800 m-0">Hasil Deteksi</h4>
          <p className="text-sm text-gray-600 m-0">
            Berdasarkan gejala yang Anda masukkan
          </p>
        </div>
        <button
          onClick={onClose}
          className="bg-transparent border-none text-gray-500 text-xl hover:text-red-500 transition-colors cursor-pointer"
        >
          <FaTimes />
        </button>
      </div>

      <div className="mb-5">
        <h5 className="text-2xl font-extrabold text-primary-dark mb-4 text-center uppercase tracking-wide">
          Hasil Deteksi : {result.disease}
        </h5>
        <div className="space-y-6">
          <div>
            <h6 className="font-bold text-lg text-green-700 mb-2 border-b-2 border-green-200 pb-1">
              Penjelasan Penyakit :
            </h6>
            <p className="text-gray-600 leading-relaxed text-justify">
              {diseaseInfo.description}
            </p>
          </div>
          <div>
            <h6 className="font-bold text-lg text-green-700 mb-2 border-b-2 border-green-200 pb-1">
              Saran Penanganan :
            </h6>
            <p className="text-gray-600 leading-relaxed text-justify">
              {diseaseInfo.recommendation}
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 italic mt-4 text-center">
        *Hasil deteksi ini hanya bersifat prediksi awal. Konsultasikan dengan
        tenaga medis profesional untuk diagnosis yang akurat.
      </p>
    </div>
  );
};

const DetectionForm = ({ isLoggedIn }) => {
  const [availableSymptoms, setAvailableSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch symptoms from ML server when component mounts
    fetch("https://ml.pedulisehatmu.my.id/symptoms")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const formattedSymptoms = data.symptoms.map((symptom) => ({
            value: symptom,
            label: symptom
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" "),
          }));
          setAvailableSymptoms(formattedSymptoms);
        } else {
          setError("Gagal memuat daftar gejala");
        }
      })
      .catch((error) => {
        console.error("Error fetching symptoms:", error);
        setError("Gagal memuat daftar gejala. Silakan muat ulang halaman.");
      });
  }, []);

  const saveToHistory = async (symptoms, prediction) => {
    if (!isLoggedIn) return;

    try {
      // Convert symptoms array to object with boolean values
      const symptomsObject = symptoms.reduce((acc, symptom) => {
        acc[symptom] = true;
        return acc;
      }, {});

      await axios.post("https://backend.pedulisehatmu.my.id/save-detection", {
        symptoms: symptomsObject,
        detection_result: prediction,
      });
    } catch (error) {
      console.error("Error saving to history:", error);
      // Don't show error to user since this is a background operation
    }
  };

  const handleDetectionSubmit = () => {
    if (selectedSymptoms.length === 0) {
      setError("Silakan pilih minimal satu gejala");
      return;
    }

    setIsLoading(true);
    setError(null);

    // Send prediction request to ML server
    fetch("https://ml.pedulisehatmu.my.id/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        symptoms: selectedSymptoms.map((s) => s.value),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data.success) {
          const prediction = data.prediction;
          // Normalize the disease name to match the diseaseData keys
          const normalizedDiseaseName = prediction
            .toLowerCase()
            .replace(/[.]/g, "") // Remove dots
            .replace(/\s+\([^)]+\)/g, "") // Remove parentheses and their contents
            .replace(/\s+/g, " ") // Normalize spaces
            .trim(); // Remove leading/trailing spaces

          const diseaseInfo = diseaseData[normalizedDiseaseName] || {
            description:
              "Berdasarkan gejala yang Anda masukkan, sistem mendeteksi kemungkinan penyakit " +
              prediction +
              ". Silakan konsultasikan dengan dokter untuk informasi lebih detail.",
            recommendation:
              "Segera konsultasikan dengan dokter untuk pemeriksaan lebih lanjut. Catat semua gejala yang Anda alami. Ikuti saran dan pengobatan yang diberikan oleh dokter.",
          };

          setResult({
            disease: prediction,
            description: diseaseInfo.description,
            recommendations: diseaseInfo.recommendation,
          });
          setShowResult(true);

          // Save to history if user is logged in
          if (isLoggedIn) {
            saveToHistory(
              selectedSymptoms.map((s) => s.value),
              prediction
            );
          }
        } else {
          setError(data.error || "Terjadi kesalahan saat memproses prediksi");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
        setError("Terjadi kesalahan saat menghubungi server");
      });
  };

  return (
    <div className="bg-white rounded-lg p-6 md:p-10 shadow-default max-w-3xl mx-auto mt-10">
      <h3 className="text-2xl font-bold text-center mb-6">Input Gejala</h3>

      <div className="mb-6">
        <label
          htmlFor="symptoms"
          className="block mb-2 font-medium text-gray-800"
        >
          Pilih gejala yang Anda alami:
        </label>
        <Select
          isMulti
          name="symptoms"
          options={availableSymptoms}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Pilih atau ketik gejala yang dialami"
          value={selectedSymptoms}
          onChange={setSelectedSymptoms}
        />
        <small className="text-xs text-gray-500 mt-1 block">
          *Anda dapat memilih beberapa gejala sekaligus
        </small>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="button"
        onClick={handleDetectionSubmit}
        disabled={selectedSymptoms.length === 0 || isLoading}
        className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? "Memproses..." : "Deteksi Penyakit"}
      </button>

      {showResult && result && (
        <ResultSection result={result} onClose={() => setShowResult(false)} />
      )}
    </div>
  );
};

export default DetectionForm;
