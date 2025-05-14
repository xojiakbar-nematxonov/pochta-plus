import Image from "next/image"
import { FiSearch, FiShield, FiGlobe } from "react-icons/fi"

function Value({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-xl mb-2 text-white">{title}</h3>
        <p className="text-blue-200">{description}</p>
      </div>
    </div>
  )
}

export default function ValuesSection({ title, description, values, imageSrc, extraTitle, extraDescription }) {
  // Map value titles to icons
  const getIconForValue = (valueTitle) => {
    const valueIcons = {
      "Jo'natmalarni kuzatish": <FiSearch className="w-5 h-5 text-white" />,
      "Xavfsiz to'lovlar": <FiShield className="w-5 h-5 text-white" />,
      "Xalqaro xizmatlar": <FiGlobe className="w-5 h-5 text-white" />,
    }

    // Return the icon if it exists, otherwise return a default icon
    return valueIcons[valueTitle] || <FiSearch className="w-5 h-5 text-white" />
  }

  return (
    <section className="py-16 bg-blue-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-lg">{description}</p>
            <div className="space-y-6 mt-8">
              {values.map((value, index) => (
                <Value
                  key={index}
                  icon={value.icon || getIconForValue(value.title)}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
            {extraTitle && extraDescription && (
              <div className="pt-4">
                <h3 className="font-semibold text-xl mb-4">{extraTitle}</h3>
                <p>{extraDescription}</p>
              </div>
            )}
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img
              src={imageSrc || "/placeholder.svg?height=500&width=600"}
              alt="Values image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
