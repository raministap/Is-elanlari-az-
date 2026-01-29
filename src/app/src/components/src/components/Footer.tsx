import Link from 'next/link';
import { Briefcase, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                İş<span className="text-blue-400">Tap</span>.az
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Azərbaycanın ən böyük iş elanları platforması.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sürətli keçidlər</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vakansiyalar" className="text-gray-400 hover:text-white">
                  Vakansiyalar
                </Link>
              </li>
              <li>
                <Link href="/kateqoriyalar" className="text-gray-400 hover:text-white">
                  Kateqoriyalar
                </Link>
              </li>
              <li>
                <Link href="/qeydiyyat" className="text-gray-400 hover:text-white">
                  Qeydiyyat
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Populyar kateqoriyalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kateqoriya/it" className="text-gray-400 hover:text-white">
                  IT və Texnologiya
                </Link>
              </li>
              <li>
                <Link href="/kateqoriya/sales" className="text-gray-400 hover:text-white">
                  Satış və Marketinq
                </Link>
              </li>
              <li>
                <Link href="/kateqoriya/restaurant" className="text-gray-400 hover:text-white">
                  Restoran və Qida
                </Link>
              </li>
              <li>
                <Link href="/kateqoriya/security" className="text-gray-400 hover:text-white">
                  Təhlükəsizlik və Mühafizə
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Əlaqə</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Bakı, Azərbaycan</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+994 12 345 67 89</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@istap.az</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 İşTap.az. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
}
