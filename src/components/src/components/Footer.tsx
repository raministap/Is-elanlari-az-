export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 İşTap.az - Bütün hüquqlar qorunur</p>
        <div className="mt-2 space-x-4">
          <a href="/haqqimizda" className="text-gray-400 hover:text-white">Haqqımızda</a>
          <a href="/elaqe" className="text-gray-400 hover:text-white">Əlaqə</a>
          <a href="/qaydalar" className="text-gray-400 hover:text-white">Qaydalar</a>
        </div>
      </div>
    </footer>
  )
}
