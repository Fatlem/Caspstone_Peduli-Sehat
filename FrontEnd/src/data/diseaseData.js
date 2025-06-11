const diseaseData = {
  "gangguan makan": {
    description: "Gangguan makan adalah kondisi serius yang mempengaruhi pola makan dan kesehatan mental seseorang, ditandai dengan perilaku makan yang tidak normal dan kekhawatiran berlebihan terhadap berat badan dan bentuk tubuh.",
    recommendation: "Segera konsultasikan dengan psikolog atau psikiater untuk mendapatkan terapi perilaku kognitif dan dukungan nutrisi yang tepat, serta bergabung dengan kelompok pendukung untuk pemulihan jangka panjang."
  },
  "diabetes retinopati": {
    description: "Diabetes retinopati adalah komplikasi diabetes yang mempengaruhi mata, terjadi ketika kadar gula darah tinggi merusak pembuluh darah di retina, menyebabkan gangguan penglihatan hingga kebutaan jika tidak ditangani.",
    recommendation: "Kontrol kadar gula darah secara ketat, lakukan pemeriksaan mata rutin setiap 6 bulan, dan konsultasikan dengan dokter mata untuk penanganan laser atau suntikan anti-VEGF jika diperlukan."
  },
  "gangguan perataan mata": {
    description: "Gangguan perataan mata adalah kondisi dimana mata tidak sejajar dengan benar, menyebabkan masalah penglihatan binokular dan dapat mempengaruhi persepsi kedalaman serta koordinasi visual.",
    recommendation: "Konsultasikan dengan dokter mata untuk terapi penglihatan, latihan mata, atau penggunaan kacamata khusus, dan lakukan pemeriksaan rutin untuk memantau perkembangan kondisi."
  },
  "kolekocholithiasis": {
    description: "Kolekocholithiasis adalah kondisi dimana batu empedu menyumbat saluran empedu, menyebabkan nyeri perut hebat, mual, muntah, dan dapat menyebabkan komplikasi serius seperti pankreatitis atau infeksi saluran empedu.",
    recommendation: "Segera konsultasikan dengan dokter untuk evaluasi dan penanganan yang tepat, hindari makanan berlemak, dan pertimbangkan operasi pengangkatan batu empedu jika diperlukan."
  },
  "peritonitis": {
    description: "Peritonitis adalah peradangan pada peritoneum (selaput yang melapisi dinding dalam perut), biasanya disebabkan oleh infeksi bakteri, yang dapat mengancam jiwa jika tidak segera ditangani.",
    recommendation: "Segera cari bantuan medis darurat, ikuti pengobatan antibiotik yang diresepkan, dan lakukan pemantauan ketat terhadap tanda-tanda vital dan gejala lainnya."
  },
  "cirhosis": {
    description: "Cirrhosis adalah kondisi dimana jaringan hati yang sehat digantikan oleh jaringan parut, menyebabkan penurunan fungsi hati secara bertahap dan dapat menyebabkan komplikasi serius seperti gagal hati.",
    recommendation: "Hindari konsumsi alkohol, ikuti diet rendah garam, lakukan pemeriksaan rutin dengan dokter, dan pertimbangkan transplantasi hati jika kondisi sudah parah."
  },
  "atrophic vaginitis": {
    description: "Atrophic vaginitis adalah peradangan pada vagina yang terjadi karena penurunan kadar estrogen, menyebabkan kekeringan, iritasi, dan ketidaknyamanan pada area vagina.",
    recommendation: "Konsultasikan dengan dokter kandungan untuk terapi pengganti estrogen, gunakan pelumas vagina yang aman, dan hindari produk pembersih yang mengandung parfum."
  },
  "iskemia dari usus": {
    description: "Iskemia usus adalah kondisi serius dimana aliran darah ke usus berkurang, menyebabkan kerusakan jaringan usus dan dapat mengancam jiwa jika tidak segera ditangani.",
    recommendation: "Segera cari bantuan medis darurat, ikuti pengobatan yang diresepkan untuk meningkatkan aliran darah, dan lakukan perubahan gaya hidup untuk mengontrol faktor risiko seperti tekanan darah tinggi dan kolesterol."
  },
  "tinnitus dari penyebab yang tidak diketahui": {
    description: "Tinnitus adalah kondisi dimana seseorang mendengar suara berdenging atau berdengung di telinga tanpa sumber suara eksternal, yang dapat mempengaruhi kualitas hidup dan konsentrasi.",
    recommendation: "Konsultasikan dengan dokter THT untuk evaluasi menyeluruh, pertimbangkan terapi suara atau konseling, dan hindari paparan suara keras yang dapat memperburuk kondisi."
  },
  "sakit kepala setelah tusukan lumbar": {
    description: "Sakit kepala setelah tusukan lumbar adalah komplikasi yang terjadi setelah prosedur pengambilan cairan serebrospinal, ditandai dengan sakit kepala yang memburuk saat berdiri dan membaik saat berbaring.",
    recommendation: "Berbaring telentang, minum banyak cairan, konsumsi kafein dalam jumlah sedang, dan konsultasikan dengan dokter jika gejala berlangsung lebih dari beberapa hari."
  },
  "infeksi jamur": {
    description: "Infeksi jamur adalah kondisi medis yang terjadi ketika jamur menginfeksi bagian tubuh tertentu, biasanya kulit, kuku, atau selaput lendir. Infeksi ini dapat menyebabkan berbagai gejala seperti gatal-gatal yang intens, kemerahan pada kulit, perubahan tekstur kulit menjadi bersisik atau mengelupas, dan dalam beberapa kasus dapat menyebabkan rasa nyeri. Infeksi jamur sering terjadi di area yang lembab dan hangat seperti sela-sela jari, ketiak, atau area lipatan kulit. Kondisi ini dapat menular melalui kontak langsung atau berbagi barang pribadi, dan dapat menjadi lebih parah jika tidak ditangani dengan tepat.",
    recommendation: "Untuk mengatasi infeksi jamur, segera konsultasikan dengan dokter untuk mendapatkan diagnosis yang akurat dan pengobatan yang tepat. Dokter mungkin akan meresepkan obat antijamur topikal atau oral tergantung pada tingkat keparahan infeksi. Penting untuk menjaga area yang terinfeksi tetap kering dan bersih, hindari menggaruk area yang terinfeksi untuk mencegah penyebaran, dan ganti pakaian serta handuk secara teratur. Jangan berbagi barang pribadi seperti handuk, pakaian, atau peralatan mandi untuk mencegah penularan. Gunakan sepatu yang nyaman dan menyerap keringat, serta hindari berjalan tanpa alas kaki di area umum yang lembab seperti kolam renang atau kamar mandi umum."
  },
  "alergi": {
    description: "Alergi adalah reaksi sistem kekebalan tubuh yang berlebihan terhadap zat tertentu (alergen) yang biasanya tidak berbahaya bagi kebanyakan orang. Ketika tubuh terpapar alergen, sistem kekebalan menghasilkan antibodi yang memicu pelepasan histamin dan bahan kimia lainnya, menyebabkan berbagai gejala seperti bersin-bersin, hidung berair, mata berair dan gatal, ruam kulit, gatal-gatal, sesak napas, atau dalam kasus parah dapat menyebabkan syok anafilaksis. Alergi dapat dipicu oleh berbagai faktor seperti serbuk sari, debu, bulu hewan, makanan tertentu, obat-obatan, atau gigitan serangga. Kondisi ini dapat mempengaruhi kualitas hidup seseorang dan memerlukan penanganan yang tepat untuk mencegah komplikasi serius.",
    recommendation: "Untuk mengelola alergi secara efektif, langkah pertama adalah mengidentifikasi pemicu alergi melalui tes alergi yang dilakukan oleh dokter. Setelah mengetahui pemicunya, hindari kontak dengan alergen tersebut sebisa mungkin. Konsultasikan dengan dokter untuk mendapatkan antihistamin atau obat alergi yang sesuai dengan kondisi Anda. Pertimbangkan untuk menggunakan pembersih udara di rumah, mencuci sprei dan sarung bantal secara teratur, serta menjaga kebersihan rumah untuk mengurangi paparan alergen. Jika Anda memiliki alergi makanan, selalu baca label makanan dengan teliti dan informasikan kondisi alergi Anda saat makan di luar. Dalam kasus alergi parah, selalu bawa epinefrin auto-injector jika diresepkan oleh dokter."
  },
  "gerd": {
    description: "GERD (Gastroesophageal Reflux Disease) adalah kondisi kronis dimana asam lambung naik ke kerongkongan secara berulang, menyebabkan iritasi dan peradangan pada lapisan kerongkongan. Kondisi ini terjadi ketika otot sfingter esofagus bagian bawah melemah atau tidak berfungsi dengan baik, memungkinkan asam lambung mengalir kembali ke kerongkongan. Gejala umum termasuk sensasi terbakar di dada (heartburn), regurgitasi makanan atau cairan asam, kesulitan menelan, nyeri dada, batuk kronis, dan suara serak. Jika tidak ditangani, GERD dapat menyebabkan komplikasi serius seperti esofagitis, striktur esofagus, atau kondisi prakanker yang disebut Barrett's esophagus.",
    recommendation: "Untuk mengelola GERD secara efektif, mulailah dengan perubahan gaya hidup yang signifikan. Hindari makanan yang memicu gejala seperti makanan pedas, berlemak, asam, cokelat, kafein, dan minuman berkarbonasi. Makan dalam porsi kecil dan lebih sering, serta hindari makan 2-3 jam sebelum tidur. Pertahankan berat badan ideal karena kelebihan berat badan dapat memperburuk gejala. Tinggikan kepala tempat tidur sekitar 15-20 cm untuk mencegah asam lambung naik saat tidur. Berhenti merokok dan batasi konsumsi alkohol. Konsultasikan dengan dokter untuk mendapatkan obat penekan asam lambung yang sesuai, seperti antasida, H2 blocker, atau proton pump inhibitor. Jika gejala berlanjut atau memburuk, dokter mungkin menyarankan prosedur endoskopi atau pembedahan untuk memperbaiki sfingter esofagus."
  },
  "kolestasis kronis": {
    description: "Kolestasis kronis adalah kondisi medis serius dimana aliran empedu dari hati terhambat dalam jangka panjang, menyebabkan penumpukan empedu dan dapat mempengaruhi fungsi hati serta pencernaan. Kondisi ini dapat terjadi karena berbagai penyebab seperti batu empedu, tumor, peradangan saluran empedu, atau kelainan genetik. Gejala yang muncul dapat berupa kulit dan mata menguning (jaundice), gatal-gatal yang intens, urin berwarna gelap, tinja berwarna pucat, kelelahan, dan penurunan berat badan. Jika tidak ditangani, kolestasis kronis dapat menyebabkan kerusakan hati permanen, sirosis, atau gagal hati. Kondisi ini memerlukan penanganan medis yang komprehensif dan pemantauan rutin.",
    recommendation: "Penanganan kolestasis kronis memerlukan pendekatan multidisiplin. Konsultasikan dengan dokter spesialis hati untuk evaluasi menyeluruh dan rencana pengobatan yang tepat. Dokter mungkin meresepkan obat untuk mengurangi gatal-gatal dan membantu aliran empedu. Ikuti diet rendah lemak yang direkomendasikan dokter, hindari alkohol sepenuhnya, dan pertahankan berat badan ideal. Lakukan pemeriksaan fungsi hati secara rutin untuk memantau perkembangan kondisi. Jika penyebabnya adalah batu empedu, dokter mungkin menyarankan operasi pengangkatan kandung empedu. Dalam kasus yang parah, transplantasi hati mungkin diperlukan. Penting untuk menjaga gaya hidup sehat, menghindari obat-obatan yang dapat merusak hati, dan mendapatkan vaksinasi untuk hepatitis A dan B untuk mencegah infeksi tambahan pada hati."
  },
  "reaksi obat": {
    description: "Reaksi obat adalah respons tubuh yang tidak diinginkan terhadap obat tertentu, yang dapat bervariasi dari efek samping ringan hingga reaksi alergi yang mengancam jiwa. Reaksi ini dapat terjadi segera setelah mengonsumsi obat atau berkembang secara bertahap. Gejala dapat berupa ruam kulit, gatal-gatal, pembengkakan pada wajah atau tenggorokan, kesulitan bernapas, pusing, mual, muntah, atau dalam kasus parah dapat menyebabkan syok anafilaksis. Reaksi obat dapat terjadi pada siapa saja, tetapi risiko lebih tinggi pada orang dengan riwayat alergi atau yang mengonsumsi beberapa obat secara bersamaan. Penting untuk mengenali tanda-tanda reaksi obat dan segera mencari bantuan medis jika diperlukan.",
    recommendation: "Jika Anda mengalami reaksi terhadap obat, segera hentikan penggunaan obat tersebut dan konsultasikan dengan dokter. Catat semua obat yang menyebabkan reaksi, termasuk dosis dan waktu kejadian, untuk referensi di masa depan. Informasikan semua reaksi obat yang pernah dialami kepada setiap dokter yang merawat Anda. Dokter akan membantu menentukan alternatif pengobatan yang aman dan mungkin menyarankan tes alergi untuk mengidentifikasi obat yang harus dihindari. Selalu baca label obat dengan teliti dan ikuti petunjuk penggunaan. Jika Anda memiliki riwayat reaksi obat yang parah, pertimbangkan untuk memakai gelang atau kartu identitas medis yang menunjukkan alergi Anda. Dalam kasus reaksi parah, segera cari bantuan medis darurat dan bawa obat yang menyebabkan reaksi untuk identifikasi."
  },
  "peptik ulcer disease": {
    description: "Penyakit ulkus peptikum adalah luka pada lapisan lambung atau usus dua belas jari, menyebabkan nyeri perut, mual, dan ketidaknyamanan setelah makan.",
    recommendation: "Hindari makanan yang merangsang produksi asam lambung, berhenti merokok, kurangi konsumsi alkohol, dan konsultasikan dengan dokter untuk mendapatkan obat penekan asam lambung dan antibiotik jika diperlukan."
  },
  "aids": {
    description: "AIDS (Acquired Immunodeficiency Syndrome) adalah tahap akhir dari infeksi HIV yang melemahkan sistem kekebalan tubuh, membuat penderitanya rentan terhadap berbagai infeksi dan penyakit.",
    recommendation: "Segera konsultasikan dengan dokter spesialis penyakit menular, ikuti pengobatan antiretroviral (ARV) secara teratur, jaga gaya hidup sehat, dan lakukan pemeriksaan CD4 secara rutin."
  },
  "diabetes": {
    description: "Diabetes adalah penyakit metabolik kronis yang ditandai dengan kadar gula darah tinggi, terjadi karena tubuh tidak dapat memproduksi atau menggunakan insulin secara efektif.",
    recommendation: "Kontrol kadar gula darah secara teratur, ikuti diet seimbang rendah gula, lakukan olahraga rutin, dan konsultasikan dengan dokter untuk pengobatan yang tepat."
  },
  "gastroenteritis": {
    description: "Gastroenteritis adalah peradangan pada saluran pencernaan yang menyebabkan diare, muntah, dan kram perut, biasanya disebabkan oleh infeksi virus atau bakteri.",
    recommendation: "Jaga hidrasi dengan minum banyak cairan, konsumsi makanan yang mudah dicerna, istirahat yang cukup, dan konsultasikan dengan dokter jika gejala memburuk atau berlangsung lebih dari 3 hari."
  },
  "asma bronkial": {
    description: "Asma bronkial adalah penyakit peradangan kronis pada saluran pernapasan yang menyebabkan penyempitan saluran napas, sesak napas, dan mengi.",
    recommendation: "Hindari pemicu asma, selalu bawa inhaler, lakukan olahraga yang sesuai, dan konsultasikan dengan dokter untuk mendapatkan rencana penanganan asma yang tepat."
  },
  "hipertensi": {
    description: "Hipertensi adalah kondisi tekanan darah tinggi yang dapat merusak pembuluh darah dan meningkatkan risiko penyakit jantung, stroke, dan komplikasi lainnya.",
    recommendation: "Kurangi konsumsi garam, lakukan olahraga rutin, pertahankan berat badan ideal, dan konsultasikan dengan dokter untuk mendapatkan obat antihipertensi yang sesuai."
  },
  "migrain": {
    description: "Migrain adalah sakit kepala berdenyut yang biasanya terjadi di satu sisi kepala, disertai mual, muntah, dan sensitivitas terhadap cahaya dan suara.",
    recommendation: "Identifikasi dan hindari pemicu migrain, istirahat di ruangan gelap dan tenang saat serangan, dan konsultasikan dengan dokter untuk mendapatkan obat pencegahan dan penanganan migrain."
  },
  "spondylosis serviks": {
    description: "Spondylosis serviks adalah kondisi degeneratif pada tulang belakang leher yang menyebabkan nyeri leher, kekakuan, dan terkadang gejala neurologis seperti kesemutan di lengan.",
    recommendation: "Lakukan latihan penguatan leher, pertahankan postur tubuh yang baik, gunakan bantal yang sesuai, dan konsultasikan dengan dokter untuk terapi fisik atau pengobatan yang tepat."
  },
  "kelumpuhan (perdarahan otak)": {
    description: "Kelumpuhan akibat perdarahan otak adalah kondisi serius dimana terjadi pendarahan di dalam otak yang menyebabkan kerusakan jaringan otak dan gangguan fungsi motorik.",
    recommendation: "Segera cari bantuan medis darurat, ikuti program rehabilitasi yang direkomendasikan dokter, dan lakukan terapi fisik secara teratur untuk memulihkan fungsi motorik."
  },
  "penyakit kuning": {
    description: "Penyakit kuning adalah kondisi dimana kulit dan bagian putih mata menguning akibat penumpukan bilirubin dalam darah, biasanya terkait dengan masalah hati atau saluran empedu.",
    recommendation: "Segera konsultasikan dengan dokter untuk mengetahui penyebabnya, hindari alkohol, ikuti diet yang direkomendasikan dokter, dan lakukan pemeriksaan fungsi hati secara rutin."
  },
  "malaria": {
    description: "Malaria adalah penyakit menular yang disebabkan oleh parasit Plasmodium, ditularkan melalui gigitan nyamuk Anopheles, menyebabkan demam tinggi, menggigil, dan gejala seperti flu.",
    recommendation: "Segera konsultasikan dengan dokter untuk mendapatkan pengobatan antimalaria, gunakan kelambu saat tidur, dan hindari gigitan nyamuk dengan menggunakan obat nyamuk dan pakaian pelindung."
  },
  "cacar air": {
    description: "Cacar air adalah infeksi virus yang sangat menular, ditandai dengan ruam gatal dan lepuh berisi cairan di seluruh tubuh, disertai demam dan rasa tidak enak badan.",
    recommendation: "Istirahat yang cukup, jaga kebersihan kulit, hindari menggaruk ruam, dan konsultasikan dengan dokter untuk mendapatkan obat antivirus dan pereda gatal yang sesuai."
  },
  "demam berdarah": {
    description: "Demam berdarah adalah penyakit virus yang ditularkan melalui gigitan nyamuk Aedes, menyebabkan demam tinggi, nyeri otot, dan dapat berkembang menjadi kondisi yang mengancam jiwa.",
    recommendation: "Segera cari bantuan medis, jaga hidrasi dengan minum banyak cairan, istirahat yang cukup, dan lakukan pencegahan dengan menghindari gigitan nyamuk dan membersihkan tempat penampungan air."
  },
  "penyakit tipus": {
    description: "Penyakit tipus adalah infeksi bakteri Salmonella typhi yang menyerang saluran pencernaan, menyebabkan demam tinggi, sakit perut, dan gejala sistemik lainnya.",
    recommendation: "Konsultasikan dengan dokter untuk mendapatkan antibiotik yang sesuai, istirahat total, konsumsi makanan yang mudah dicerna, dan jaga kebersihan makanan dan minuman."
  },
  "hepatitis a": {
    description: "Hepatitis A adalah infeksi virus yang menyerang hati, ditularkan melalui makanan atau air yang terkontaminasi, menyebabkan peradangan hati akut.",
    recommendation: "Istirahat yang cukup, hindari alkohol, ikuti diet sehat, dan konsultasikan dengan dokter untuk pemantauan fungsi hati dan vaksinasi untuk pencegahan."
  },
  "hepatitis b": {
    description: "Hepatitis B adalah infeksi virus yang menyerang hati, dapat menjadi kronis dan menyebabkan sirosis atau kanker hati jika tidak ditangani.",
    recommendation: "Konsultasikan dengan dokter untuk pengobatan antivirus, hindari alkohol, lakukan pemeriksaan fungsi hati rutin, dan pertimbangkan vaksinasi untuk anggota keluarga."
  },
  "hepatitis c": {
    description: "Hepatitis C adalah infeksi virus yang menyerang hati, seringkali tidak bergejala pada tahap awal tetapi dapat menyebabkan kerusakan hati kronis.",
    recommendation: "Konsultasikan dengan dokter untuk pengobatan antivirus, hindari alkohol, lakukan pemeriksaan fungsi hati rutin, dan hindari berbagi barang pribadi yang mungkin terkontaminasi darah."
  },
  "hepatitis d": {
    description: "Hepatitis D adalah infeksi virus yang hanya terjadi pada orang yang sudah terinfeksi Hepatitis B, dapat memperburuk kondisi hati yang sudah ada.",
    recommendation: "Konsultasikan dengan dokter untuk pengobatan yang tepat, hindari alkohol, lakukan pemeriksaan fungsi hati rutin, dan ikuti pengobatan untuk Hepatitis B yang mendasarinya."
  },
  "hepatitis e": {
    description: "Hepatitis E adalah infeksi virus yang menyerang hati, biasanya ditularkan melalui air yang terkontaminasi, dan dapat menjadi serius pada wanita hamil.",
    recommendation: "Istirahat yang cukup, hindari alkohol, konsumsi makanan yang bersih dan matang, dan konsultasikan dengan dokter untuk pemantauan fungsi hati."
  },
  "hepatitis alkoholik": {
    description: "Hepatitis alkoholik adalah peradangan hati yang disebabkan oleh konsumsi alkohol berlebihan, dapat menyebabkan kerusakan hati permanen jika tidak ditangani.",
    recommendation: "Berhenti mengonsumsi alkohol sepenuhnya, ikuti diet sehat, konsultasikan dengan dokter untuk pengobatan yang tepat, dan pertimbangkan untuk bergabung dengan program rehabilitasi alkohol."
  },
  "tbc": {
    description: "Tuberkulosis (TBC) adalah infeksi bakteri yang menyerang paru-paru, dapat menyebar ke organ lain, dan memerlukan pengobatan jangka panjang.",
    recommendation: "Ikuti pengobatan antibiotik secara teratur dan lengkap, istirahat yang cukup, konsumsi makanan bergizi, dan lakukan pemeriksaan rutin untuk memantau perkembangan penyakit."
  },
  "flu biasa": {
    description: "Flu biasa adalah infeksi virus pada saluran pernapasan atas, menyebabkan gejala seperti pilek, batuk, sakit tenggorokan, dan demam ringan.",
    recommendation: "Istirahat yang cukup, minum banyak cairan, konsumsi makanan bergizi, dan konsultasikan dengan dokter jika gejala memburuk atau berlangsung lebih dari seminggu."
  },
  "radang paru-paru": {
    description: "Radang paru-paru adalah infeksi yang menyebabkan peradangan pada kantung udara di paru-paru, dapat disebabkan oleh bakteri, virus, atau jamur.",
    recommendation: "Segera konsultasikan dengan dokter untuk mendapatkan antibiotik yang sesuai, istirahat yang cukup, minum banyak cairan, dan hindari merokok."
  },
  "hemmorhoids dimorfik (tumpukan)": {
    description: "Wasir adalah pembengkakan pembuluh darah di area anus dan rektum, menyebabkan nyeri, gatal, dan perdarahan saat buang air besar.",
    recommendation: "Konsumsi makanan tinggi serat, minum banyak air, hindari duduk terlalu lama, dan konsultasikan dengan dokter untuk mendapatkan pengobatan yang sesuai."
  },
  "serangan jantung": {
    description: "Serangan jantung adalah kondisi darurat medis dimana aliran darah ke jantung terhambat, menyebabkan kerusakan pada otot jantung.",
    recommendation: "Segera cari bantuan medis darurat, ikuti program rehabilitasi jantung, ubah gaya hidup menjadi lebih sehat, dan konsultasikan dengan dokter untuk pengobatan jangka panjang."
  },
  "pembuluh mekar": {
    description: "Pembuluh mekar (varises) adalah pembengkakan pembuluh darah vena, biasanya di kaki, yang menyebabkan nyeri dan ketidaknyamanan.",
    recommendation: "Gunakan stoking kompresi, hindari berdiri terlalu lama, lakukan olahraga ringan, dan konsultasikan dengan dokter untuk mendapatkan pengobatan yang sesuai."
  },
  "hipotiroidisme": {
    description: "Hipotiroidisme adalah kondisi dimana kelenjar tiroid tidak menghasilkan cukup hormon tiroid, menyebabkan metabolisme tubuh melambat.",
    recommendation: "Konsultasikan dengan dokter untuk mendapatkan terapi pengganti hormon tiroid, lakukan pemeriksaan rutin, dan ikuti diet yang seimbang."
  },
  "hipertiroidisme": {
    description: "Hipertiroidisme adalah kondisi dimana kelenjar tiroid menghasilkan terlalu banyak hormon tiroid, menyebabkan metabolisme tubuh menjadi terlalu cepat.",
    recommendation: "Konsultasikan dengan dokter untuk mendapatkan pengobatan yang tepat, hindari makanan tinggi yodium, dan lakukan pemeriksaan rutin untuk memantau kadar hormon."
  },
  "hipoglikemia": {
    description: "Hipoglikemia adalah kondisi kadar gula darah yang terlalu rendah, dapat menyebabkan pusing, lemas, dan dalam kasus parah dapat menyebabkan kehilangan kesadaran.",
    recommendation: "Selalu bawa makanan atau minuman manis, makan secara teratur, hindari melewatkan waktu makan, dan konsultasikan dengan dokter untuk penanganan yang tepat."
  },
  "osteoarthristis": {
    description: "Osteoarthritis adalah kondisi degeneratif pada sendi yang menyebabkan nyeri, kekakuan, dan pembengkakan, terutama pada sendi yang menahan beban.",
    recommendation: "Lakukan olahraga ringan secara teratur, pertahankan berat badan ideal, gunakan alat bantu jika diperlukan, dan konsultasikan dengan dokter untuk mendapatkan pengobatan yang sesuai."
  },
  "radang sendi": {
    description: "Radang sendi adalah peradangan pada sendi yang menyebabkan nyeri, kekakuan, dan pembengkakan, dapat mempengaruhi mobilitas dan kualitas hidup.",
    recommendation: "Lakukan olahraga ringan, terapi fisik, konsumsi makanan antiinflamasi, dan konsultasikan dengan dokter untuk mendapatkan pengobatan yang tepat."
  },
  "(vertigo) paroymsal positional vertigo": {
    description: "Vertigo posisional paroksismal jinak adalah gangguan keseimbangan yang menyebabkan sensasi berputar saat mengubah posisi kepala, disebabkan oleh masalah pada telinga dalam.",
    recommendation: "Hindari gerakan kepala yang tiba-tiba, lakukan latihan rehabilitasi vestibular, dan konsultasikan dengan dokter untuk mendapatkan terapi yang tepat."
  },
  "jerawat": {
    description: "Jerawat adalah kondisi kulit yang terjadi ketika folikel rambut tersumbat oleh minyak dan sel kulit mati, menyebabkan peradangan dan benjolan pada kulit.",
    recommendation: "Jaga kebersihan wajah, hindari memencet jerawat, gunakan produk perawatan kulit yang sesuai, dan konsultasikan dengan dokter kulit untuk pengobatan yang tepat."
  },
  "infeksi saluran kemih": {
    description: "Infeksi saluran kemih adalah infeksi bakteri pada sistem kemih, menyebabkan nyeri saat buang air kecil, sering buang air kecil, dan ketidaknyamanan di area panggul.",
    recommendation: "Minum banyak air putih, jaga kebersihan area genital, konsultasikan dengan dokter untuk mendapatkan antibiotik, dan hindari menahan buang air kecil."
  },
  "psoriasis": {
    description: "Psoriasis adalah penyakit autoimun yang menyebabkan penumpukan sel kulit secara cepat, membentuk sisik dan bercak merah yang gatal dan terkadang menyakitkan.",
    recommendation: "Gunakan pelembab secara teratur, hindari pemicu yang memperburuk kondisi, lakukan terapi cahaya jika direkomendasikan dokter, dan konsultasikan dengan dokter kulit untuk pengobatan yang tepat."
  },
  "impetigo": {
    description: "Impetigo adalah infeksi kulit menular yang disebabkan oleh bakteri, ditandai dengan luka merah dan lepuh yang dapat pecah dan membentuk kerak berwarna madu.",
    recommendation: "Jaga kebersihan kulit, hindari menyentuh atau menggaruk luka, gunakan antibiotik topikal sesuai resep dokter, dan hindari berbagi barang pribadi untuk mencegah penularan."
  }
};

export default diseaseData; 