import api from './api'

// Service untuk fitur deteksi penyakit
const detectionService = {
  /**
   * Mengirim gejala untuk deteksi penyakit
   * @param {Object} data - Data gejala dari user
   * @param {Array} data.symptoms - Array gejala
   * @param {string} data.duration - Durasi gejala
   * @returns {Promise} - Promise hasil deteksi
   */
  detectDisease: async (data) => {
    try {
      return await api.post('/detection', data)
    } catch (error) {
      throw error
    }
  },

  /**
   * Mendapatkan daftar gejala yang tersedia di database
   * @returns {Promise} - Promise daftar gejala
   */
  getAvailableSymptoms: async () => {
    try {
      return await api.get('/symptoms')
    } catch (error) {
      throw error
    }
  },

  /**
   * Mendapatkan riwayat deteksi untuk user yang terautentikasi
   * @returns {Promise} - Promise riwayat deteksi
   */
  getDetectionHistory: async () => {
    try {
      return await api.get('/detection/history')
    } catch (error) {
      throw error
    }
  },

  /**
   * Mendapatkan detail hasil deteksi berdasarkan ID
   * @param {string} id - ID deteksi
   * @returns {Promise} - Promise detail deteksi
   */
  getDetectionDetail: async (id) => {
    try {
      return await api.get(`/detection/${id}`)
    } catch (error) {
      throw error
    }
  },

  /**
   * Validasi spesifisitas gejala yang diinput user
   * @param {string} symptom - Gejala yang akan divalidasi
   * @returns {Promise} - Promise hasil validasi
   */
  validateSymptom: async (symptom) => {
    try {
      return await api.post('/symptoms/validate', { symptom })
    } catch (error) {
      throw error
    }
  }
}

export default detectionService