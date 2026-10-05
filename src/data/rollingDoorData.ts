export interface Product {
  id: string;
  name: string;
  category: 'industry' | 'onesheet' | 'aluminium' | 'special';
  badgeTitle: string;
  tagline: string;
  description: string;
  image: string;
  slatThickness: string;
  maxDimension: string;
  operationType: string;
  idealFor: string[];
  features: string[];
  startingPriceM2: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'Pabrik & Gudang' | 'Pusat Perbelanjaan' | 'Residensial' | 'Komersial';
  location: string;
  specs: string;
  dimension: string;
  motor: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'industry-heavy-duty',
    name: 'Rolling Door Otomatis Heavy Duty Industri',
    category: 'industry',
    badgeTitle: 'Spesifikasi Industri',
    tagline: 'Kekuatan maksimal untuk pintu gudang logistik, pabrik, dan hangar',
    description: 'Dirancang khusus untuk bentang lebar hingga 12 meter dengan slat baja galvalum tebal anti-karat. Dilengkapi motor industri tahan panas dengan opsi rantai manual saat pemadaman listrik.',
    image: '/src/assets/images/product_rolling_door_industry_1791210645595.jpg',
    slatThickness: '0.8 mm – 1.6 mm Galvalum Steel',
    maxDimension: 'Lebar s/d 12.0m x Tinggi s/d 9.0m',
    operationType: 'Elektrik Motor Shinsei Seiki / Somfy / Terano + Emergency Chain',
    idealFor: ['Pabrik Manufaktur', 'Gudang Logistik', 'Depo Kontainer', 'Loading Dock'],
    features: [
      'Sistem auto-reverse safety sensor anti-jepit',
      'Motor heavy duty continuous duty cycle',
      'Finishing powder coating tahan cuaca ekstrem',
      'Slat interlocking anti-lepas angin kencang (windlock guide)'
    ],
    startingPriceM2: 1250000
  },
  {
    id: 'onesheet-perforated',
    name: 'Rolling Door One Sheet Perforated (Semi-Lubang)',
    category: 'onesheet',
    badgeTitle: 'Terlaris untuk Mall & Ruko',
    tagline: 'Kombinasi keamanan kokoh dengan sirkulasi udara dan visibilitas etalase',
    description: 'Terbuat dari lembaran baja galvalum utuh tanpa sambungan slat horizontal konvensional, sehingga sangat senyap saat dibuka-tutup. Dilengkapi nilon peredam suara di rel samping.',
    image: '/src/assets/images/product_rolling_door_onesheet_1791210662013.jpg',
    slatThickness: '0.50 mm – 0.60 mm Continuous Galvalum Sheet',
    maxDimension: 'Lebar s/d 4.5m x Tinggi s/d 3.5m',
    operationType: 'Manual Per Tarik Ringan / Otomatis Tubular Motor',
    idealFor: ['Tenant Mall & Plaza', 'Ruko Pertokoan', 'Outlet Retail', 'Showroom'],
    features: [
      'Pengoperasian silent 80% lebih hening dibanding rolling door biasa',
      'Perforasi mikro menjaga ventilasi dan visibilitas display toko',
      'Sistem kunci ganda tengah dan bawah anti-linggis',
      'Nylon guide lining tahan aus dan minim gesekan'
    ],
    startingPriceM2: 550000
  },
  {
    id: 'onesheet-solid',
    name: 'Rolling Door One Sheet Solid (Rapat Penuh)',
    category: 'onesheet',
    badgeTitle: 'Privasi & Proteksi Penuh',
    tagline: 'Pintu ruko rapat tanpa celah pandang, tahan congkel, dan tahan debu',
    description: 'Pilihan standar terbaik untuk toko emas, apotek, minimarket, dan kantor kas. Lembaran utuh solid dengan cat oven elektrostatik anti-karat.',
    image: '/src/assets/images/hero_rolling_door_modern_1791210629074.jpg',
    slatThickness: '0.50 mm – 0.55 mm Galvalum Steel',
    maxDimension: 'Lebar s/d 4.5m x Tinggi s/d 3.5m',
    operationType: 'Manual Spring Pulley / Motor Elektrik',
    idealFor: ['Ruko Komersial', 'Minimarket & Swalayan', 'Apotek & Bank', 'Kios Pasar Modern'],
    features: [
      'Lembaran seamless tanpa sambungan sela slat',
      'Karet peredam bawah kedap air hujan & debu',
      'Kunci central side lock ergonomis',
      'Tersedia pilihan warna custom arsitektural'
    ],
    startingPriceM2: 480000
  },
  {
    id: 'aluminium-premium',
    name: 'Rolling Door Aluminium Anodized Premium',
    category: 'aluminium',
    badgeTitle: 'Anti-Karat 100%',
    tagline: 'Ringan, elegan, tahan korosi air laut, sangat cocok untuk garasi mewah',
    description: 'Menggunakan profil aluminium extrusion alloy 6063-T5 dengan anodized surface finishing. Sangat tahan korosi dan memberikan estetika fasad modern premium.',
    image: '/src/assets/images/project_rolling_door_garage_1791210673770.jpg',
    slatThickness: '1.0 mm – 1.4 mm Aluminium Alloy 6063 T5',
    maxDimension: 'Lebar s/d 6.0m x Tinggi s/d 4.0m',
    operationType: 'Motorized Remote Control + Smart Home Integration',
    idealFor: ['Garasi Rumah Mewah', 'Villa Tepi Pantai', 'Boutique Car Showroom', 'Resor'],
    features: [
      'Bebas karat seumur hidup bahkan di kawasan pesisir pantai',
      'Bobot 60% lebih ringan, memperpanjang usia motor listrik',
      'Desain profil minimalis modern finishing anodize atau powder coat',
      'Kompatibel dengan remote nirkabel dan sensor smartphone'
    ],
    startingPriceM2: 1350000
  },
  {
    id: 'polycarbonate-transparent',
    name: 'Rolling Door Polycarbonate Transparan Kristal',
    category: 'special',
    badgeTitle: 'Display Mewah',
    tagline: 'Kaca bening polimer benturan tinggi untuk etalase butik dan jewelry store',
    description: 'Slat polycarbonate bening setebal 3mm dengan sambungan rangka aluminium atau stainless steel. Memberikan perlindungan fisik maksimal sekaligus menampilkan keindahan interior display 24 jam.',
    image: '/src/assets/images/product_rolling_door_onesheet_1791210662013.jpg',
    slatThickness: '3.0 mm Polycarbonate Sheet UV Protected + Rangka Aluminium',
    maxDimension: 'Lebar s/d 5.5m x Tinggi s/d 3.5m',
    operationType: 'Motorized Otomatis / Manual',
    idealFor: ['Toko Perhiasan & Jam Mewah', 'Butik Fashion Mall', 'Bank & Galeri Seni', 'Bandara'],
    features: [
      'Transparansi 92% sejernih kaca dengan ketahanan benturan 250x kaca biasa',
      'Lapisan UV coating anti-menguning dan anti-pudar',
      'Flame retardant (tahan api standar kelas 1)',
      'Estetika mewah bertaraf internasional'
    ],
    startingPriceM2: 2100000
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Loading Bay Pintu Hangar Pergudangan Cikarang',
    client: 'PT Nippon Logistics Indonesia',
    category: 'Pabrik & Gudang',
    location: 'Kawasan Industri GIIC Cikarang Pusat',
    specs: '6 Unit Rolling Door Otomatis Galvalum 1.2mm Windlock',
    dimension: '7.5m x 6.0m per unit',
    motor: 'Shinsei Seiki 1000kg Japan Standard',
    image: '/src/assets/images/product_rolling_door_industry_1791210645595.jpg'
  },
  {
    id: 'p2',
    title: 'Storefront Luxury Boutique Mall Kelapa Gading',
    client: 'Grand Fashion Avenue',
    category: 'Pusat Perbelanjaan',
    location: 'Jakarta Utara',
    specs: 'Rolling Door One Sheet Semi-Perforated White Powder Coating',
    dimension: '4.8m x 3.2m',
    motor: 'Tubular Motor Somfy Silent 50Nm + Wireless Keypad',
    image: '/src/assets/images/product_rolling_door_onesheet_1791210662013.jpg'
  },
  {
    id: 'p3',
    title: 'Garasi Mobil Mewah Modern Minimalis Residensial',
    client: 'Private Residence (Bpk. Hendra S.)',
    category: 'Residensial',
    location: 'Bukit Golf Mediterania, PIK Jakarta',
    specs: 'Rolling Door Aluminium Anodized Dark Slate Grey',
    dimension: '5.2m x 2.8m',
    motor: 'Motorized Smart Automation + Safety Beam Anti-Pinch',
    image: '/src/assets/images/project_rolling_door_garage_1791210673770.jpg'
  },
  {
    id: 'p4',
    title: 'Distribution Center Logistics Cold Chain',
    client: 'PT Berkat Logistik Nusantara',
    category: 'Pabrik & Gudang',
    location: 'Kawasan Industri KIIC Karawang Barat',
    specs: 'Heavy Duty 1.4mm with High Speed Rolling Shutter Integration',
    dimension: '6.0m x 5.5m',
    motor: 'Eastone Industrial Shutter 1500kg Motor',
    image: '/src/assets/images/hero_rolling_door_modern_1791210629074.jpg'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Harga & Biaya',
    question: 'Berapa kisaran harga pasang rolling door per meter persegi?',
    answer: 'Harga sangat bervariasi sesuai tipe: Rolling door One Sheet manual berkisar antara Rp 480.000 – Rp 650.000/m², Aluminium Anodized Rp 1.350.000 – Rp 1.800.000/m², dan Rolling Door Otomatis Industri Heavy Duty berkisar Rp 1.250.000 – Rp 2.500.000/m² tergantung ketebalan slat (0.8–1.6mm) dan kapasitas motor elektrik yang dibutuhkan.'
  },
  {
    category: 'Layanan & Survey',
    question: 'Apakah ada biaya untuk survey lokasi dan pengukuran?',
    answer: 'Gratis tanpa dipungut biaya apapun untuk seluruh area Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) dan kawasan industri sekitarnya. Teknisi kami akan datang membawa sampel material, mengukur opening dengan laser distance meter, dan memberikan rekomendasi teknis terbaik.'
  },
  {
    category: 'Garansi & Kualitas',
    question: 'Berapa lama masa garansi yang diberikan?',
    answer: 'Kami memberikan garansi resmi mesin motor elektrik hingga 3 tahun (ganti unit jika cacat pabrik), garansi instalasi mekanikal dan pergerakan rel selama 1 tahun, serta jaminan ketersediaan suku cadang asli hingga 10 tahun.'
  },
  {
    category: 'Keamanan & Fitur',
    question: 'Bagaimana jika listrik padam? Apakah pintu otomatis masih bisa dibuka?',
    answer: 'Tentu. Setiap unit motor rolling door industri kami dilengkapi dengan sistem rantai darurat manual (manual release chain block) yang dapat ditarik dengan enteng tanpa tenaga berat. Kami juga menyediakan opsi perangkat UPS (Uninterruptible Power Supply) sehingga pintu tetap beroperasi elektrik saat blackout.'
  },
  {
    category: 'Waktu Pengerjaan',
    question: 'Berapa hari waktu fabrikasi hingga selesai terpasang?',
    answer: 'Untuk tipe One Sheet standar ruko: 2 hingga 4 hari kerja. Untuk proyek industri custom atau bentang di atas 6 meter: 7 hingga 10 hari kerja. Kami memiliki pabrik fabrikasi sendiri dengan mesin roll forming presisi sehingga waktu tunggu jauh lebih cepat dibanding perantara.'
  },
  {
    category: 'Servis & Perbaikan',
    question: 'Apakah Archon melayani service dan retrofit rolling door lama?',
    answer: 'Ya, kami memiliki divisi khusus Servis Siaga 24 Jam untuk penanganan pintu macet, slat anjlok, pergantian per/spring yang putus, hingga retrofit upgrade dari sistem manual tarik menjadi otomatis remote elektrik.'
  }
];

export const MATERIAL_SPECS = [
  {
    id: 'onesheet_solid',
    name: 'One Sheet Solid (0.50 mm)',
    basePriceM2: 480000,
    minArea: 6,
    recommendedFor: 'Ruko, garasi standar, toko ritel',
    windResistance: 'Sedang (s/d 60 km/jam)'
  },
  {
    id: 'onesheet_perforated',
    name: 'One Sheet Semi-Perforated (0.55 mm)',
    basePriceM2: 550000,
    minArea: 6,
    recommendedFor: 'Mall, butik, kios ber-AC dengan ventilasi',
    windResistance: 'Sedang (s/d 65 km/jam)'
  },
  {
    id: 'galvalum_industry_08',
    name: 'Baja Galvalum Industri (0.80 mm)',
    basePriceM2: 850000,
    minArea: 10,
    recommendedFor: 'Gudang sedang, bengkel, workshop',
    windResistance: 'Tinggi (s/d 90 km/jam)'
  },
  {
    id: 'galvalum_industry_12',
    name: 'Baja Galvalum Heavy Duty (1.20 mm)',
    basePriceM2: 1250000,
    minArea: 15,
    recommendedFor: 'Pabrik besar, loading dock, bentang lebar',
    windResistance: 'Sangat Tinggi (s/d 120 km/jam + Windlock)'
  },
  {
    id: 'aluminium_12',
    name: 'Aluminium Anodized 6063 T5 (1.20 mm)',
    basePriceM2: 1350000,
    minArea: 6,
    recommendedFor: 'Garasi mewah, hunian modern, anti-karat pesisir',
    windResistance: 'Tinggi (s/d 85 km/jam)'
  },
  {
    id: 'polycarbonate_30',
    name: 'Polycarbonate Transparan Kristal (3.0 mm)',
    basePriceM2: 2100000,
    minArea: 6,
    recommendedFor: 'Jewelry shop, showroom mewah, butik branded',
    windResistance: 'Tinggi (s/d 80 km/jam)'
  }
];

export const MOTOR_OPTIONS = [
  {
    id: 'manual',
    name: 'Manual (Spring Pulley / Chain Block)',
    capacity: 'Pintu < 12 m²',
    warranty: '1 Tahun Mekanikal',
    price: 0,
    description: 'Pengoperasian manual dengan per pegas fleksibel atau katrol rantai'
  },
  {
    id: 'motor_std',
    name: 'Motor Elektrik Automatic 600 kg',
    capacity: 'Luas pintu s/d 25 m²',
    warranty: '2 Tahun Garansi Mesin',
    price: 3800000,
    description: 'Termasuk 2 remote wireless, tombol push button tembok, & rantai manual cadangan'
  },
  {
    id: 'motor_heavy',
    name: 'Motor Heavy Duty Shinsei Seiki 1000 kg (Japan)',
    capacity: 'Luas pintu s/d 45 m²',
    warranty: '3 Tahun Garansi Mesin Resmi',
    price: 7200000,
    description: 'Motor industri heavy duty continuous duty, tahan panas, sertifikasi ISO'
  },
  {
    id: 'motor_jumbo',
    name: 'Motor Extra Heavy Duty 1500 kg (Heavy Plant)',
    capacity: 'Luas pintu s/d 70 m²',
    warranty: '3 Tahun Garansi Mesin Resmi',
    price: 11500000,
    description: 'Untuk pintu pabrik bentang raksasa dengan fitur dual limit switch presisi'
  }
];
