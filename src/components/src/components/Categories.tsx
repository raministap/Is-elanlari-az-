import Link from 'next/link';
import { categories } from '@/data/categories';
import { 
  Laptop, TrendingUp, Calculator, Building2, Plane,
  GraduationCap, Heart, Truck, Factory, Briefcase,
  UtensilsCrossed, Shield, Sparkles, ArrowRight
} from 'lucide-react';

const iconMap: { [key: string]: any } = {
  Laptop, TrendingUp, Calculator, Building2, Plane,
  GraduationCap, Heart, Truck, Factory, Briefcase,
  UtensilsCrossed, Shield, Sparkles
};

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kateqoriyalar üzrə vakansiyalar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İstədiyiniz sahəni seçin və ideal işinizi tapın.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Briefcase;
            return (
              <Link
                key={category.id}
                href={`/kateqoriya/${category.id}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                    {category.jobCount}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {category.name}
                </h3>
                
                <p className="text-sm text-gray-500 mb-4">
                  {category.subcategories.slice(0, 3).join(', ')}...
                </p>
                
                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                  <span>Vakansiyalara bax</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
