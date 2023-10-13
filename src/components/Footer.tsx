import Image from 'next/image'
import React from 'react'

const footerNavigation = {
    products: [
        { name: 'Bags', href: '#' },
        { name: 'Tees', href: '#' },
        { name: 'Objects', href: '#' },
        { name: 'Home Goods', href: '#' },
        { name: 'Accessories', href: '#' },
    ],
    customerService: [
        { name: 'Contact', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Warranty', href: '#' },
        { name: 'Secure Payments', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Find a store', href: '#' },
    ],
    company: [
        { name: 'Who we are', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy', href: '#' },
    ],
    legal: [
        { name: 'Terms of Service', href: '#' },
        { name: 'Return Policy', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Shipping Policy', href: '#' },
    ],
    bottomLinks: [
        { name: 'Accessibility', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
}

export default function Footer() {
  return (
      <footer aria-labelledby="footer-heading" className="bg-white">
          <h2 id="footer-heading" className="sr-only">
              Footer
          </h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="py-10 md:flex md:items-center md:justify-between">
                  <div className="text-center md:text-left">
                      <p className="text-sm text-gray-500">&copy; 2021 All Rights Reserved</p>
                  </div>

                  <div className="mt-4 flex items-center justify-center md:mt-0">
                      <div className="flex space-x-8">
                          {footerNavigation.bottomLinks.map((item) => (
                              <a key={item.name} href={item.href} className="text-sm text-gray-500 hover:text-gray-600">
                                  {item.name}
                              </a>
                          ))}
                      </div>

                      <div className="ml-6 border-l border-gray-200 pl-6">
                          <a href="#" className="flex items-center text-gray-500 hover:text-gray-600">
                              <Image
                                  width={24}
                                  height={24}
                                  src="https://tailwindui.com/img/flags/flag-canada.svg"
                                  alt=""
                                  className="w-5 h-auto flex-shrink-0"
                              />
                              <span className="ml-3 text-sm">Change</span>
                              <span className="sr-only">location and currency</span>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  )
}
