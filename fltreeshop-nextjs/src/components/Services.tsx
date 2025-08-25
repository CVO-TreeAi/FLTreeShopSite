import Link from 'next/link'
import Image from 'next/image'

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <Link href="/land-clearing" className="block group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/services/1003_img4_1003_img4_our-services-img1.jpg"
                  alt="Land Clearing Services"
                  width={540}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h4 className="text-2xl font-bold mb-2">Land Clearing</h4>
                    <i className="bi bi-plus text-3xl"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="flex-1">
            <Link href="/forestry-mulching" className="block group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/services/1004_img4_our-services-img2.jpg"
                  alt="Forestry Mulching Services"
                  width={540}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h4 className="text-2xl font-bold mb-2">Forestry Mulching</h4>
                    <i className="bi bi-plus text-3xl"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}