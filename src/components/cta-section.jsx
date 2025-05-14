export default function CTASection({ title, description, primaryButtonText, secondaryButtonText }) {
  return (
    <section className="py-16 bg-blue-950 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="max-w-2xl mx-auto mb-8">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-950 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            {primaryButtonText}
          </a>
          {secondaryButtonText && (
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              {secondaryButtonText}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
