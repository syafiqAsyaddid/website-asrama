// Database Utility for Asrama IPB Ekasari
// Supports pluggable LocalStorage fallback for offline/local usage

const DEFAULT_NEWS = [
  {
    id: "oprec-2026",
    title: "Open Recruitment Asrama IPB Ekasari 2026",
    summary: "Pendaftaran warga baru Asrama IPB Ekasari tahun 2026 telah dibuka. Kuota terbatas, segera daftarkan dirimu!",
    image: "assets/images/oprec-poster.jpg",
    content: "Pendaftaran warga baru Asrama IPB Ekasari tahun 2026 resmi dibuka! Hunian mahasiswa swakelola strategis, nyaman, dan berkarakter di pusat Kota Bogor (Jl. Sempur No. 22).<br><br>Kami menawarkan hunian dengan fasilitas lengkap penunjang produktivitas warga asrama dengan harga yang sangat terjangkau.<br><br><strong>Persyaratan Calon Penghuni:</strong><br>1. Mahasiswa aktif Sekolah Vokasi IPB University.<br>2. Berkomitmen menaati segala peraturan asrama.<br>3. Memiliki jiwa gotong royong dan kekeluargaan.<br><br>Kuota terbatas! Segera daftarkan diri Anda sebelum pendaftaran ditutup.",
    date: "2026-05-23",
    isMain: true,
    link: "https://ipb.link/oprec-penghuni-ekasari63"
  },
  {
    id: "dies-natalis",
    title: "Dies Natalis Asrama",
    summary: "Perayaan ulang tahun Asrama Ekasari dengan penuh kebahagiaan dan kebersamaan.",
    image: "assets/images/dies-natalis.jpg",
    content: "Dies Natalis Asrama IPB Ekasari diselenggarakan dengan penuh kebahagiaan dan dihadiri oleh segenap pengurus, warga aktif, serta beberapa perwakilan alumni. Acara ini merupakan bentuk syukur atas perjalanan panjang asrama sejak tahun 1957 sebagai rumah bagi generasi berprestasi.<br><br>Rangkaian kegiatan Dies Natalis mencakup pertandingan olahraga persahabatan antar kamar, lomba seni, syukuran pemotongan tumpeng, hingga malam puncak kebersamaan.",
    date: "2026-05-10",
    isMain: false,
    link: ""
  },
  {
    id: "kerja-bakti",
    title: "Kerja Bakti & Gotong Royong",
    summary: "Warga bersama-sama membangun fasilitas dan menjaga kebersihan lingkungan asrama.",
    image: "assets/images/kerja-bakti.jpg",
    content: "Untuk menjaga kenyamanan lingkungan asrama, warga Asrama IPB Ekasari bergotong-royong melaksanakan kegiatan kerja bakti berkala. Fokus kegiatan kali ini adalah membersihkan area aula bersama, menata taman depan asrama, dan membersihkan saluran air.<br><br>Kegiatan ini selain bertujuan menjaga kebersihan, juga menumbuhkan rasa kepemilikan dan kebersamaan antar warga.",
    date: "2026-05-15",
    isMain: false,
    link: ""
  },
  {
    id: "pemilihan-ketua",
    title: "Pemilihan Ketua Asrama",
    summary: "Momen demokrasi warga untuk memilih pemimpin asrama periode baru.",
    image: "assets/images/ketua.jpg",
    content: "Demokrasi berjalan hangat di Asrama IPB Ekasari melalui Pemilihan Ketua Asrama periode baru. Pemilihan ini melibatkan penyampaian visi misi dari masing-masing calon ketua, debat terbuka warga, dan pemungutan suara secara langsung.<br><br>Selamat kepada ketua terpilih, semoga dapat mengemban amanah dengan baik dan membawa Ekasari menjadi hunian yang semakin harmonis dan berprestasi.",
    date: "2026-05-20",
    isMain: false,
    link: ""
  }
];

const DEFAULT_ACHIEVEMENTS = [
  {
    id: "yera",
    name: "Yera Herdyansyah",
    program: "AKN'60 — Sekretaris Wilayah Bogor BEM SV IPB 2024/2025",
    photo: "assets/images/goa.png",
    list: ["Ketua Divisi Pendidikan dan Pengabdian Tax Center SV IPB"],
    order: 1
  },
  {
    id: "nabil",
    name: "Nabil Taufiqurahman",
    program: "LNK'60 — Outscholars IPB Outsco 2024/2025",
    photo: "assets/images/nabil.png",
    list: [
      "Juara 2 PKM-PM PIMNAS 38 Kategori Poster",
      "Juara 2 PKM-PM PIMNAS 38 Kategori Presentasi",
      "Delegasi Suiji SLP 2025"
    ],
    order: 2
  },
  {
    id: "dzikri",
    name: "Dzikri Fajar Lukmana",
    program: "MNI'59 — Internship PT. Unilever Indonesia Tbk.",
    photo: "assets/images/gopal.jpg",
    list: [
      "Juara 1 Essay tingkat Internasional",
      "Best Presenter Lomba Karya Tulis Ilmiah tingkat Nasional",
      "Favorite Team Water for Food Youth Challenge: Pekalongan Edition"
    ],
    order: 3
  },
  {
    id: "david",
    name: "David Reza Widhiwipati",
    program: "TPL'59 — Awardee Beasiswa BRILiaN",
    photo: "assets/images/dipsi.png",
    list: [
      "Juara 2 Desain Packaging Tingkat Nasional",
      "Staf BEM SV IPB Kominfo 2023"
    ],
    order: 4
  },
  {
    id: "aziz",
    name: "Abdul Aziz Rizal",
    program: "MNI'59 — Staf BEM SV IPB Adkesmah 2023",
    photo: "assets/images/shiro.png",
    list: [
      "Juara 2 Lomba Inovasi Penghijauan",
      "Juara 3 Lomba Startup Innovation",
      "Juara Harapan Kisah Inspiratif IPB"
    ],
    order: 5
  },
  {
    id: "agung",
    name: "Agung Laksono",
    program: "AKN'60 — Ketua Bidang Kemahasiswaan Tax Center SV IPB 2025",
    photo: "assets/images/agung3.jpg",
    list: [
      "PJK MPKMB SV IPB 61",
      "Staf Departement Pengembangan Karier BEM SV IPB 2024"
    ],
    order: 6
  },
  {
    id: "dinar",
    name: "Dinar Lukmanudin",
    program: "JMP'60 — Juara Essay Internasional",
    photo: "assets/images/candi.png",
    list: [
      "Juara 2 PKM-PM PIMNAS 38 Kategori Poster",
      "Juara 2 PKM-PM PIMNAS 38 Kategori Presentasi",
      "Staf Divisi Acara MPKMB SV IPB 61"
    ],
    order: 7
  },
  {
    id: "daffa-n",
    name: "M. Daffa Nurrochman",
    program: "MAB'60 — Kasubdiv Produksi Media Jelajah IPB 2025",
    photo: "assets/images/komet.png",
    list: [
      "Member Panti Goceng 2025",
      "PIC Visual Design Fiksioner Indonesia 2025",
      "Staf DDB MPKMB SV IPB 61"
    ],
    order: 8
  },
  {
    id: "ahmad",
    name: "Ahmad Nur Setiawan",
    program: "GZI'60",
    photo: "assets/images/jagat.png",
    list: ["Juara 1 Lomba Essay I-Sinergie PTSN Malaysia 2025"],
    order: 9
  },
  {
    id: "muhammeil",
    name: "Muhammeil Aditya Basyar",
    program: "TMP'61 — Menteri Pertanian & Desa BEM KM IPB 2026",
    photo: "assets/images/bius.jpg",
    list: ["Menteri Kementerian Pertanian dan Desa BEM KM IPB 2026"],
    order: 10
  },
  {
    id: "christian",
    name: "Christian Leonardo",
    program: "TRK'61 — Sekretaris Dep. Kesmah BEM SV IPB 2026",
    photo: "assets/images/tian.png",
    list: [
      "Lolos Pendanaan PKM-PM 2026",
      "Sekretaris Departemen Kesejahteraan Mahasiswa BEM SV IPB 2026",
      "Staf Kementerian Kesejahteraan Mahasiswa BEM KM IPB 2025"
    ],
    order: 11
  },
  {
    id: "shaoqi",
    name: "Shaoqi Alfarizi",
    program: "TMP'61 — Ketua DPM SV IPB 2026",
    photo: "assets/images/bedah.png",
    list: [
      "Juara 1 Essay MYC Nasional",
      "Juara 2 Video Pendek Lensa Aspirasi 2025",
      "Juara 3 Policy Brief Competition 2025"
    ],
    order: 12
  },
  {
    id: "fadli",
    name: "M. Fadli Abdullah",
    program: "MAB'61 — Ketua Departemen Kastrad BEM SV IPB 2026",
    photo: "assets/images/bekam.png",
    list: ["Ketua Departemen Kastrad BEM SV IPB 2026"],
    order: 13
  },
  {
    id: "syafiq",
    name: "Syafiq Fathinas Syaddid",
    program: "TPL'61 — Awardee Beasiswa BSI Scholarship",
    photo: "assets/images/syafiq.jpeg",
    list: ["Juara 3 Kejuaran Taekwondo Pancasila 2"],
    order: 14
  },
  {
    id: "dhafa",
    name: "Dhafa Fachizal A",
    program: "MNI'62",
    photo: "assets/images/pasar.jpeg",
    list: ["Juara 2 Kejuaran Taekwondo Pancasila 2"],
    order: 15
  },
  {
    id: "satria",
    name: "Satria wiwaha Pangestu",
    program: "TNK`62 — Awardee Beasiswa Van Deventer-Maas",
    photo: "assets/images/pending.png",
    list: ["Silver Medal 20th National Folklore Festival FEB UI"],
    order: 16
  }
];

// Helper to determine if we are running in local file protocol (offline mode)
const isLocalProtocol = () => window.location.protocol === 'file:';

// Helper to safely write to localStorage with error catching
function safeSaveLocalStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    if (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
      console.error('LocalStorage Quota Exceeded!', error);
      throw new Error("Penyimpanan lokal browser penuh. Harap kurangi ukuran file gambar atau hapus cache browser Anda.");
    }
    throw error;
  }
}

// Helper to fetch data asynchronously (handles HTTP load or fallback to localStorage)
async function fetchData(fileName, localStorageKey, defaultData) {
  if (isLocalProtocol()) {
    return loadFromLocalStorage(localStorageKey, defaultData);
  }

  try {
    const response = await fetch(`data/${fileName}?t=${Date.now()}`); // cache busting
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Cache it to localstorage just in case
    safeSaveLocalStorage(localStorageKey, JSON.stringify(data));
    return data;
  } catch (error) {
    console.warn(`Fetch data/${fileName} failed, falling back to LocalStorage:`, error);
    return loadFromLocalStorage(localStorageKey, defaultData);
  }
}

function loadFromLocalStorage(key, defaultData) {
  const localData = localStorage.getItem(key);
  if (localData) {
    try {
      return JSON.parse(localData);
    } catch (e) {
      console.error(`Error parsing LocalStorage key "${key}":`, e);
    }
  }
  // Initialize and save defaults
  safeSaveLocalStorage(key, JSON.stringify(defaultData));
  return defaultData;
}

// === EXPOSED DATABASE API ===

const db = {
  // --- NEWS API ---
  async getNews() {
    return fetchData('news.json', 'ekasari_news', DEFAULT_NEWS);
  },

  async getNewsById(id) {
    const news = await this.getNews();
    return news.find(item => item.id === id) || null;
  },

  async saveNews(newsItem) {
    const news = await this.getNews();
    const index = news.findIndex(item => item.id === newsItem.id);
    
    if (index !== -1) {
      news[index] = newsItem;
    } else {
      news.push(newsItem);
    }

    // Save to LocalStorage first
    safeSaveLocalStorage('ekasari_news', JSON.stringify(news));

    if (!isLocalProtocol()) {
      // Send to server PHP API
      try {
        const formData = new FormData();
        formData.append('action', 'save_news');
        formData.append('data', JSON.stringify(news));
        
        const response = await fetch('admin/api.php', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();
        if (!result.success) {
          throw new Error(result.message);
        }
      } catch (error) {
        console.error('Server sync failed:', error);
        throw error;
      }
    }
    return news;
  },

  async deleteNews(id) {
    let news = await this.getNews();
    news = news.filter(item => item.id !== id);

    safeSaveLocalStorage('ekasari_news', JSON.stringify(news));

    if (!isLocalProtocol()) {
      try {
        const formData = new FormData();
        formData.append('action', 'save_news');
        formData.append('data', JSON.stringify(news));
        
        const response = await fetch('admin/api.php', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();
        if (!result.success) {
          throw new Error(result.message);
        }
      } catch (error) {
        console.error('Server sync failed:', error);
        throw error;
      }
    }
    return news;
  },

  // --- ACHIEVEMENTS API ---
  async getAchievements() {
    const list = await fetchData('prestasi.json', 'ekasari_prestasi', DEFAULT_ACHIEVEMENTS);
    return list.sort((a, b) => (parseInt(a.order) || 0) - (parseInt(b.order) || 0));
  },

  async getAchievementById(id) {
    const achievements = await this.getAchievements();
    return achievements.find(item => item.id === id) || null;
  },

  async saveAchievement(achievementItem) {
    const achievements = await this.getAchievements();
    const index = achievements.findIndex(item => item.id === achievementItem.id);

    if (index !== -1) {
      achievements[index] = achievementItem;
    } else {
      achievements.push(achievementItem);
    }

    safeSaveLocalStorage('ekasari_prestasi', JSON.stringify(achievements));

    if (!isLocalProtocol()) {
      try {
        const formData = new FormData();
        formData.append('action', 'save_achievements');
        formData.append('data', JSON.stringify(achievements));
        
        const response = await fetch('admin/api.php', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();
        if (!result.success) {
          throw new Error(result.message);
        }
      } catch (error) {
        console.error('Server sync failed:', error);
        throw error;
      }
    }
    return achievements;
  },

  async deleteAchievement(id) {
    let achievements = await this.getAchievements();
    achievements = achievements.filter(item => item.id !== id);

    safeSaveLocalStorage('ekasari_prestasi', JSON.stringify(achievements));

    if (!isLocalProtocol()) {
      try {
        const formData = new FormData();
        formData.append('action', 'save_achievements');
        formData.append('data', JSON.stringify(achievements));
        
        const response = await fetch('admin/api.php', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();
        if (!result.success) {
          throw new Error(result.message);
        }
      } catch (error) {
        console.error('Server sync failed:', error);
        throw error;
      }
    }
    return achievements;
  }
};

// Export to window so it is accessible globally without ES Modules import restrictions
window.ekasariDb = db;
