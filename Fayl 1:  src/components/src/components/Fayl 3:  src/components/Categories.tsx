const categories = [
  { name: "IT & Proqramlaşdırma", count: 45 },
  { name: "Satış & Marketing", count: 32 },
  { name: "Mühasibatlıq", count: 18 },
  { name: "Dizayn", count: 24 },
  { name: "Təhsil", count: 15 },
  { name: "Tibb", count: 12 },
  { name: "İnşaat", count: 28 },
  { name: "Logistika", count: 20 },
]

export default function Categories() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Kateqoriyalar</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer">
              <h3 className="font-semibold text-gray-800">{cat.name}</h3>
              <p className="text-gray-500 text-sm">{cat.count} vakansiya</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
