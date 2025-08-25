import Image from 'next/image'

export default function ServiceArea() {
  const areas = [
    'CLERMONT',
    'GAINESVILLE', 
    'OCALA',
    'ORLANDO',
    'PALM BAY',
    'TAMPA'
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h5 className="text-sm font-bold text-blue-600 uppercase mb-4">SERVICE AREA</h5>
            <hr className="w-20 border-2 border-blue-600 mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              We Can Be Found Serving<br />
              Clients All Over Florida.
            </h3>
            <p className="text-gray-700 mb-6">
              The Tree Shop has proudly provided tree services to the following areas in Central Florida.
            </p>
            <hr className="w-20 border-2 border-blue-600" />
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-blue-50 rounded-full p-8">
              <div className="grid grid-cols-2 gap-4">
                {areas.map((area) => (
                  <div key={area} className="flex items-center">
                    <i className="bi bi-geo-alt text-blue-600 mr-3"></i>
                    <span className="font-semibold text-gray-800">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <Image
            src="/images/content/home-sevice-area-car-img.jpg"
            alt="Service Area Equipment"
            width={685}
            height={225}
            className="w-full max-w-4xl mx-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}