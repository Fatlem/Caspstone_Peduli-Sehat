import { FaSearch, FaPills, FaComments, FaBookMedical } from 'react-icons/fa'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-primary text-2xl">
          {icon}
        </span>
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-3 text-center">{title}</h3>
      <p className="text-text-secondary text-center leading-relaxed">{description}</p>
    </div>
  )
}

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <FaSearch />,
      title: 'Deteksi Penyakit',
      description: 'Identifikasi potensi penyakit berdasarkan gejala yang Anda alami dengan teknologi machine learning terkini.'
    },
    {
      id: 2,
      icon: <FaPills />,
      title: 'Rekomendasi Pengobatan',
      description: 'Dapatkan saran pengobatan awal berdasarkan hasil deteksi penyakit yang teridentifikasi.'
    },
    {
      id: 3,
      icon: <FaComments />,
      title: 'Validasi Keluhan',
      description: 'Dapatkan umpan balik langsung tentang spesifisitas keluhan Anda untuk meningkatkan akurasi diagnosis.'
    },
    {
      id: 4,
      icon: <FaBookMedical />,
      title: 'Edukatif',
      description: 'Tingkatkan pengetahuan kesehatan Anda melalui artikel dan informasi preventif terkini.'
    }
  ]

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 relative inline-block">
            Fitur Utama
            <div className="absolute w-1/2 h-1 bg-primary bottom-0 left-1/4 -mb-2"></div>
          </h2>
          <p className="text-text-secondary text-lg">
            Platform kesehatan interaktif yang memadukan teknologi untuk memberikan solusi kesehatan yang tepat
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(feature => (
            <FeatureCard 
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-primary-light rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Sistem Deteksi Berbasis AI</h3>
              <p className="text-text-secondary mb-6">
                Teknologi kecerdasan buatan kami mampu menganalisis kombinasi gejala untuk memberikan prediksi penyakit yang akurat dan rekomendasi yang sesuai.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Algoritma Random Forest yang terlatih dengan jutaan data gejala</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Input dinamis yang meminta detail tambahan saat diperlukan</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Sistem yang terus berkembang seiring bertambahnya data</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light opacity-30 rounded-full -mr-10 -mt-10"></div>
              <div className="relative z-10">
                <h4 className="font-bold text-xl mb-4 text-primary">Tingkat Akurasi per Penyakit</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Demam Berdarah</span>
                      <span className="text-primary">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Tipes</span>
                      <span className="text-primary">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">ISPA</span>
                      <span className="text-primary">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Gastroenteritis</span>
                      <span className="text-primary">82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection