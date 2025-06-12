import { Link } from 'react-router-dom'
import { FaHeartbeat, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-4">
              <FaHeartbeat className="text-primary" />
              <span>Peduli Sehat</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Platform deteksi penyakit umum berbasis kecerdasan buatan 
              untuk membantu masyarakat mengenali gejala dan mendapatkan 
              rekomendasi tindakan awal.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 pb-2 border-b border-gray-700 inline-block">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Beranda</Link>
              </li>
              <li>
                <Link to="/#features" className="text-gray-400 hover:text-primary transition-colors">Fitur</Link>
              </li>
              <li>
                <Link to="/detection" className="text-gray-400 hover:text-primary transition-colors">Deteksi Penyakit</Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-gray-400 hover:text-primary transition-colors">Testimoni</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">Tentang Kami</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 pb-2 border-b border-gray-700 inline-block">Layanan</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/detection" className="text-gray-400 hover:text-primary transition-colors">Deteksi Penyakit</Link>
              </li>
              <li>
                <Link to="/health-info" className="text-gray-400 hover:text-primary transition-colors">Informasi Kesehatan</Link>
              </li>
              <li>
                <Link to="/medication" className="text-gray-400 hover:text-primary transition-colors">Rekomendasi Pengobatan</Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-400 hover:text-primary transition-colors">Artikel Kesehatan</Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-400 hover:text-primary transition-colors">Konsultasi Online</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 pb-2 border-b border-gray-700 inline-block">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">Jl. Kesehatan No. 123, Jakarta</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary flex-shrink-0" />
                <span className="text-gray-400">+62 123-4567-8910</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <span className="text-gray-400">info@pedulisehat.id</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Peduli Sehat. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer