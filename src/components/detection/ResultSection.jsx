import { FaClipboardCheck, FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

const ResultSection = ({ result, onClose }) => {
  return (
    <div className="mt-8 bg-white rounded-lg p-5 shadow-md relative">
      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-300">
        <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
          <FaClipboardCheck className="text-primary text-xl" />
        </div>
        
        <div className="flex-1">
          <h4 className="text-xl text-text-primary m-0 mb-1">Hasil Deteksi</h4>
          <p className="text-sm text-text-secondary m-0">Berdasarkan gejala yang Anda masukkan</p>
        </div>
        
        <button 
          onClick={onClose}
          className="bg-transparent border-none text-gray-500 text-xl cursor-pointer flex items-center justify-center hover:text-red-500 transition-colors focus:outline-none"
          aria-label="Tutup hasil deteksi"
        >
          <FaTimes />
        </button>
      </div>
      
      <div className="mb-5">
        <h5 className="text-lg font-semibold text-text-primary mb-2">
          Kemungkinan Penyakit: {result.disease}
        </h5>
        <p className="text-text-secondary leading-relaxed">
          {result.description}
        </p>
      </div>
      
      <div className="bg-primary-light p-4 rounded-lg">
        <h5 className="text-primary-dark font-semibold mb-3">
          Rekomendasi Tindakan:
        </h5>
        <ul className="pl-5 space-y-2">
          {result.recommendations.map((recommendation, index) => (
            <li key={index} className="text-text-primary">
              {recommendation}
            </li>
          ))}
        </ul>
      </div>
      
      <p className="italic text-xs text-text-secondary mt-4 text-center">
        *Hasil deteksi ini hanya bersifat prediksi awal. Konsultasikan dengan tenaga medis profesional untuk diagnosis yang akurat.
      </p>
    </div>
  )
}

ResultSection.propTypes = {
  result: PropTypes.shape({
    disease: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    recommendations: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired
}

export default ResultSection