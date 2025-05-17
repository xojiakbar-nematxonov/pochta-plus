import Image from "next/image"
import { FiUserPlus, FiPackage, FiCreditCard } from "react-icons/fi"

function Step({ number, title, description, icon }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
        {icon || <span>{number}</span>}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default function OnlineServicesSection({ title, description, steps, imageSrc }) {
  // Map step numbers to icons
  const getIconForStep = (stepNumber) => {
    const stepIcons = {
      "01": <FiUserPlus className="w-5 h-5" />,
      "02": <FiPackage className="w-5 h-5" />,
      "03": <FiCreditCard className="w-5 h-5" />,
    }

    return stepIcons[stepNumber]
  }

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <img
              src={"os.jpg" || "/placeholder.svg?height=300&width=500"}
              alt="Online services"
              
              className="object-contain"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p>{description}</p>
            <div className="grid gap-6">
              {steps.map((step, index) => (
                <Step
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={getIconForStep(step.number)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
