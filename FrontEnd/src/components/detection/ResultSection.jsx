import { FaClipboardCheck, FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const ResultSection = ({ result, onClose }) => {
  return (
    <div className="mt-8 bg-white rounded-lg p-5 shadow-md relative">
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-300">
        <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
          <FaClipboardCheck className="text-primary text-xl" />
        </div>

        <div className="flex-1">
          <h4 className="text-xl text-text-primary m-0 mb-1">Hasil Deteksi</h4>
          <p className="text-sm text-text-secondary m-0">
            Berdasarkan gejala yang Anda masukkan
          </p>
        </div>

        <button
          onClick={onClose}
          className="bg-transparent border-none text-gray-500 text-xl cursor-pointer flex items-center justify-center hover:text-red-500 transition-colors focus:outline-none"
          aria-label="Tutup hasil deteksi"
        >
          <FaTimes />
        </button>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary">
          HASIL DETEKSI : {result.disease.toUpperCase()}
        </h2>
      </div>

      <div className="mb-8">
        <div className="relative mb-4">
          <h3 className="text-xl font-semibold text-primary">
            Penjelasan Penyakit :
          </h3>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary opacity-20"></div>
        </div>
        <p className="text-gray-700 leading-relaxed text-justify">
          {result.description}
        </p>
      </div>

      <div>
        <div className="relative mb-4">
          <h3 className="text-xl font-semibold text-primary">
            Saran Penanganan :
          </h3>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary opacity-20"></div>
        </div>
        <p className="text-gray-700 leading-relaxed text-justify">
          {result.recommendations}
        </p>
      </div>

      <p className="italic text-xs text-text-secondary mt-6 text-center">
        *Hasil deteksi ini hanya bersifat prediksi awal. Konsultasikan dengan
        tenaga medis profesional untuk diagnosis yang akurat.
      </p>
    </div>
  );
};

ResultSection.propTypes = {
  result: PropTypes.shape({
    disease: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    recommendations: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ResultSection;
