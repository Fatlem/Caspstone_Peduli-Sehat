import { useNavigate } from 'react-router-dom'
import heroImage from '../../assets/images/hero-image.jpg'

const HeroSection = () => {
  const navigate = useNavigate()

  const handleDetectionClick = () => {
    navigate('/detection')
  }

  return (
    <section className="mt-20 py-16 md:py-24 bg-gradient-to-tr from-primary-light via-green-50 to-white rounded-b-[50px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-text-primary leading-tight">
              Kenali Gejala Penyakit <span className="text-primary">Sejak Dini</span>
            </h1>
            <p className="text-base md:text-lg text-text-secondary mb-8 max-w-xl">
              Peduli Sehat hadir sebagai solusi deteksi penyakit umum berbasis kecerdasan buatan 
              untuk membantu masyarakat mengenali gejala dan mendapatkan rekomendasi tindakan awal.
            </p>
            <button 
              onClick={handleDetectionClick}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-2"
            >
              <span>Mulai Deteksi Sekarang</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-32 h-32 bg-primary-light rounded-full opacity-40"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary-light rounded-full opacity-40"></div>
              <img 
                src={heroImage || '/assets/images/hero-image.jpg'} 
                alt="Ilustrasi Kesehatan" 
                className="w-full h-auto rounded-xl shadow-lg relative z-10 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md z-20 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-primary rounded-full"></span>
                <span className="text-sm font-medium">Deteksi Akurat</span>
              </div>
              <div className="absolute -bottom-5 left-10 bg-white p-3 rounded-lg shadow-md z-20 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-accent rounded-full"></span>
                <span className="text-sm font-medium">Rekomendasi Cepat</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary mb-2">85%</span>
            <span className="text-text-secondary">Akurasi Deteksi</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary mb-2">40+</span>
            <span className="text-text-secondary">Jenis Penyakit</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary mb-2">1000+</span>
            <span className="text-text-secondary">Pengguna Aktif</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection