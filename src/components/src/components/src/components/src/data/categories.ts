export const categories = [
  {
    id: 'it',
    name: 'IT və Texnologiya',
    icon: 'Laptop',
    jobCount: 1250,
    subcategories: ['Proqramçı', 'Dizayner', 'Sistem administrator', 'Data analitik', 'DevOps', 'Mobil developer', 'Frontend', 'Backend', 'Full Stack', 'QA Engineer']
  },
  {
    id: 'sales',
    name: 'Satış və Marketinq',
    icon: 'TrendingUp',
    jobCount: 890,
    subcategories: ['Satış mütəxəssisi', 'Marketoloq', 'SMM mütəxəssisi', 'Müştəri xidməti', 'Brand menecer', 'PR mütəxəssisi', 'Kontent menecer']
  },
  {
    id: 'finance',
    name: 'Maliyyə və Mühasibatlıq',
    icon: 'Calculator',
    jobCount: 650,
    subcategories: ['Mühasib', 'Maliyyə analitik', 'Audit', 'Bank işçisi', 'Kassir', 'İqtisadçı', 'Maliyyə meneceri', 'Baş mühasib']
  },
  {
    id: 'construction',
    name: 'Tikinti və Əmlak',
    icon: 'Building2',
    jobCount: 720,
    subcategories: ['Mühəndis', 'Arxitektor', 'Tikinti işçisi', 'Əmlak agenti', 'Usta', 'Santexnik', 'Elektrik', 'Baş mühəndis']
  },
  {
    id: 'tourism',
    name: 'Turizm və Otelçilik',
    icon: 'Plane',
    jobCount: 340,
    subcategories: ['Resepsionist', 'Tur agenti', 'Bələdçi', 'Otel meneceri', 'Animator', 'SPA mütəxəssisi', 'Qonaq qarşılayan']
  },
  {
    id: 'education',
    name: 'Təhsil',
    icon: 'GraduationCap',
    jobCount: 480,
    subcategories: ['Müəllim', 'Təlimçi', 'Tərcüməçi', 'Psixoloq', 'Repetitor', 'Tədris koordinatoru', 'Məktəb direktoru']
  },
  {
    id: 'health',
    name: 'Səhiyyə',
    icon: 'Heart',
    jobCount: 520,
    subcategories: ['Həkim', 'Tibb bacısı', 'Aptek işçisi', 'Masajist', 'Laborant', 'Stomatoloq', 'Psixoterapevt']
  },
  {
    id: 'transport',
    name: 'Nəqliyyat və Logistika',
    icon: 'Truck',
    jobCount: 380,
    subcategories: ['Sürücü', 'Kuryer', 'Logistika mütəxəssisi', 'Avtomehanik', 'Dispetçer', 'Yük maşını sürücüsü']
  },
  {
    id: 'industry',
    name: 'İstehsalat və Sənaye',
    icon: 'Factory',
    jobCount: 290,
    subcategories: ['Fəhlə', 'Usta', 'Elektrik', 'Santexnik', 'Mexanik', 'Operator', 'Texnoloq', 'Fermer', 'Bağban']
  },
  {
    id: 'office',
    name: 'İdarəetmə və Ofis',
    icon: 'Briefcase',
    jobCount: 410,
    subcategories: ['Ofis meneceri', 'Katibə', 'HR mütəxəssisi', 'Hüquqşünas', 'Katib', 'Receptionist', 'Ofis administratoru']
  },
  {
    id: 'restaurant',
    name: 'Restoran və Qida',
    icon: 'UtensilsCrossed',
    jobCount: 560,
    subcategories: ['Ofisiant', 'Barmen', 'Aşpaz', 'Kassir', 'Restoran meneceri', 'Çatdırıcı', 'Sous aşpaz', 'Baş aşpaz', 'Hostes', 'Bufetçi']
  },
  {
    id: 'security',
    name: 'Təhlükəsizlik və Mühafizə',
    icon: 'Shield',
    jobCount: 180,
    subcategories: ['Mühafizəçi', 'Təhlükəsizlik əməkdaşı', 'Bilet nəzarətçisi', 'Fərdi mühafizə', 'Kamera operatoru', 'Baş mühafizəçi']
  },
  {
    id: 'service',
    name: 'Təmizlik və Xidmət',
    icon: 'Sparkles',
    jobCount: 320,
    subcategories: ['Təmizlikçi', 'Xadimə', 'Çilingər', 'Bağban', 'Ev işləri', 'Ütüçü', 'Xalça yuyan']
  }
];

export const cities = [
  'Bakı',
  'Gəncə',
  'Sumqayıt',
  'Mingəçevir',
  'Şirvan',
  'Naxçıvan',
  'Lənkəran',
  'Şəki',
  'Yevlax',
  'Quba',
  'Xaçmaz',
  'Qusar',
  'Zaqatala',
  'Qəbələ',
  'Şuşa',
  'Ağdam'
];

export const jobTypes = [
  { value: 'full-time', label: 'Tam ştat', color: 'bg-green-100 text-green-800' },
  { value: 'part-time', label: 'Yarım ştat', color: 'bg-blue-100 text-blue-800' },
  { value: 'contract', label: 'Müqavilə', color: 'bg-purple-100 text-purple-800' },
  { value: 'internship', label: 'Təcrübə', color: 'bg-orange-100 text-orange-800' },
  { value: 'remote', label: 'Uzaqdan', color: 'bg-pink-100 text-pink-800' }
];

export const experienceLevels = [
  { value: 'none', label: 'Təcrübə tələb olunmur' },
  { value: '0-1', label: '0-1 il' },
  { value: '1-3', label: '1-3 il' },
  { value: '3-5', label: '3-5 il' },
  { value: '5+', label: '5+ il' }
];

export const educationLevels = [
  { value: 'none', label: 'Təhsil tələb olunmur' },
  { value: 'high-school', label: 'Orta təhsil' },
  { value: 'bachelor', label: 'Bakalavr' },
  { value: 'master', label: 'Magistratura' },
  { value: 'phd', label: 'Doktorantura' }
];
