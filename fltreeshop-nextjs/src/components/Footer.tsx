import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-8 lg:mb-0">
            <div className="mb-8">
              <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
                <li><Link href="/testimonials" className="hover:text-blue-400 transition-colors">Testimonials</Link></li>
                <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div className="text-sm text-gray-400 mb-4">
              COPYRIGHT © 2025 THE TREE SHOP<br />
              ALL RIGHTS RESERVED.
            </div>
            
            <div className="text-xs text-gray-500">
              Built by{' '}
              <a 
                href="https://www.fltreeshop.com/" 
                target="_blank" 
                className="hover:text-blue-400 transition-colors"
              >
                The Tree Shop
              </a>
            </div>
          </div>
          
          <div>
            <Image
              src="/images/content/footer-img.jpg"
              alt="Footer Image"
              width={180}
              height={75}
              className="rounded"
            />
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="#top" 
            className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
          >
            <i className="bi bi-arrow-up text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}