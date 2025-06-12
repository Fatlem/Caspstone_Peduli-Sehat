import { useState } from "react";
import { Link } from "react-router-dom";

const TestimonialCard = ({ text, name, role, avatar }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative mb-6">
        <p className="text-text-secondary italic leading-relaxed z-10 relative">
          "{text}"
        </p>
        <span className="absolute -top-2 -left-1 text-6xl text-primary-light opacity-30 z-0 leading-none">
          "
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
          <img
            src={avatar}
            alt={`Avatar ${name}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/50";
            }}
          />
        </div>
        <div>
          <h5 className="font-bold text-text-primary">{name}</h5>
          <p className="text-sm text-text-secondary">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Aplikasi ini sangat membantu ketika saya berada di daerah yang jauh dari fasilitas kesehatan. Saya bisa mendapatkan gambaran awal tentang kondisi kesehatan dan langkah-langkah apa yang harus diambil.",
      name: "Budi Santoso",
      role: "Petani, Sukabumi",
      avatar: "https://i.pravatar.cc/48?u=499476",
    },
    {
      id: 2,
      text: "Sebagai seorang ibu dengan dua anak kecil, Peduli Sehat sangat membantu untuk menentukan apakah keluhan anak-anak saya memerlukan kunjungan ke dokter atau hanya perawatan di rumah.",
      name: "Siti Maryam",
      role: "Ibu Rumah Tangga, Bandung",
      avatar: "https://i.pravatar.cc/48?u=499470",
    },
    {
      id: 3,
      text: "Interface-nya mudah digunakan dan rekomendasi tindakan yang diberikan sangat membantu. Saya merasa lebih aman dan terinformasi tentang kondisi kesehatan saya.",
      name: "Andi Wijaya",
      role: "Mahasiswa, Surabaya",
      avatar: "https://i.pravatar.cc/48?u=49942",
    },
    {
      id: 4,
      text: "Saya menggunakan Peduli Sehat untuk memantau kesehatan orangtua saya yang tinggal jauh dari kota. Aplikasi ini membantu mereka mendapatkan informasi awal sebelum pergi ke puskesmas.",
      name: "Maya Putri",
      role: "Karyawan, Jakarta",
      avatar: "/assets/images/avatar-4.jpg",
    },
    {
      text: "Saya suka dengan tampilan aplikasi yang sederhana dan mudah digunakan. Fitur deteksi penyakitnya juga cukup akurat dan membantu untuk mengetahui tindakan awal yang perlu dilakukan.",
      name: "Sarah Wijaya",
      role: "Guru, Bandung",
      avatar: "https://i.pravatar.cc/48?u=499478",
    },
    {
      text: "Sangat berguna untuk deteksi awal penyakit. Meskipun tidak menggantikan diagnosis dokter, tapi setidaknya bisa memberikan gambaran tentang kondisi kesehatan kita.",
      name: "Ahmad Hidayat",
      role: "Wiraswasta, Jakarta",
      avatar: "https://i.pravatar.cc/48?u=499454",
    },
  ];

  // State untuk testimonial yang ditampilkan dengan pagination pada mobile view
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 1;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);

  // Testimonial untuk tampilan mobile
  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const handleLearnMoreClick = () => {
    const featuresSection = document.querySelector("#features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 relative inline-block">
            Testimoni Pengguna
            <div className="absolute w-1/2 h-1 bg-primary bottom-0 left-1/4 -mb-2"></div>
          </h2>
          <p className="text-text-secondary text-lg">
            Apa kata mereka tentang layanan Peduli Sehat
          </p>
        </div>

        {/* Desktop view - grid layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
            />
          ))}
        </div>

        {/* Mobile view - carousel/pagination */}
        <div className="md:hidden">
          {currentTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
            />
          ))}

          <div className="flex justify-center items-center mt-8 gap-2">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentPage === index ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Halaman ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-md max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary-light rounded-full opacity-30"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-light rounded-full opacity-30"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Bergabunglah dengan 1000+ Pengguna Lainnya
              </h3>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                Dapatkan akses ke semua fitur premium dan pantau riwayat
                kesehatan Anda dan keluarga dengan mendaftar sekarang.
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link to="/register">
                  <button className="bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-lg font-medium transition-colors">
                    Daftar Sekarang
                  </button>
                </Link>
                <button
                  onClick={handleLearnMoreClick}
                  className="border border-primary text-primary hover:bg-primary hover:text-white py-3 px-8 rounded-lg font-medium transition-colors"
                >
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
