import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const SymptomTag = ({ text, onRemove }) => {
  return (
    <div className="bg-primary-light text-primary-dark py-1 px-3 rounded-full text-sm flex items-center gap-2">
      {text}
      <button onClick={onRemove} className="hover:text-red-500 transition-colors flex items-center justify-center">
        <FaTimes />
      </button>
    </div>
  )
}

const ResultSection = ({ result, onClose }) => {
  return (
    <div className="mt-8 bg-white rounded-lg p-5 shadow-default relative">
      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-300">
        <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="text-xl text-gray-800 m-0">Hasil Deteksi</h4>
          <p className="text-sm text-gray-600 m-0">Berdasarkan gejala yang Anda masukkan</p>
        </div>
        <button 
          onClick={onClose} 
          className="bg-transparent border-none text-gray-500 text-xl hover:text-red-500 transition-colors cursor-pointer"
        >
          <FaTimes />
        </button>
      </div>
      
      <div className="mb-5">
        <h5 className="text-lg text-gray-800 mb-2">Kemungkinan Penyakit: {result.disease}</h5>
        <p className="text-gray-600 leading-relaxed">{result.description}</p>
      </div>
      
      <div className="bg-primary-light p-4 rounded-lg">
        <h5 className="text-primary-dark mb-2">Rekomendasi Tindakan:</h5>
        <ul className="pl-5">
          {result.recommendations.map((recommendation, index) => (
            <li key={index} className="mb-2 text-gray-800">{recommendation}</li>
          ))}
        </ul>
      </div>
      
      <p className="text-xs text-gray-500 italic mt-4 text-center">
        *Hasil deteksi ini hanya bersifat prediksi awal. Konsultasikan dengan tenaga medis profesional untuk diagnosis yang akurat.
      </p>
    </div>
  )
}

const DetectionForm = () => {
  const [symptomInput, setSymptomInput] = useState('')
  const [symptoms, setSymptoms] = useState(['Demam tinggi', 'Sakit kepala', 'Batuk kering'])
  const [duration, setDuration] = useState('Kurang dari 24 jam')
  const [showResult, setShowResult] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState({
    disease: 'Demam Berdarah',
    description: 'Demam berdarah adalah penyakit yang disebabkan oleh virus dengue yang ditularkan melalui gigitan nyamuk Aedes aegypti. Gejala umumnya meliputi demam tinggi, sakit kepala, nyeri sendi dan otot, serta ruam.',
    recommendations: [
      'Istirahat yang cukup dan minum banyak air',
      'Konsumsi paracetamol untuk menurunkan demam (hindari aspirin/ibuprofen)',
      'Pantau tanda-tanda penurunan trombosit seperti mimisan atau bintik merah pada kulit',
      'Segera konsultasikan ke dokter atau fasilitas kesehatan terdekat'
    ]
  })

  const handleSymptomSubmit = (e) => {
    e.preventDefault()
    if (symptomInput.trim() !== '') {
      setSymptoms([...symptoms, symptomInput.trim()])
      setSymptomInput('')
    }
  }

  const handleRemoveSymptom = (indexToRemove) => {
    setSymptoms(symptoms.filter((_, index) => index !== indexToRemove))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSymptomSubmit(e)
    }
  }

  const handleDetectionSubmit = () => {
    if (symptoms.length === 0) return
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setShowResult(true)
    }, 1500)
  }

  return (
    <div className="bg-white rounded-lg p-6 md:p-10 shadow-default max-w-3xl mx-auto mt-10">
      <h3 className="text-2xl font-bold text-center mb-6">Input Gejala</h3>
      
      <form onSubmit={handleSymptomSubmit}>
        <div className="mb-5">
          <label htmlFor="symptoms" className="block mb-2 font-medium text-gray-800">
            Ketik gejala yang Anda alami:
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
            id="symptoms"
            placeholder="Contoh: demam tinggi, sakit kepala"
            value={symptomInput}
            onChange={(e) => setSymptomInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <small className="text-xs text-gray-500 mt-1 block">
            *Tekan Enter setelah memasukkan setiap gejala
          </small>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {symptoms.map((symptom, index) => (
              <SymptomTag 
                key={index} 
                text={symptom} 
                onRemove={() => handleRemoveSymptom(index)} 
              />
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="duration" className="block mb-2 font-medium text-gray-800">
            Berapa lama gejala sudah dirasakan?
          </label>
          <select 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option>Kurang dari 24 jam</option>
            <option>1-3 hari</option>
            <option>3-7 hari</option>
            <option>Lebih dari seminggu</option>
          </select>
        </div>
        
        <button 
          type="button" 
          onClick={handleDetectionSubmit}
          disabled={symptoms.length === 0 || isLoading}
          className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Memproses...' : 'Deteksi Penyakit'}
        </button>
      </form>
      
      {showResult && result && (
        <ResultSection 
          result={result} 
          onClose={() => setShowResult(false)} 
        />
      )}
    </div>
  )
}

export default DetectionForm