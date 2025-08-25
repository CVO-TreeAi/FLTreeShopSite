import Image from 'next/image'

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <Image
              src="/images/services/1_imgvid_2_2_whyus-1.jpg"
              alt="Why Choose Us"
              width={590}
              height={480}
              className="w-full rounded-lg"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h5 className="text-sm font-bold text-blue-400 uppercase mb-4">WHY CHOOSE US</h5>
            <h3 className="text-3xl font-bold mb-6">
              Why Hire Us For<br />
              Land Clearing Services?
            </h3>
            <p className="text-gray-300 mb-8">
              When we're not in the field clearing land, you can find us in the office working hard to meet 
              the needs of our clients. We're also passionate about our hobbies, which include making YouTube 
              videos about our business and life, going boating, playing golf, traveling to see family, and 
              raising our children in the country. We were raised to respect others, work hard, and always be 
              honest, and those values are at the core of everything we do. We're committed to providing 
              exceptional service to our customers, and we're always happy to answer any questions you may have. 
              Thank you for choosing Tree Shop!
            </p>
            <a 
              href="/" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Benefits of Our Services
              <i className="bi bi-plus ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}