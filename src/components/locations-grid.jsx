function Location({ city, address, postalCode }) {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{city}</h3>
      <p className="text-gray-600 mb-2">{address}</p>
      <p className="font-medium">{postalCode}</p>
    </div>
  )
}

export default function LocationsGrid({ title, description, locations }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <p className="text-gray-700 mb-8">{description}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <Location key={index} city={location.city} address={location.address} postalCode={location.postalCode} />
          ))}
        </div>
      </div>
    </section>
  )
}
