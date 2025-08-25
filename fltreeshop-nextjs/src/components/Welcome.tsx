import LeadCaptureForm from './LeadCaptureForm'

export default function Welcome() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 lg:mb-0">
            We Specialize in Forestry Mulching,<br />
            Land Clearing, and Other Land<br />
            Development Projects.
          </h2>
          <LeadCaptureForm source="fltreeshop.com" className="text-lg" />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h5 className="text-sm font-bold text-blue-600 uppercase mb-4">WELCOME TO TREE SHOP</h5>
            <div className="space-y-4 text-gray-700">
              <p>
                A trusted name in forestry mulching and land-clearing services! Our company was founded in 2016 
                by Jeremiah and Lacey, who have extensive experience in the industry. With a commitment to 
                excellence and integrity, we have earned our place in the market and are here to stay.
              </p>
              <p>
                At Tree Shop, we believe in leading by example. We strive to be honest with all of our customers 
                and contractors, and we take pride in the quality of our work. Our team is dedicated to meeting 
                the ever-changing demands of the green industry and helping our clients complete their projects 
                on time and, preferably, under budget!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
              >
                Request Information
                <i className="bi bi-plus ml-2"></i>
              </a>
              <a 
                href="/about" 
                target="_blank"
                className="bg-transparent hover:bg-blue-50 text-blue-600 font-bold py-3 px-6 rounded-lg border-2 border-blue-600 transition-colors duration-300 text-center"
              >
                Meet the team
                <i className="bi bi-plus ml-2"></i>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <a 
                href="https://www.youtube.com/watch?v=IJNGdj5e944" 
                target="_blank"
                className="block relative group"
              >
                <img 
                  src="https://img.youtube.com/vi/IJNGdj5e944/0.jpg" 
                  alt="Tree Shop Video"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-colors duration-300 rounded-lg">
                  <div className="bg-white bg-opacity-90 rounded-full p-4">
                    <i className="bi bi-play-fill text-blue-600 text-4xl"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}