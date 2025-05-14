export default function HeroSection({ title, description, children }) {
  return (
    <section className="relative bg-gradient-to-r from-blue-950 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-lg opacity-90">{description}</p>
        </div>
        {children}
      </div>
    </section>
  )
}
