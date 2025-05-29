import Image from "next/image"
import Link from "next/link"
import { FiSearch, FiShoppingBag, FiCreditCard, FiGlobe, FiTag, FiTruck } from "react-icons/fi"

export default function MarketplacePage() {
  // Categories data
  const categories = [
    { name: "Elektronika", icon: <FiTag className="w-4 h-4" /> },
    { name: "Kiyim-kechak", icon: <FiTag className="w-4 h-4" /> },
    { name: "Uy jihozlari", icon: <FiTag className="w-4 h-4" /> },
    { name: "Oziq-ovqat", icon: <FiTag className="w-4 h-4" /> },
    { name: "Go'zallik", icon: <FiTag className="w-4 h-4" /> },
    { name: "Sport", icon: <FiTag className="w-4 h-4" /> },
    { name: "Hunarmandchilik buyumlari", icon: <FiTag className="w-4 h-4" /> },
  ]

  // International stores data
  const internationalStores = [
    { name: "Amazon", logo: "/eshop.png" },
    { name: "SHEIN", logo: "/eshop.png" },
    { name: "AliExpress", logo: "/eshop.png" },
    { name: "ZARA", logo: "/eshop.png" },
    { name: "H&M", logo: "/eshop.png" },
    { name: "eBay", logo: "/eshop.png" },
    { name: "Taobao", logo: "/eshop.png" },
    { name: "Trendyol", logo: "/eshop.png" },
  ]

  // Local stores with x3 payment
  const localStoresX3 = [
    {
      name: "Yandex Market",
      logo: "/eshop.png",
      bgColor: "bg-yellow-400",
    },
    {
      name: "Korzinka Go",
      logo: "/eshop.png",
      bgColor: "bg-white",
    },
    {
      name: "Wildberries",
      logo: "/eshop.png",
      bgColor: "bg-purple-600",
    },
    {
      name: "Ozon",
      logo: "/eshop.png",
      bgColor: "bg-blue-600",
    },
  ]

  // Local online stores
  const localOnlineStores = [
    { name: "Asaxiy", logo: "/eshop.png" },
    { name: "Mediapark", logo: "/eshop.png" },
    { name: "Yandex Go", logo: "/eshop.png" },
    { name: "Uzum.uz", logo: "/eshop.png" },
    { name: "Make up Store", logo: "/eshop.png" },
    { name: "Shoptextile", logo: "/eshop.png" },
    { name: "Beauty Box", logo: "/eshop.png" },
    { name: "Tashkent Gullari", logo: "/eshop.png" },
  ]

  // Fashion brands
  const fashionBrands = [
    { name: "H&M", logo: "/eshop.png" },
    { name: "ZARA", logo: "/eshop.png" },
    { name: "Calvin Klein", logo: "/eshop.png" },
    { name: "Tommy Hilfiger", logo: "/eshop.png" },
  ]

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/marketplace" className="text-white text-2xl font-bold">
              SPM
            </Link>
            <div className="relative flex-grow mx-4 max-w-2xl">
              <input
                type="text"
                placeholder="SPM da qidirish"
                className="w-full py-2 px-4 pr-10 rounded-md border-0 bg-white focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <FiSearch className="text-gray-500" />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/favorites" className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </Link>
              <Link href="/cart" className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </Link>
              <span className="text-white">Savat</span>
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-8 scrollbar-hide">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/marketplace/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex flex-col items-center text-gray-700 hover:text-blue-600 whitespace-nowrap"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                  {category.icon}
                </div>
                <span className="text-sm">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">SPM Card bilan qulay to'lov</h1>
              <p className="text-lg opacity-90">
                SPM Card bilan xaridlaringizni bo'lib to'lash imkoniyatiga ega bo'ling
              </p>
              <Link
                href="#details"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-md transition-colors"
              >
                Batafsil ma'lumot
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-[400px]">
                <Image
                  src="/spmcard.webp"
                  alt="SPM Card mobile app"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">SPM afzalliklari</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Bo'lib to'lash</h3>
              <p className="text-sm text-gray-600">Xaridlaringizni qulay muddatlarga bo'lib to'lang</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiGlobe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Xalqaro do'konlar</h3>
              <p className="text-sm text-gray-600">Jahon brendlaridan xarid qiling</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShoppingBag className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Keng tanlash</h3>
              <p className="text-sm text-gray-600">200+ onlayn do'konlarda xarid qiling</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTruck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Tezkor yetkazib berish</h3>
              <p className="text-sm text-gray-600">Xaridlaringizni tez va qulay yetkazib beramiz</p>
            </div>
          </div>
        </div>
      </section>

      {/* International Stores Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">
              <span className="text-yellow-400">200 dan ortiq</span> onlayn-do'konlar
            </h2>
            <Link
              href="#all-stores"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-2 rounded-md transition-colors"
            >
              Barchasini ko'rish
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {internationalStores.slice(0, 8).map((store, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center h-24">
                <Image
                  src={store.logo }
                  alt={store.name}
                  width={100}
                  height={60}
                />            
                  </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Stores with x3 Payment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">O'zbekiston bo'ylab x3 to'lovda xaridlar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {localStoresX3.map((store, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="absolute top-2 right-2">
                  <div className="bg-white rounded-full p-1 shadow-sm">
                    <Image src="/placeholder.svg?height=20&width=20" alt="UZ flag" width={20} height={20} />
                  </div>
                </div>
                <div className="h-48 flex items-center justify-center p-6">
                  <Image src={store.logo || "/placeholder.svg"} alt={store.name} width={160} height={80} />
                </div>
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-bold">
                  X3 TO'LOVDA XARID QILING
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Online Stores */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Mahalliy onlayn do'konlar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {localOnlineStores.map((store, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="h-24 flex items-center justify-center">
                  <Image src={store.logo || "/placeholder.svg"} alt={store.name} width={100} height={60} />
                </div>
                <p className="text-center font-medium mt-4">{store.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">SPM Card'ni hozir oling!</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            SPM Card bilan xaridlaringizni bo'lib to'lash imkoniyatiga ega bo'ling va 200+ do'konlarda xarid qiling.
          </p>
          <Link
            href="#"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-md transition-colors"
          >
            Ariza topshirish
          </Link>
        </div>
      </section>
    </main>
  )
}
