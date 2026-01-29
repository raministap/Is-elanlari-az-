import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import FeaturedJobs from '@/components/FeaturedJobs'

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedJobs />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            İşə götürən misiniz?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Minlərlə namizəd arasından ən uyğun işçini tapın. 
            Vakansiyanızı indi yerləşdirin!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/qeydiyyat?type=employer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Pulsuz hesab yaradın
            </a>
            <a
              href="/elaqe"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition"
            >
              Ətraflı məlumat
            </a>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Necə işləyir?
            </h2>
            <p className="text-lg text-gray-600">
              3 sadə addımda ideal işinizi tapın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Profil yaradın</h3>
              <p className="text-gray-600">
                CV-nizi yükləyin və ya onlayn profil yaradın
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vakansiya axtarın</h3>
              <p className="text-gray-600">
                13 kateqoriya arasından seçim edin
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Müraciət edin</h3>
              <p className="text-gray-600">
                Bir kliklə işə müraciət edin və cavab gözləyin
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
