'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Biens', href: '/biens' },
    { name: 'Services', href: '/services' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-16 w-56">
              <Image
                src="/images/OIP (5).webp"
                alt="Cabinet IDAC SARL"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 font-medium hover:text-blue-700 transition relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-700 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/estimation"
              className="bg-amber-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-amber-600 transition"
            >
              Estimation
            </Link>
          </div>

          {/* Bouton Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 text-lg font-medium hover:text-blue-700 transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/estimation"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center bg-amber-500 text-white px-4 py-3 rounded-md font-semibold hover:bg-amber-600 transition"
            >
              Estimation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
