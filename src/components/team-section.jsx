import Image from "next/image"

function TeamMember({ name, role, imageSrc }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-80">
        <Image src={imageSrc || "/placeholder.svg?height=320&width=280"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  )
}

export default function TeamSection({ title, description, members, buttonText }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} imageSrc={member.imageSrc} />
          ))}
        </div>

        {buttonText && (
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
