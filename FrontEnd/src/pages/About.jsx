import { FaSearch, FaPills, FaCode, FaDatabase, FaBrain, FaUsers } from 'react-icons/fa'

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-text-primary mb-6">Tentang Peduli Sehat</h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Kami hadir untuk membantu masyarakat Indonesia mengenali gejala penyakit sejak dini,
              terutama di daerah dengan keterbatasan akses terhadap pelayanan kesehatan.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-5 relative inline-block">
            Misi Kami
            <div className="absolute w-16 h-1 bg-primary bottom-0 left-1/2 transform -translate-x-1/2 -mb-2"></div>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-16 mt-8">
            Peduli Sehat bertujuan untuk meningkatkan literasi kesehatan preventif, mengurangi 
            keterlambatan penanganan, dan mengoptimalkan distribusi sumber daya kesehatan di Indonesia 
            melalui platform digital yang interaktif, fleksibel, dan mudah diakses.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md flex-1 min-w-[250px] max-w-[300px]">
              <h3 className="text-4xl font-bold text-primary mb-4">65%</h3>
              <p className="text-text-secondary">Masyarakat menunda pemeriksaan kesehatan karena kendala biaya dan jarak</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md flex-1 min-w-[250px] max-w-[300px]">
              <h3 className="text-4xl font-bold text-primary mb-4">30+</h3>
              <p className="text-text-secondary">Jenis penyakit umum yang dapat dideteksi oleh sistem kami</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md flex-1 min-w-[250px] max-w-[300px]">
              <h3 className="text-4xl font-bold text-primary mb-4">85%</h3>
              <p className="text-text-secondary">Tingkat akurasi prediksi penyakit dengan algoritma machine learning</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-5 relative inline-block">
            Teknologi yang Kami Gunakan
            <div className="absolute w-16 h-1 bg-primary bottom-0 left-1/2 transform -translate-x-1/2 -mb-2"></div>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-16 mt-8">
            Peduli Sehat mengintegrasikan berbagai teknologi modern untuk memberikan layanan terbaik
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Frontend</h3>
              <p className="text-text-secondary">
                Dibangun dengan ReactJS untuk antarmuka pengguna yang responsif dan interaktif
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <FaDatabase className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Backend</h3>
              <p className="text-text-secondary">
                API ExpressJS yang handal untuk mengelola data dan komunikasi dengan frontend
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBrain className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Machine Learning</h3>
              <p className="text-text-secondary">
                Algoritma Random Forest dan lainnya untuk prediksi penyakit yang akurat
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-5 relative inline-block">
            Tim Kami
            <div className="absolute w-16 h-1 bg-primary bottom-0 left-1/2 transform -translate-x-1/2 -mb-2"></div>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-16 mt-8">
            Peduli Sehat didukung oleh tim yang berdedikasi untuk meningkatkan kesehatan masyarakat
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/assets/images/team-1.jpg" 
                  alt="Budi Santoso" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300?text=Budi+Santoso';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-1">Budi Santoso</h3>
                <p className="text-primary font-medium">Founder & CEO</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/assets/images/team-2.jpg" 
                  alt="Dr. Siti Rahayu" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300?text=Dr.+Siti+Rahayu';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-1">Dr. Siti Rahayu</h3>
                <p className="text-primary font-medium">Medical Advisor</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/assets/images/team-3.jpg" 
                  alt="Andi Wijaya" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300?text=Andi+Wijaya';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-1">Andi Wijaya</h3>
                <p className="text-primary font-medium">Lead Developer</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/assets/images/team-4.jpg" 
                  alt="Maya Putri" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300?text=Maya+Putri';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-1">Maya Putri</h3>
                <p className="text-primary font-medium">Data Scientist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-5 relative inline-block">
            Hubungi Kami
            <div className="absolute w-16 h-1 bg-primary bottom-0 left-1/2 transform -translate-x-1/2 -mb-2"></div>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-16 mt-8">
            Punya pertanyaan atau masukan? Kami senang mendengar dari Anda
          </p>
          
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md text-left">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block font-medium text-text-primary mb-2">Nama</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block font-medium text-text-primary mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Masukkan email Anda"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block font-medium text-text-primary mb-2">Subjek</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Subjek pesan"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block font-medium text-text-primary mb-2">Pesan</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Tulis pesan Anda di sini"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About