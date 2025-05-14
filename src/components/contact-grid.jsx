function ContactCard({ title, email, phone }) {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-blue-600 mb-1">{email}</p>
      <p className="text-gray-600">{phone}</p>
    </div>
  )
}

export default function ContactGrid({ title, contacts }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <ContactCard key={index} title={contact.title} email={contact.email} phone={contact.phone} />
          ))}
        </div>
      </div>
    </section>
  )
}
