import api from "./api";

// Service untuk fitur deteksi penyakit
const detectionService = {
  // Mengirim gejala untuk deteksi penyakit
  detectDisease: async (data) => {
    return await api.post("/detection", data);
  },

  // Mendapatkan daftar gejala dari database
  getAvailableSymptoms: async () => {
    return await api.get("/symptoms");
  },

  // Mendapatkan riwayat deteksi user
  getDetectionHistory: async () => {
    return await api.get("/detection/history");
  },

  // Mendapatkan detail hasil deteksi
  getDetectionDetail: async (id) => {
    return await api.get(`/detection/${id}`);
  },

  // Validasi gejala yang diinput
  validateSymptom: async (symptom) => {
    return await api.post("/symptoms/validate", { symptom });
  },
};

export default detectionService;
