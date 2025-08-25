'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="TopHeader">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="Logo text-2xl font-bold text-blue-600">
              The Tree Shop
            </Link>
            
            <div className="TopMainRight">
              <div className="flex items-center">
                <div className="PhoneImg hidden md:block mr-4">
                  <a href="tel:386.843.5266" className="flex items-center text-blue-600">
                    <i className="bi bi-telephone mr-2"></i>
                    386.843.5266
                  </a>
                </div>
                
                <button 
                  className="menu-link md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <div className="menu-icon">
                    <span className="block w-6 h-0.5 bg-blue-600 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-blue-600 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-blue-600"></span>
                  </div>
                  <h6 className="text-xs uppercase text-white mt-1">menu</h6>
                </button>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                  <ul className="flex space-x-6">
                    <li><Link href="/" className="text-white hover:text-blue-300">Home</Link></li>
                    <li className="relative group">
                      <Link href="/services" className="text-white hover:text-blue-300 flex items-center">
                        Services
                        <i className="fa fa-sort-desc ml-1"></i>
                      </Link>
                      <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <li><Link href="/land-clearing" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Land Clearing</Link></li>
                        <li><Link href="/forestry-mulching" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Forestry Mulching</Link></li>
                      </ul>
                    </li>
                    <li><Link href="/testimonials" className="text-white hover:text-blue-300">Testimonials</Link></li>
                    <li><Link href="/about" className="text-white hover:text-blue-300">About Us</Link></li>
                    <li><Link href="/blog" className="text-white hover:text-blue-300">Blog</Link></li>
                    <li><Link href="/contact" className="text-white hover:text-blue-300">Contact Us</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-6">
            <div className="PhoneImg mb-4">
              <a href="tel:386.843.5266" className="flex items-center text-blue-600">
                <i className="bi bi-telephone mr-2"></i>
                386.843.5266
              </a>
            </div>
            <nav>
              <ul className="space-y-4">
                <li><Link href="/" className="block text-gray-800 hover:text-blue-600">Home</Link></li>
                <li><Link href="/services" className="block text-gray-800 hover:text-blue-600">Services</Link></li>
                <li className="pl-4">
                  <Link href="/land-clearing" className="block text-gray-600 hover:text-blue-600">Land Clearing</Link>
                </li>
                <li className="pl-4">
                  <Link href="/forestry-mulching" className="block text-gray-600 hover:text-blue-600">Forestry Mulching</Link>
                </li>
                <li><Link href="/testimonials" className="block text-gray-800 hover:text-blue-600">Testimonials</Link></li>
                <li><Link href="/about" className="block text-gray-800 hover:text-blue-600">About Us</Link></li>
                <li><Link href="/blog" className="block text-gray-800 hover:text-blue-600">Blog</Link></li>
                <li><Link href="/contact" className="block text-gray-800 hover:text-blue-600">Contact Us</Link></li>
              </ul>
              
              {/* Social Icons */}
              <div className="mt-6">
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/FLTreeShop" target="_blank" className="text-blue-600 hover:text-blue-800">
                    <i className="fa fa-facebook text-xl"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCxumvjDJZacQMIsJYWgEYIw" target="_blank" className="text-blue-600 hover:text-blue-800">
                    <i className="fa fa-youtube-play text-xl"></i>
                  </a>
                  <a href="https://www.instagram.com/fl_treeshop/" target="_blank" className="text-blue-600 hover:text-blue-800">
                    <i className="fa fa-instagram text-xl"></i>
                  </a>
                  <a href="https://www.tiktok.com/@fltreeshop" target="_blank" className="text-blue-600 hover:text-blue-800">
                    <i className="bi bi-tiktok text-xl"></i>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}