'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Briefcase } from 'lucide-react';
import { categories } from '@/data/categories';

export default function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.append('q', searchQuery);
    if (selectedCategory) params.append('category', selectedCategory);
    if (selectedCity) params.append('city', selectedCity);
    
    router.push(`/vakansiyalar?${params.toString()}`);
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            İşini <span className="text-green-400">Tap</span>!
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Azərbaycanda ən böyük iş elanları platforması. 
            13+ kateqoriyada minlərlə vakansiya sizi gözləyir.
          </p>
        </div>

        {/* AXTARIŞ QUTUSU */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-4 md:p-6">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Axtarış sözü */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Vakansiya və ya şirkət axtar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>

            {/* Kateqoriya seçimi */}
            <div className="md:col-span-3 relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none bg-white"
              >
                <option value="">Bütün kateqoriyalar</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Şəhər seçimi */}
            <div className="md:col-span-3 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none bg-white"
              >
                <option value="">Bütün şəhərlər</option>
                <option value="Bakı">Bakı</option>
                <option value="Gəncə">Gəncə</option>
                <option value="Sumqayıt">Sumqayıt</option>
                <option value="Mingəçevir">Mingəçevir</option>
              </select>
            </div>

            {/* Axtarış düyməsi */}
            <div className="md:col-span-1">
              <button
                type="submit"
                className="w-full h-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
              >
                <Search className="h-6 w-6" />
              </button>
            </div>
          </form>
        </div>

        {/* Statistika */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-400">5000+</div>
            <div className="text-blue-100 mt-1">Aktiv vakansiya</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-400">1200+</div>
            <div className="text-blue-100 mt-1">Şirkət</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-400">50K+</div>
            <div className="text-blue-100 mt-1">İş axtaran</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-400">13</div>
            <div className="text-blue-100 mt-1">Kateqoriya</div>
          </div>
        </div>
      </div>
    </div>
  );
}
