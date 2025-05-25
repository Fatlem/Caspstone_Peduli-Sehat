import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import TestimonialsSection from '../components/home/TestimonialsSection'

const Home = () => {
  // Fungsi untuk mengatasi scroll ke bagian tertentu saat navigasi
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location
      if (hash) {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          // Kalkulasi offset untuk header fixed
          const headerHeight = document.querySelector('header').offsetHeight
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }
    
    // Check untuk hash pada load awal
    handleHashChange()
    
    // Listen untuk hashchange event
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])
  
  return (
    <div className="pt-20">
      <HeroSection />
      <FeaturesSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Menjaga Kesehatan Anda dan Keluarga?
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto mb-8 opacity-90">
            Peduli Sehat hadir untuk membantu Anda mengenali gejala penyakit sejak dini. 
            Deteksi penyakit sekarang dan dapatkan rekomendasi tindakan yang tepat.
          </p>
          <Link 
            to="/detection" 
            className="inline-block bg-white text-primary hover:bg-green-50 py-4 px-8 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Mulai Deteksi Sekarang
          </Link>
        </div>
      </section>
      
      <TestimonialsSection />
    </div>
  )
}

export default Home