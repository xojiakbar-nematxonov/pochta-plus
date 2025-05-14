import { FiHelpCircle } from "react-icons/fi"

function FAQItem({ question, answer }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
        <FiHelpCircle className="w-4 h-4" />
      </div>
      <div>
        <h3 className="font-semibold mb-2">{question}</h3>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQSection({ title, faqs, ctaText, ctaButtonText }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        {ctaText && ctaButtonText && (
          <div className="mt-12 text-center">
            <p className="mb-4">{ctaText}</p>
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              {ctaButtonText}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
