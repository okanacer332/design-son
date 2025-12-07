import { Dictionary } from '../types';

export const tr: Dictionary = {
  header: {
    menu: "Menü",
    portfolio: "İşlerimiz",
    services: "Hizmetler",
    about: "Hakkımızda",
    contact: "İletişim",
    readyText: "Bizimle Çalışmaya hazır mısınız?",
    getInTouch: "Sizi Arayalım"
  },
  hero: {
    designTag: "✨Uçtan Uca Ürün Yönetimi & Danışmanlık",
    designTitle: ["İşinizi Güçlendiren", "Etkili Tasarım", "Çözümleri"],
    designDesc: "Ürün akışlarını sadeleştiriyor, arayüzleri güçlendiriyor ve kullanıcıya değer katan deneyimler oluşturuyoruz.",
    designBtnPrimary: "Paketinizi Seçin",
    designBtnSecondary: "Danışmanlık Alın",
    codeTag: "💻 Kurumsal Yazılım Çözümleri",
    codeTitle: ["Teknoloji", "İnovasyon", "Kod"],
    codeDesc: "Her sektör için özelleştirilmiş, kurumsal düzeyde ERP ve SaaS platformları inşa ediyoruz.",
    codeBtnPrimary: "Geliştirmeye Başla",
    codeBtnSecondary: "Çözümleri İncele"
  },
  portfolio: {
    tag: "Projelerimiz",
    title: "Öne Çıkan İşler",
    description: "Kullanıcı deneyimlerini dönüştüren başarılı tasarım projelerimizi keşfedin.",
    descriptionCode: "Farklı sektörlerdeki işletmeler için geliştirdiğimiz kurumsal tasarım çözümleri inceleyin.",
    viewAll: "Tüm Projeleri Gör",
    designProjects: [
      {
        title: 'Lojistik Platformu',
        category: 'Ürün Tasarımı',
        description: 'Dönüşüm oranını %45 artıran komple UX yenilemesi'
      },
      {
        title: 'Eġitim Platformu',
        category: 'B2C Yolculuġu',
        description: 'Ürün ve Servis Tasarımlarına odaklanarak optimize edildi'
      },
      {
        title: 'SaaS (Bulut) Platformu',
        category: 'UI Tasarımı',
        description: 'Kapsamlı tasarım sistemine sahip modern arayüz'
      },
      {
        title: 'Otel & Rezervasyon Platformu',
        category: 'UX Danışmanlığı',
        description: 'Müşterinin keşfetme ve satın alma deneyimi iyileştirildi'
      }
    ],
    codeProjects: [
      {
        title: 'Üretim ERP',
        category: 'ERP Sistemi',
        description: '12 tesiste 500+ kullanıcıyı yöneten tam ölçekli ERP'
      },
      {
        title: 'B2B Pazaryeri',
        category: 'B2B Platformu',
        description: 'Günlük 10B+ işlem işleyen çok satıcılı platform'
      },
      {
        title: 'Proje Yönetimi SaaS',
        category: 'SaaS Geliştirme',
        description: '50B+ aktif kullanıcıya hizmet veren bulut tabanlı araç'
      },
      {
        title: 'Lojistik Yazılımı',
        category: 'Özel Çözüm',
        description: 'Kurumsal lojistik için gerçek zamanlı takip sistemi'
      }
    ]
  },
  pricing: {
    tag: "Nasıl Başlayabiliriz",
    title: "Planınızı Seçelim",
    description: "Proje ihtiyaçlarınıza ve bütçenize uygun esnek tasarım paketleri.",
    descriptionCode: "İşletmenizle birlikte büyüyecek ölçeklenebilir yazılım çözümleri.",
    viewDetails: "Detayları Gör",
    learnMore: "Bu plan hakkında daha fazla bilgi →",
    customSolution: "Özel bir çözüme mi ihtiyacınız var?",
    contactUs: "Bize ulaşın",
    forQuote: "ve size özel teklif alın.",
    designPlans: [
      {
        name: 'Temel Başlangıç',
        price: '$999',
        period: '/Aylık $18',
        label: 'Tek Seferlik Projeler İçin',
        description: 'Girişimciler ve Küçük işletmeler için mükemmel.',
        features: [
          'UI/UX Tasarım Danışmanlığı',
          'Web Tasarım & Reklam Bannerı',
          '5 Sayfaya Kadar Tasarım',
          'SEO Temel Optimizasyonu',
        ],
        cta: 'Başlangıç Planını Seç',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Profesyonel',
        price: '$1799',
        period: '/$25 Aylık',
        label: 'En Popüler',
        description: 'Kapsamlı tasarım çözümlerine ihtiyaç duyan büyüyen işletmeler için ideal.',
        features: [
          'Kurumsal Web Sitesi Tasarım + Geliştirme',
          'Yönetim Paneli (Admin Panel)',
          'Seçtiğiniz 2 Modülün Kurulumu (İK, Depo, CRM vb.)',
          'Kullanıcı Testi & Geri Bildirim',
        ],
        cta: 'Profesyonel Planı Seçin',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Kurumsal',
        price: '$3499',
        period: '/Başlayan Fiyatlarla',
        label: 'Büyük Ekipler İçin',
        description: 'Hacimli şirketler ve karmaşık projeler için kapsamlı Ürün & Partnerlik.',
        features: [
          'Profesyonel Paketindeki Her Şey',
          'Uçtan Uca Analiz & Gelistirme',
          'Öncelikli Destek & Bakım',
          'Strateji Önerileri',
        ],
        cta: 'İletişime geçin',
        link: '#contact',
        highlighted: false
      }
    ],
    codePlans: [
      {
        name: 'Temel Başlangıç',
        price: '$999',
        period: '/Aylık $18',
        label: 'Tek Seferlik Projeler İçin',
        description: 'Giris2imciler ve Küçük işletmeler için mükemmel.',
        features: [
          'UI/UX Tasarım Danışmanlığı',
          'Web Tasarım & Reklam Bannerı',
          '5 Sayfaya Kadar Tasarım',
          'SEO Temel Optimizasyonu',
        ],
        cta: 'Başlangıç Planını Seç',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Profesyonel',
        price: '$1799',
        period: '/proje',
        label: 'En Popüler',
        description: 'Kapsamlı tasarım çözümlerine ihtiyaç duyan büyüyen işletmeler için ideal.',
        features: [
          'UI/UX Tasarım Danışmanlığı',
          'Web sitesi + Yönetim Paneli (Admin Panel)',
          'Seçtiğiniz 2 Modülün Kurulumu (İK, Depo, CRM vb.)',
          'Kullanıcı Testi & Geri Bildirim',
        ],
        cta: 'Profesyonel Planı Seç',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Kurumsal',
        price: '$3499',
        period: '/baslayan fiyatlarla',
        label: 'Büyük Ekipler İçin',
        description: 'Köklü şirketler ve karmaşık projeler için kapsamlı tasarım ortaklığı.',
        features: [
          'Profesyonel Paketindeki Her Şey',
          'Uçtan Uca Analiz & Gelistirme',
          'Öncelikli Destek & Bakım',
          'Pazarlama Tavsiyeleri',
        ],
        cta: 'İletişime geç',
        link: '#contact',
        highlighted: false
      }
    ],
  },
  services: {
    tag: "Hizmetlerimiz",
    titleDesign: "Tasarım Uzmanlığı",
    titleCode: "Ürün Çözümleri",
    descriptionDesign: "Kullanılabilirlik, akış optimizasyonu ve ürün stratejisine odaklanan kapsamlı UX/UI tasarım hizmetleri.",
    descriptionCode: "Modern işletmeler için sağlam, ölçeklenebilir çözümler sunan kurumsal düzeyde yazılım geliştirme hizmetleri.",
    loadMore: "Daha Fazla Göster",
    showLess: "Daha Az Göster",
    designServices: [
      {
        title: 'UX Danışmanlığı',
        description: 'Veriye dayalı içgörülerle kullanıcı deneyimlerini optimize etmek ve iş büyümesini sağlamak için stratejik UX rehberliği.'
      },
      {
        title: 'Ürün Doktorluğu',
        description: 'Mevcut ürününüzün konsept ve satış stratejisinin, kullanıcıların sevdiği sezgisel arayüzlerle uçtan uca yeniden tasarımı.'
      },
      {
        title: 'Yeni İş Geliştirme',
        description: 'Fikrinizin Büyüme fırsatlarını belirlemek ve ilgi çekici dijital ürünler oluşturmak için uçtan uca destek'
      },
      {
        title: 'Müşteri Yolculuğu Haritalama',
        description: 'Maksimum etkileşim için müşterinizin yolculuğundaki her temas noktasını görselleştirin ve optimize edin.'
      },
      {
        title: 'CRM Pazarlaması',
        description: 'Sadakati artıran ve kalıcı marka bağlılığı oluşturan müşteri ilişkileri stratejileri tasarlayın.'
      }
    ],
    codeServices: [
      {
        title: 'ERP Sistemleri',
        description: 'Organizasyonunuz genelinde operasyonları düzenleyen kapsamlı kurumsal kaynak planlama çözümleri.'
      },
      {
        title: 'B2B Platformları',
        description: 'İşletmeleri birbirine bağlayan ve ticareti verimli bir şekilde yürüten ölçeklenebilir B2B web ve mobil platformları.'
      },
      {
        title: 'SaaS Geliştirme',
        description: 'Ölçek, güvenlik ve sorunsuz kullanıcı deneyimleri için inşa edilmiş bulut tabanlı hizmet olarak yazılım çözümleri.'
      },
      {
        title: 'Kurumsal Yazılım',
        description: 'Sektörünüze ve iş gereksinimlerinize özel olarak uyarlanmış özelleştirilmiş yazılım geliştirme.'
      },
      {
        title: 'Özel Çözümler',
        description: 'Benzersiz iş zorluklarınızı ve iş akışlarınızı çözmek için tasarlanmış özel kurumsal uygulamalar.'
      }
    ]
  },focusAreas: {
    tag: "Odaklandığımız Konular",
    titleDesign: "Danışmanlık Alanlarımız",
    titleCode: "Teknoloji Çözümlerimiz",
    designFocus: [
      {
        title: 'Müşteri Yolculuğu Haritalama(CX)',
        description: 'Müşterinizin deneyimindeki her temas noktasını görselleştiriyor, sorunlu noktaları ve iyileştirme fırsatlarını belirliyoruz.',
        highlights: ['Kullanıcı Araştırması', 'Yolculuk Görselleştirme', 'Temas Noktası Analizi', 'Ölçümleme']
      },
      {
        title: 'Yeni Ürün Tasarımı (UI)',
        description: 'Markanızla uyumlu, güzel ve sezgisel arayüzler yaratarak kullanıcıları her etkileşimde memnun ediyoruz.',
        highlights: ['Arayüz Tasarımı', 'Tasarım Kütuphanesi', 'Prototipleme', 'Reklam Görseli']
      },
      {
        title: 'Kullanıcı Deneyimi (UX)',
        description: 'Sorunsuz kullanıcı deneyimleri yaratmak için araştırma, test ve iterasyonu birleştiren kapsamlı UX stratejisi.',
        highlights: ['UX Araştırması', 'Kullanılabilirlik Testi', 'Bilgi Mimarisi', 'Etkileşim Tasarımı']
      }
    ],
    codeFocus: [
      {
        title: 'ERP Çözümleri',
        description: 'İş operasyonlarınızın tüm yönlerini tek bir birleşik platformda entegre eden kurumsal kaynak planlama sistemleri.',
        highlights: ['Süreç Otomasyonu', 'Gerçek Zamanlı Analitik', 'Çoklu Modül Entegrasyonu', 'Ölçeklenebilir Mimari']
      },
      {
        title: 'B2B & SaaS Platformları',
        description: 'İşletmeler arası etkileşimler ve hizmet olarak yazılım teslimatı için tasarlanmış sağlam web ve mobil platformlar.',
        highlights: ['Çok Kiracılı Mimari', 'API Geliştirme', 'Bulut Altyapısı', 'Önce Güvenlik']
      },
      {
        title: 'Sektörünüze Özel Yazılım',
        description: 'Sektörünüzün benzersiz zorluklarına, uyumluluk gereksinimlerine ve iş akışlarına göre uyarlanmış özel kurumsal yazılımlar.',
        highlights: ['Sektör Uzmanlığı', 'Özel Özellikler', 'Uyumluluk Hazır', 'Entegrasyon Desteği']
      }
    ]
  },
  testimonials: {
    tag: "Müşteri Başarısı",
    title: "Müşterilerimiz Ne Diyor?",
    descriptionDesign: "Olağanüstü tasarım deneyimleri sunmak için önde gelen markalar tarafından güveniliyoruz.",
    descriptionCode: "İşletmeleri kurumsal düzeyde yazılım çözümleriyle güçlendiriyoruz.",
    designTestimonials: [
      {
        name: 'Seçil Seperci',
        role: 'CEO, RetailTech',
        company: 'E-Ticaret Platformu',
        text: 'Müşteri yolculuğu haritalaması ile kısa zamandatüm kullanıcı deneyimimizi dönüştürdük. Dönüşüm oranları üç ay içinde %45 arttı.',
        rating: 5
      },
      {
        name: 'Mehmet Can T.',
        role: 'Ürün Direktörü',
        company: 'Finans Uygulaması',
        text: 'UX danışmanlığı, varlığından bile haberdar olmadığımız kör noktaları belirlememize yardımcı oldu. Ürün tasarımı çalışması olağanüstüydü.',
        rating: 5
      },
      {
        name: 'Elif Didem Y.',
        role: 'Pazarlama Müdürü',
        company: 'Kişisel Sağlık Uygulaması',
        text: 'CRM pazarlama stratejimiz üzerinde harika bir çalışma yaptık. Tasarım ekibi ihtiyacımızı gerçekten anladı.',
        rating: 5
      }
    ],
    codeTestimonials: [
      {
        name: 'Mehmet A.',
        role: 'CTO, Manufacturing Co',
        company: 'Endüstriyel Sektör',
        text: 'İnşa ettikleri ERP sistemi operasyonlarımızda devrim yarattı. Tüm departmanlar arasında sorunsuz entegrasyon sağlandı.',
        rating: 5
      },
      {
        name: 'Furkan T.',
        role: 'VP Teknoloji',
        company: 'B2B Çözümleri',
        text: 'Olağanüstü B2B platform geliştirme. Ekip, artan taleplerimizi mükemmel şekilde karşılayan ölçeklenebilir bir çözüm sundu.',
        rating: 5
      },
      {
        name: 'Çetin S. D.',
        role: 'Kurucu',
        company: 'SaaS Girişimi',
        text: 'Konseptten dağıtıma kadar tüm SaaS platformumuzu inşa ettiler. Kod kalitesi ve mimari üst düzeyde.',
        rating: 5
      }
    ]
  },
  cta: {
    titleDesign: "Bizimle Çalışmaya Hazır Mısınız?",
    titleCode: "Bizimle Çalışmaya Hazır Mısınız?",
    descDesign: "Dijital varlığınızı dönüştüren ve gerçek sonuçlar sağlayan tasarımlar yaratmak için bugün çalışmaya başlayalım.",
    descCode: "İşletmenize kurumsal düzeyde yazılımlar oluşturmak için bugün çalışmaya başlayalım",
    btnPrimary: "Başlayalım",
    btnSecondary: "Ön Görüşme",
    statProjects: "Tamamlanan Proje",
    statSystems: "Kurulan Sistem",
    statSuccess: "Müşteri Başarı Oranı",
    statSupportDesign: "Mevcut Destek",
    statSupportCode: "Geliştirme Desteği"
  },
  footer: {
    brandDescDesign: "Yenilikçi tasarım yoluyla olağanüstü kullanıcı deneyimleri yaratıyoruz.",
    brandDescCode: "Modern işletmeler için kurumsal düzeyde yazılım çözümleri inşa ediyoruz.",
    colServices: "Hizmetler",
    colCompany: "Şirket",
    colContact: "İletişim",
    designServices: ['UX Danışmanı', 'Ürün Tasarımı', 'İş Geliştirme', 'Yolculuk Haritalama', 'CRM Pazarlaması'],
    codeServices: ['ERP Sistemleri', 'B2B Platformları', 'SaaS Geliştirme', 'Özel Yazılım', 'API Entegrasyonu'],
    companyLinks: ['Hakkımızda', 'Süreçlerimiz', 'Vaka Çalışmaları', 'Kariyer', 'Blog'],
    copyright: "Tüm hakları saklıdır.",
    privacy: "Gizlilik Politikası",
    terms: "Hizmet Şartları",
    cookie: "Çerez Politikası"
  }
};
