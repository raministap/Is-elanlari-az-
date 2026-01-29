'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  Menu, 
  X, 
  User, 
  LogOut, 
  PlusCircle
} from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                İş<span className="text-blue-600">Tap</span>.az
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/vakansiyalar" className="text-gray-700 hover:text-blue-600 font-medium">
              Vakansiyalar
            </Link>
            <Link href="/kateqoriyalar" className="text-gray-700 hover:text-blue-600 font-medium">
              Kateqoriyalar
            </Link>
            <Link href="/giris" className="text-gray-700 hover:text-blue-600 font-medium">
              Giriş
            </Link>
            <Link
              href="/qeydiyyat"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700"
            >
              Qeydiyyat
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/vakansiyalar"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Vakansiyalar
            </Link>
            <Link
              href="/kateqoriyalar"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Kateqoriyalar
            </Link>
            <Link
              href="/giris"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Giriş
            </Link>
            <Link
              href="/qeydiyyat"
              className="block px-3 py-2 text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Qeydiyyat
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
