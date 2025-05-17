import Image from "next/image"
import { FiCheckCircle, FiShield, FiGlobe } from "react-icons/fi"

function TrackingFeature({ number, title, description, icon }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
        {icon || <span className="text-sm font-bold">{number}</span>}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-blue-200">{description}</p>
      </div>
    </div>
  )
}

export default function TrackingSection({ title, description, features, imageSrc }) {
  // Map feature numbers to icons
  const getIconForFeature = (featureNumber) => {
    const featureIcons = {
      1: <FiCheckCircle className="w-4 h-4 text-white" />,
      2: <FiShield className="w-4 h-4 text-white" />,
      3: <FiGlobe className="w-4 h-4 text-white" />,
    }

    return featureIcons[featureNumber]
  }

  return (
    <section className="py-16 bg-blue-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-lg">{description}</p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <TrackingFeature
                  key={index}
                  number={feature.number}
                  title={feature.title}
                  description={feature.description}
                  icon={getIconForFeature(feature.number)}
                />
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src={"uzpost1.jpg" || "/placeholder.svg?height=400&width=600"}
              alt="Delivery tracking service"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
