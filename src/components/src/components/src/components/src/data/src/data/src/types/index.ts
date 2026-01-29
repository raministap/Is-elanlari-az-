// Vakansiya tipi
export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  salary: string;
  salaryMin?: number;
  salaryMax?: number;
  currency: 'AZN' | 'USD' | 'EUR';
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'remote';
  category: string;
  subcategory: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits?: string[];
  experience: 'none' | '0-1' | '1-3' | '3-5' | '5+';
  education: 'none' | 'high-school' | 'bachelor' | 'master' | 'phd';
  gender: 'any' | 'male' | 'female';
  ageMin?: number;
  ageMax?: number;
  contactPhone: string;
  contactEmail?: string;
  isVIP: boolean;
  isFeatured: boolean;
  views: number;
  applications: number;
  createdAt: any;
  expiresAt: any;
  status: 'active' | 'expired' | 'closed';
  userId: string;
}

// İstifadəçi tipi
export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  phone?: string;
  role: 'seeker' | 'employer' | 'admin';
  companyName?: string;
  companyDescription?: string;
  companyWebsite?: string;
  location?: string;
  createdAt: Date;
  savedJobs: string[];
  resume?: Resume;
}

// CV tipi
export interface Resume {
  fullName: string;
  birthDate?: Date;
  gender: 'male' | 'female';
  phone: string;
  email: string;
  address?: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
  languages: Language[];
  about?: string;
  desiredSalary?: string;
  desiredPosition?: string;
  updatedAt: Date;
}

// Təhsil tipi
export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  isCurrent: boolean;
}

// İş təcrübəsi tipi
export interface Experience {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  isCurrent: boolean;
  description?: string;
}

// Dil bilikləri tipi
export interface Language {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'fluent' | 'native';
}

// Kateqoriya tipi
export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
  jobCount: number;
}

// Müraciət tipi
export interface JobApplication {
  id: string;
  jobId: string;
  userId: string;
  resumeId: string;
  coverLetter?: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  appliedAt: Date;
}
