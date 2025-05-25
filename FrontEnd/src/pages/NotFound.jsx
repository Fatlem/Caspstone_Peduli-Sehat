import { Link } from 'react-router-dom'
import { FaHeartbeat, FaArrowLeft } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-gradient-to-br from-primary-light to-white">
      <div className="text-center bg-white p-10 rounded-xl shadow-lg max-w-lg w-full">
        <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
          <FaHeartbeat className="text-primary text-4xl" />
        </div>
        
        <h1 className="text-8xl text-primary font-bold leading-none m-0">404</h1>
        
        <h2 className="text-2xl text-text-primary font-bold my-4">Halaman Tidak Ditemukan</h2>
        
        <p className="text-text-secondary mb-8 leading-relaxed">
          Maaf, halaman yang Anda cari tidak ditemukan. 
          Halaman mungkin telah dipindahkan atau dihapus.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-medium transition-colors"
        >
          <FaArrowLeft /> Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}

export default NotFound