import LeadCaptureForm from './LeadCaptureForm'

export default function ContactSection() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-3xl font-bold mb-4">Contact the professionals at The Tree Shop today!</h3>
            <div>
              <h6 className="text-lg mb-2">Call or Text Today for More Information</h6>
              <div className="flex items-center">
                <i className="bi bi-telephone text-2xl mr-3"></i>
                <span className="text-3xl font-bold">
                  <a href="tel:386.843.5266" className="hover:text-blue-200 transition-colors">
                    386.843.5266
                  </a>
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <LeadCaptureForm source="fltreeshop.com" className="bg-white text-blue-600 hover:bg-gray-100" />
          </div>
        </div>
      </div>
    </section>
  )
}