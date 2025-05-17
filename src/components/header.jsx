"use client"

import { useState } from "react"
import Link from "next/link"
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";

import { FiMenu, FiX, FiHome, FiPackage, FiInfo, FiPhone, FiLogIn, FiUserPlus  } from "react-icons/fi"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold mr-2">
              SP
            </div>
            <span className="text-xl font-bold">Smart Post</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
              <FiHome className="w-4 h-4" />
              <span>Bosh sahifa</span>
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
              <FiPackage className="w-4 h-4" />
              <span>Xizmatlar</span>
            </Link>
             <Link href="/spmp" className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
              <MdOutlineShoppingCart className="w-4 h-4" />
              <span>SPMP</span>
            </Link>
             <Link href="/payments" className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
              <MdOutlinePayments className="w-4 h-4" />
              <span>To'lovlar</span>
            </Link>
             <Link href="/adress" className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
              <FaLocationDot className="w-4 h-4" />
              <span>Filiallar</span>
            </Link>
           
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
              <FiInfo className="w-4 h-4" />
              <span>Biz haqimizda</span>
            </Link>
            <Link href="/contacts" className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
              <FiPhone className="w-4 h-4" />
              <span>Bog'lanish</span>
            </Link>
           
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              <FiLogIn className="w-4 h-4" />
              <span>Kirish</span>
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-1"
            >
              <FiUserPlus className="w-4 h-4" />
              <span>Ro'yxatdan o'tish</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiHome className="w-5 h-5" />
                <span>Bosh sahifa</span>
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiPackage className="w-5 h-5" />
                <span>Xizmatlar</span>
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiInfo className="w-5 h-5" />
                <span>Biz haqimizda</span>
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiPhone className="w-5 h-5" />
                <span>Bog'lanish</span>
              </Link>
              <div className="flex space-x-4 pt-2">
                <Link
                  href="/login"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiLogIn className="w-5 h-5" />
                  <span>Kirish</span>
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiUserPlus className="w-5 h-5" />
                  <span>Ro'yxatdan o'tish</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
