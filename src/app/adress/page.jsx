import Image from "next/image"
import Link from "next/link"
import { FiMapPin, FiClock, FiPhone, FiSearch } from "react-icons/fi"

export default function BranchesPage() {
  // Branch office data
  const branches = [
    {
      id: 1,
      name: "Toshkent pochtamti filial kodi: 0101",
      address: "Toshkent sh., Shayxontohur t., Navoiy ko'chasi, 7",
      isOpen: true,
      image: "/placeholder.svg?height=200&width=300",
      phone: "+998 71 233 57 57",
      workHours: "Dushanba-Juma: 09:00-18:00",
    },
    {
      id: 2,
      name: "Yunusobod pochtamti filial kodi:0105",
      address: "Toshkent sh., Yunusobod t., Amir Temur ko'chasi, 1",
      isOpen: true,
      image: "/placeholder.svg?height=200&width=300",
      phone: "+998 71 236 77 77",
      workHours: "Dushanba-Juma: 09:00-18:00",
    },
    {
      id: 3,
      name: "Farg'ona filial kodi: 0201",
      address: "Farg'ona sh., Mustaqillik ko'chasi, 15",
      isOpen: false,
      image: "/placeholder.svg?height=200&width=300",
      phone: "+998 73 244 65 65",
      workHours: "Dushanba-Juma: 09:00-18:00",
    },
    {
      id: 4,
      name: "Samarqand filial kodi: 0301",
      address: "Samarqand sh., Registon ko'chasi, 3",
      isOpen: true,
      image: "/placeholder.svg?height=200&width=300",
      phone: "+998 74 223 45 45",
      workHours: "Dushanba-Juma: 09:00-18:00",
    },
    {
      id: 5,
      name: "Buxoro filial kodi: 0401",
      address: "Buxoro sh., Navoiy ko'chasi, 10",
      isOpen: true,
      image: "/placeholder.svg?height=200&width=300",
      phone: "+998 75 224 34 34",
      workHours: "Dushanba-Juma: 09:00-18:00",
    },
    {
      id: 6,
      name: "Andijon filial kodi: 0501",
      address: "Andijon sh., Bobur ko'chasi, 23",
      isOpen: false,
      image: "/placeholder.svg?height=200&width=300",
      phone: "+998 74 223 67 67",
      workHours: "Dushanba-Juma: 09:00-18:00",
    },
    {
      id: 7,
      name: "Namangan filial kodi: 0601",
      address: "Namangan sh., Navoiy ko'chasi, 12",
      isOpen: true,
      image: "/placeholder.svg?height=200&width=300",
      phone: "+998 76 234 56 56",
      workHours: "Dushanba-Juma: 09:00-18:00",
    },
    {
      id: 8,
      name: "Xorazm filial kodi: 0701",
      address: "Urganch sh., Al-Xorazmiy ko'chasi, 4",
      isOpen: true,
      image: "/placeholder.svg?height=200&width=300",
      phone: "+998 62 224 45 45",
      workHours: "Dushanba-Juma: 09:00-18:00",
    },
    {
      id: 9,
      name: "Navoiy filial kodi: 0801",
      address: "Navoiy sh., Alisher Navoiy ko'chasi, 5",
      isOpen: false,
      image: "/placeholder.svg?height=200&width=300",
      phone: "+998 79 223 34 34",
      workHours: "Dushanba-Juma: 09:00-18:00",
    },
  ]

  // Regions for sidebar
  const regions = [
    "Toshkent shahar/viloyati",
    "Farg'ona viloyati",
    "Namangan viloyati",
    "Andijon viloyati",
    "Samarqand viloyati",
    "Buxoro viloyati",
    "Xorazm viloyati",
    "Navoiy viloyati",
    "Qashqadaryo viloyati",
    "Surxondaryo viloyati",
    "Jizzax viloyati",
    "Sirdaryo viloyati",
    "Qoraqalpog'iston Respublikasi",
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">UzPost filiallari</h1>
          <p className="mt-2">O'zbekiston bo'ylab barcha pochta bo'limlarini toping</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-xl font-bold mb-4">Filiallar</h2>

              {/* Search Box */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Filial qidirish..."
                  className="w-full border rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
              </div>

              {/* Region List */}
              <ul className="space-y-2">
                {regions.map((region, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-700 hover:text-blue-600 block py-1">
                      {region}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {branches.map((branch) => (
                <div key={branch.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image src={branch.image || "/placeholder.svg"} alt={branch.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{branch.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3 h-3 rounded-full ${branch.isOpen ? "bg-green-500" : "bg-red-500"}`}></div>
                      <span className="text-sm text-gray-600">Chiroqlar {branch.isOpen ? "on" : "off"}</span>
                    </div>
                    <div className="flex items-start gap-2 mb-2">
                      <FiMapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <FiPhone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{branch.workHours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
