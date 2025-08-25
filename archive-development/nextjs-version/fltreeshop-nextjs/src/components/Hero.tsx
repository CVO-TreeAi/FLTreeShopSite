export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-blue-800">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/images/services/1003_img1_1003_img1_land-clearing-header.jpg"
        >
          <source src="/videos/videohdr.mp4" type="video/mp4" />
          {/* Fallback content */}
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Professional Forestry Mulching<br />
            & Land Clearing Services.
          </h1>
          <a 
            href="https://treeshop.pro" 
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            Get Pricing
          </a>
        </div>
      </div>
    </section>
  )
}