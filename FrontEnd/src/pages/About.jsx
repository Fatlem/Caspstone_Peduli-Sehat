import {
  FaCode,
  FaDatabase,
  FaBrain,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const About = () => {
  const handleEmailClick = () => {
    const email = "alexanderfatkhi@gmail.com";
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      "_blank"
    );
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-text-primary mb-6">
              Tentang Peduli Sehat
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Kami hadir untuk membantu masyarakat Indonesia mengenali gejala
              penyakit sejak dini, terutama di daerah dengan keterbatasan akses
              terhadap pelayanan kesehatan.
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
            Peduli Sehat bertujuan untuk meningkatkan literasi kesehatan
            preventif, mengurangi keterlambatan penanganan, dan mengoptimalkan
            distribusi sumber daya kesehatan di Indonesia melalui platform
            digital yang interaktif, fleksibel, dan mudah diakses.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md flex-1 min-w-[250px] max-w-[300px]">
              <h3 className="text-4xl font-bold text-primary mb-4">65%</h3>
              <p className="text-text-secondary">
                Masyarakat menunda pemeriksaan kesehatan karena kendala biaya
                dan jarak
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md flex-1 min-w-[250px] max-w-[300px]">
              <h3 className="text-4xl font-bold text-primary mb-4">40+</h3>
              <p className="text-text-secondary">
                Jenis penyakit umum yang dapat dideteksi oleh sistem kami
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md flex-1 min-w-[250px] max-w-[300px]">
              <h3 className="text-4xl font-bold text-primary mb-4">85%</h3>
              <p className="text-text-secondary">
                Tingkat akurasi prediksi penyakit dengan algoritma machine
                learning
              </p>
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
            Peduli Sehat mengintegrasikan berbagai teknologi modern untuk
            memberikan layanan terbaik
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Frontend
              </h3>
              <p className="text-text-secondary">
                Dibangun dengan ReactJS untuk antarmuka pengguna yang responsif
                dan interaktif
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <FaDatabase className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Backend
              </h3>
              <p className="text-text-secondary">
                API ExpressJS yang handal untuk mengelola data dan komunikasi
                dengan frontend
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBrain className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Machine Learning
              </h3>
              <p className="text-text-secondary">
                Algoritma Random Forest dan lainnya untuk prediksi penyakit yang
                akurat
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
            Peduli Sehat didukung oleh tim yang berdedikasi untuk meningkatkan
            kesehatan masyarakat
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Row 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="/foto/fatkhi.jpg"
                  alt="Muh. Fatkhi Alexander"
                  className="w-full h-full object-cover object-[center_20%] scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300?text=Muh.+Fatkhi+Alexander";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  Muh. Fatkhi Alexander
                </h3>
                <p className="text-primary font-medium">Frontend & Backend</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="/foto/fathir.jpg"
                  alt="Faathir El Tasleem"
                  className="w-full h-full object-cover object-[center_50%] scale-[1]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300?text=Faathir+El+Tasleem";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  Faathir El Tasleem
                </h3>
                <p className="text-primary font-medium">Frontend & Backend</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="/foto/Arsya.jpg"
                  alt="Naufal Arsyaputra Pradana"
                  className="w-full h-full object-cover object-[center_30%] scale-[1]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300?text=Naufal+Arsyaputra+Pradana";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  Naufal Arsyaputra Pradana
                </h3>
                <p className="text-primary font-medium">Frontend & Backend</p>
              </div>
            </div>

            {/* 2 Row */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="/foto/crismono.jpg"
                  alt="Krismono Sadi"
                  className="w-full h-full object-cover object-[center_25%]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300?text=Krismono+Sadi";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  Krismono Sadi
                </h3>
                <p className="text-primary font-medium">Machine Learning</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="/foto/sebastian.jpg"
                  alt="Sebastian Kurniawan Windu Wiwaha"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300?text=Sebastian+Kurniawan";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  Sebastian Kurniawan Windu Wiwaha
                </h3>
                <p className="text-primary font-medium">Machine Learning</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="/foto/silvi.jpg"
                  alt="Silvi Dian Pramana"
                  className="w-full h-full object-cover object-[center_45%] scale-150"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300?text=Silvi+Dian+Pramana";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  Silvi Dian Pramana
                </h3>
                <p className="text-primary font-medium">Machine Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian contact  */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-5 relative inline-block">
            Hubungi Kami
            <div className="absolute w-16 h-1 bg-primary bottom-0 left-1/2 transform -translate-x-1/2 -mb-2"></div>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-16 mt-8">
            Punya pertanyaan atau masukan? Kami senang mendengar dari Anda
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-primary text-xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Alamat</h3>
              <p className="text-text-secondary text-center">
                Jl. Kesehatan No. 123, Jakarta
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <FaPhone className="text-primary text-xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telepon</h3>
              <p className="text-text-secondary">+62 123-4567-8910</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              Kirim Email Langsung
            </h3>
            <p className="text-text-secondary mb-6">
              Klik tombol di bawah untuk mengirim email kepada kami
            </p>
            <button
              onClick={handleEmailClick}
              className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              <FaEnvelope />
              Kirim Email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
