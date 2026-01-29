export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">İşTap.az</h1>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Ana səhifə</a>
          <a href="/elanlar" className="hover:underline">Elanlar</a>
          <a href="/giris" className="hover:underline">Giriş</a>
        </div>
      </div>
    </nav>
  )
}
