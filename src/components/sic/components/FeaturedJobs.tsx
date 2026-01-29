const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Bakı",
    salary: "2000 - 3000 AZN",
    type: "Tam ştat",
  },
  {
    id: 2,
    title: "Marketing Mütəxəssisi",
    company: "Global Media",
    location: "Bakı",
    salary: "1500 - 2500 AZN",
    type: "Tam ştat",
  },
  {
    id: 3,
    title: "Mühasib",
    company: "Finance Group",
    location: "Bakı",
    salary: "1200 - 1800 AZN",
    type: "Tam ştat",
  },
  {
    id: 4,
    title: "UI/UX Dizayner",
    company: "Creative Studio",
    location: "Uzaqdan",
    salary: "1800 - 2800 AZN",
    type: "Uzaqdan",
  },
]

export default function FeaturedJobs() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Son Vakansiyalar</h2>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow border hover:shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                  <div className="flex gap-4 mt-2 text-sm text-gray-500">
                    <span>📍 {job.location}</span>
                    <span>💰 {job.salary}</span>
                    <span>⏰ {job.type}</span>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Müraciət et
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
