import { FiSearch, FiGlobe, FiCreditCard, FiPackage, FiShield, FiMail, FiDollarSign, FiBox } from "react-icons/fi"

function Service({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}

export default function ServicesGrid({ title, description, services }) {
  // Map service names to icons
  const getIconForService = (serviceName) => {
    const serviceIcons = {
      "Jo'natmalarni Kuzatish": <FiSearch className="w-6 h-6" />,
      "Xalqaro Jo'natmalar": <FiGlobe className="w-6 h-6" />,
      "Onlayn To'lovlar": <FiCreditCard className="w-6 h-6" />,
      "E-tijorat Integratsiyasi": <FiPackage className="w-6 h-6" />,
      "Mahalliy Yetkazib Berish": <FiPackage className="w-6 h-6" />,
      "Virtual pochta qutisi": <FiMail className="w-6 h-6" />,
      "Sug'urta xizmati": <FiShield className="w-6 h-6" />,
      "Tezkor yetkazib berish": <FiPackage className="w-6 h-6" />,
      "Pochta abonamenti": <FiBox className="w-6 h-6" />,
      "Pochta bank xizmatlari": <FiDollarSign className="w-6 h-6" />,
      "Maxsus qadoqlash": <FiBox className="w-6 h-6" />,
    }

    // Return the icon if it exists, otherwise return a default icon
    return serviceIcons[serviceName] || <FiPackage className="w-6 h-6" />
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Service
              key={index}
              icon={service.icon || getIconForService(service.title)}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
