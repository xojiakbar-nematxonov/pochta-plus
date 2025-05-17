import Link from "next/link"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FiMapPin, FiPhone, FiMail, FiHome, FiPackage, FiInfo, FiHelpCircle } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold mr-2">
                SP
              </div>
              <span className="text-xl font-bold">Smart Post</span>
            </div>
            <p className="text-gray-400 mb-4">
              Zamonaviy pochta xizmatlari platformasi. Jo'natmalarni kuzatish, xalqaro pochta xizmatlari va onlayn
              to'lovlar - barchasi bir platformada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <FiHome className="w-4 h-4" />
                  <span>Bosh sahifa</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <FiPackage className="w-4 h-4" />
                  <span>Xizmatlar</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <FiInfo className="w-4 h-4" />
                  <span>Biz haqimizda</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <FiPhone className="w-4 h-4" />
                  <span>Bog'lanish</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <FiHelpCircle className="w-4 h-4" />
                  <span>Ko'p so'raladigan savollar</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Xizmatlar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Jo'natmalarni kuzatish
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Xalqaro jo'natmalar
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Onlayn to'lovlar
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Kuryer xizmati
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Sug'urta xizmati
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bog'lanish</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <FiMapPin className="w-5 h-5 mt-0.5 text-gray-400" />
                <span className="text-gray-400">Amir Temur ko'chasi, 15, Toshkent, O'zbekiston</span>
              </li>
              <li className="flex items-start gap-2">
                <FiPhone className="w-5 h-5 mt-0.5 text-gray-400" />
                <span className="text-gray-400">+998 (71) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <FiMail className="w-5 h-5 mt-0.5 text-gray-400" />
                <span className="text-gray-400">info@pochtaplus.uz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Smart Post. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Foydalanish shartlari
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Maxfiylik siyosati
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">
                Cookie siyosati
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
