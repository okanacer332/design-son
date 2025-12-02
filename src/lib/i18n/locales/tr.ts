import { Dictionary } from '../types';

export const tr: Dictionary = {
  header: {
    menu: "Menü",
    portfolio: "Portfolyo",
    services: "Hizmetler",
    about: "Hakkımızda",
    contact: "İletişim",
    readyText: "Yeni projene başlamaya hazır mısın?",
    getInTouch: "İletişime Geç"
  },
  hero: {
    designTag: "✨ Global Tasarım Ajansı",
    designTitle: ["Modern", "Tasarım", "Çözümleri"],
    designDesc: "Müşteri yolculuğu haritalama ve UI tasarımı ile olağanüstü deneyimler yaratıyoruz.",
    designBtnPrimary: "Projeye Başla",
    designBtnSecondary: "İşlerimizi Gör",
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
    descriptionCode: "Farklı sektörlerdeki işletmeler için geliştirdiğimiz kurumsal çözümleri inceleyin.",
    viewAll: "Tüm Projeleri Gör",
    designProjects: [
      {
        title: 'E-Ticaret Platformu',
        category: 'Ürün Tasarımı',
        description: 'Dönüşüm oranını %45 artıran komple UX yenilemesi'
      },
      {
        title: 'Bankacılık Uygulaması',
        category: 'Müşteri Yolculuğu',
        description: '12 temel kullanıcı temas noktası haritalandı ve optimize edildi'
      },
      {
        title: 'SaaS Paneli',
        category: 'UI Tasarımı',
        description: 'Kapsamlı tasarım sistemine sahip modern arayüz'
      },
      {
        title: 'Sağlık Portalı',
        category: 'UX Danışmanlığı',
        description: 'Hasta deneyimi ve erişilebilirlik iyileştirildi'
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
    tag: "Benimle Çalış",
    title: "Planını Seç",
    description: "Proje ihtiyaçlarınıza ve bütçenize uygun esnek tasarım paketleri.",
    descriptionCode: "İşletmenizle birlikte büyüyecek ölçeklenebilir yazılım çözümleri.",
    viewDetails: "Detayları Gör",
    learnMore: "Bu plan hakkında daha fazla bilgi →",
    customSolution: "Özel bir çözüme mi ihtiyacınız var?",
    contactUs: "Bize ulaşın",
    forQuote: "ve size özel teklif alın.",
    designPlans: [
      {
        name: 'Başlangıç',
        price: '₺75.000',
        period: '/proje',
        label: 'Küçük Projeler İçin',
        description: 'Tasarım temelini oluşturmak isteyen girişimler ve küçük işletmeler için mükemmel.',
        features: [
          'UI/UX Tasarım Danışmanlığı',
          'Tel Çerçeve (Wireframe) & Prototip',
          '5 Sayfaya Kadar Tasarım',
          'Temel Marka Kılavuzu',
          '2 Revizyon Hakkı',
          'E-posta Desteği'
        ],
        cta: 'Başlangıç Planını Seç',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Profesyonel',
        price: '₺150.000',
        period: '/proje',
        label: 'En Popüler',
        description: 'Kapsamlı tasarım çözümlerine ihtiyaç duyan büyüyen işletmeler için ideal.',
        features: [
          'Başlangıç Paketindeki Her Şey',
          'Müşteri Yolculuğu Haritalama',
          '15 Sayfaya Kadar Tasarım',
          'Kapsamlı Tasarım Sistemi',
          'İnteraktif Prototipler',
          'Sınırsız Revizyon',
          'Öncelikli Destek',
          'Kullanıcı Testi Oturumu'
        ],
        cta: 'Profesyonel Planı Seç',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Kurumsal',
        price: '₺300.000+',
        period: '/proje',
        label: 'Büyük Ekipler İçin',
        description: 'Köklü şirketler ve karmaşık projeler için kapsamlı tasarım ortaklığı.',
        features: [
          'Profesyonel Paketindeki Her Şey',
          'Tam Ürün Tasarımı',
          'Sınırsız Sayfa Tasarımı',
          'CRM Pazarlama Stratejisi',
          'Yeni İş Geliştirme',
          'Tasarım Ekibi Eğitimi',
          'Atanmış Tasarımcı',
          '7/24 Öncelikli Destek',
          'Sürekli Bakım'
        ],
        cta: 'Kurumsal Planı Seç',
        link: '#contact',
        highlighted: false
      }
    ],
    codePlans: [
      {
        name: 'Temel',
        price: '₺150.000',
        period: '/proje',
        label: 'MVP İçin En İyisi',
        description: 'İlk yazılım ürününü veya MVP\'sini oluşturan girişimler için mükemmel.',
        features: [
          'Özel Web Uygulaması',
          'Mobil Uyumlu Tasarım',
          'Temel API Entegrasyonu',
          'Veritabanı Kurulumu',
          '3 Ay Destek',
          'Dokümantasyon'
        ],
        cta: 'Temel Planı Seç',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'İşletme',
        price: '₺450.000',
        period: '/proje',
        label: 'En Popüler',
        description: 'Güçlü yazılım sistemlerine ihtiyaç duyan işletmeler için kapsamlı çözüm.',
        features: [
          'Temel Paketindeki Her Şey',
          'ERP/B2B Platformu',
          'Gelişmiş API Geliştirme',
          'Çok Kullanıcılı Sistem',
          'Yönetici Paneli (Dashboard)',
          'Ödeme Sistemi Entegrasyonu',
          '6 Ay Destek',
          'Güvenlik Denetimi',
          'Performans Optimizasyonu'
        ],
        cta: 'İşletme Planını Seç',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Kurumsal',
        price: '₺900.000+',
        period: '/proje',
        label: 'Kurumsal Seviye',
        description: 'Özel ekip desteği ile tam ölçekli kurumsal yazılım geliştirme.',
        features: [
          'İşletme Paketindeki Her Şey',
          'Özel SaaS Platformu',
          'Sektöre Özel Özellikler',
          'İleri Düzey Güvenlik',
          'Mikroservis Mimarisi',
          'CI/CD Süreçleri',
          'Yük Dengeleme (Load Balancing)',
          'Atanmış Yazılım Ekibi',
          '12 Ay Destek',
          'Eğitim & Oryantasyon'
        ],
        cta: 'Kurumsal Planı Seç',
        link: '#contact',
        highlighted: false
      }
    ]
  },
  services: {
    tag: "Hizmetlerimiz",
    titleDesign: "Tasarım Uzmanlığı",
    titleCode: "Yazılım Çözümleri",
    descriptionDesign: "İş sonuçlarını yönlendiren ve olağanüstü kullanıcı deneyimleri yaratmaya odaklanan kapsamlı UX-UI tasarım hizmetleri.",
    descriptionCode: "Modern işletmeler için sağlam, ölçeklenebilir çözümler sunan kurumsal düzeyde yazılım geliştirme hizmetleri.",
    loadMore: "Daha Fazla Göster",
    showLess: "Daha Az Göster",
    designServices: [
      {
        title: 'UX Danışmanlığı',
        description: 'Veriye dayalı içgörülerle kullanıcı deneyimlerini optimize etmek ve iş büyümesini sağlamak için stratejik UX rehberliği.'
      },
      {
        title: 'Ürün Tasarımı',
        description: 'Konseptten lansmana kadar, kullanıcıların sevdiği sezgisel arayüzler yaratan uçtan uca ürün tasarımı.'
      },
      {
        title: 'Yeni İş Geliştirme',
        description: 'Büyüme fırsatlarını belirlemek ve ilgi çekici dijital ürünler oluşturmak için stratejik tasarım düşüncesi.'
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
    titleDesign: "Tasarım Felsefemiz",
    titleCode: "Teknoloji Yığınımız",
    designFocus: [
      {
        title: 'Müşteri Yolculuğu Haritalama',
        description: 'Müşterinizin deneyimindeki her temas noktasını görselleştiriyor, sorunlu noktaları ve iyileştirme fırsatlarını belirliyoruz.',
        highlights: ['Kullanıcı Araştırması', 'Yolculuk Görselleştirme', 'Temas Noktası Analizi', 'Deneyim Optimizasyonu']
      },
      {
        title: 'Ürün UI Tasarımı',
        description: 'Markanızla uyumlu, güzel ve sezgisel arayüzler yaratarak kullanıcıları her etkileşimde memnun ediyoruz.',
        highlights: ['Arayüz Tasarımı', 'Tasarım Sistemleri', 'Prototipleme', 'Görsel Tasarım']
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
        title: 'Sektöre Özel Yazılım',
        description: 'Sektörünüzün benzersiz zorluklarına, uyumluluk gereksinimlerine ve iş akışlarına göre uyarlanmış özel kurumsal yazılımlar.',
        highlights: ['Sektör Uzmanlığı', 'Özel Özellikler', 'Uyumluluk Hazır', 'Entegrasyon Desteği']
      }
    ]
  }
};