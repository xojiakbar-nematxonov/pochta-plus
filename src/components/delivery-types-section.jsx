import Image from "next/image"

function DeliveryType({ title, description, imageSrc }) {
  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden">
      <img src={imageSrc || "/placeholder.svg?height=400&width=600"} alt={title}  className="object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </div>
  )
}

export default function DeliveryTypesSection({ deliveryTypes }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {deliveryTypes.map((type, index) => (
            <DeliveryType key={index} title={type.title} description={type.description} imageSrc={type.imageSrc} />
          ))}
        </div>
      </div>
    </section>
  )
}
