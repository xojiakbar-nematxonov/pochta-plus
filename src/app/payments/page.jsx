import Image from "next/image"
import Link from "next/link"

import { FiCreditCard, FiDollarSign, FiSmartphone, FiGlobe, FiClock, FiCheckCircle, FiArrowRight } from "react-icons/fi"

export default function PaymentServicesPage() {
  // Payment methods
  const paymentMethods = [
    {
      title: "SPM Card",
      description: "Bo'lib to'lash imkoniyati bilan xaridlar",
      icon: <FiCreditCard className="w-8 h-8 text-blue-600" />,
      link: "/payment-services/spm-card",
    },
    {
      title: "Onlayn to'lovlar",
      description: "Tezkor va qulay onlayn to'lovlar",
      icon: <FiDollarSign className="w-8 h-8 text-blue-600" />,
      link: "/payment-services/online-payments",
    },
    {
      title: "Mobil to'lovlar",
      description: "Mobil ilova orqali to'lovlar",
      icon: <FiSmartphone className="w-8 h-8 text-blue-600" />,
      link: "/payment-services/mobile-payments",
    },
    {
      title: "Xalqaro to'lovlar",
      description: "Xalqaro pul o'tkazmalari",
      icon: <FiGlobe className="w-8 h-8 text-blue-600" />,
      link: "/payment-services/international-payments",
    },
  ]

  // Payment plans
  const paymentPlans = [
    {
      title: "3 oyga bo'lib to'lash",
      description: "Xaridingizni 3 oyga bo'lib to'lash imkoniyati",
      icon: <FiClock className="w-8 h-8 text-blue-600" />,
      badge: "Eng mashhur",
    },
    {
      title: "6 oyga bo'lib to'lash",
      description: "Xaridingizni 6 oyga bo'lib to'lash imkoniyati",
      icon: <FiClock className="w-8 h-8 text-blue-600" />,
      badge: null,
    },
    {
      title: "12 oyga bo'lib to'lash",
      description: "Xaridingizni 12 oyga bo'lib to'lash imkoniyati",
      icon: <FiClock className="w-8 h-8 text-blue-600" />,
      badge: null,
    },
  ]

  // Benefits
  const benefits = [
    {
      title: "Tezkor to'lovlar",
      description: "To'lovlaringizni bir necha soniyada amalga oshiring",
    },
    {
      title: "Xavfsiz to'lovlar",
      description: "Barcha to'lovlar xavfsizlik standartlariga muvofiq amalga oshiriladi",
    },
    {
      title: "24/7 qo'llab-quvvatlash",
      description: "Bizning mutaxassislar har doim yordam berishga tayyor",
    },
    {
      title: "Qulay interfeyslar",
      description: "Foydalanish uchun qulay va tushunarli interfeyslar",
    },
    {
      title: "Keng qamrovli xizmatlar",
      description: "Barcha turdagi to'lovlar uchun yechimlar",
    },
    {
      title: "Bonuslar va chegirmalar",
      description: "Doimiy mijozlar uchun maxsus bonuslar va chegirmalar",
    },
  ]

  // Partners
  const partners = [
    { name: "Visa", logo: "/spmcard.webp" },
    { name: "Mastercard", logo: "/spmcard.webp" },
    { name: "Humo", logo: "/spmcard.webp" },
    { name: "Uzcard", logo: "/spmcard.webp" },
    { name: "PayPal", logo: "/spmcard.webp" },
    { name: "Western Union", logo: "/spmcard.webp" },
  ]

  // FAQ items
  const faqItems = [
    {
      question: "SPM Card qanday olish mumkin?",
      answer:
        "SPM Card olish uchun ariza to'ldiring va kerakli hujjatlarni taqdim eting. Arizangiz ko'rib chiqilgandan so'ng, kartangiz tayyor bo'ladi.",
    },
    {
      question: "Bo'lib to'lash xizmati qanday ishlaydi?",
      answer:
        "Bo'lib to'lash xizmati orqali siz xaridingizni 3, 6 yoki 12 oyga bo'lib to'lashingiz mumkin. Bu xizmatdan foydalanish uchun SPM Card kerak bo'ladi.",
    },
    {
      question: "Qanday to'lov usullari mavjud?",
      answer: "Biz Visa, Mastercard, Humo, Uzcard, PayPal va boshqa ko'plab to'lov usullarini qabul qilamiz.",
    },
    {
      question: "Xalqaro to'lovlar qancha vaqt oladi?",
      answer:
        "Xalqaro to'lovlar odatda 1-3 ish kuni ichida amalga oshiriladi, ammo ba'zi hollarda bu vaqt uzayishi mumkin.",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">To'lov xizmatlari</h1>
              <p className="text-lg opacity-90">
                SPM bilan to'lovlaringizni tez, qulay va xavfsiz amalga oshiring. Bo'lib to'lash, onlayn to'lovlar va
                xalqaro pul o'tkazmalari - barchasi bir joyda.
              </p>
              <Link
                href="#payment-methods"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-md transition-colors"
              >
                Xizmatlarni ko'rish
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/payments.jpg"
                  alt="To'lov xizmatlari"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section id="payment-methods" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">To'lov usullari</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paymentMethods.map((method, index) => (
              <Link
                key={index}
                href={method.link}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Batafsil</span>
                  <FiArrowRight className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SPM Card Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">SPM Card bilan bo'lib to'lash</h2>
              <p className="text-lg">
                SPM Card orqali xaridlaringizni 3, 6 yoki 12 oyga bo'lib to'lash imkoniyatiga ega bo'ling. Foizsiz va
                qulay to'lov rejasi bilan xaridlaringizni amalga oshiring.
              </p>
              <ul className="space-y-3">
                {[
                  "200+ do'konlarda xarid qilish imkoniyati",
                  "Foizsiz bo'lib to'lash",
                  "Tezkor ariza ko'rib chiqish",
                  "Qulay mobil ilova orqali boshqarish",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheckCircle className="w-5 h-5 text-yellow-400 mt-1 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/payment-services/spm-card"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-md transition-colors"
              >
                SPM Card olish
              </Link>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/spmcard.webp"
                alt="SPM Card"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Bo'lib to'lash rejalarimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {paymentPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 shadow-sm border-2 ${plan.badge ? "border-blue-600" : "border-gray-200"}`}
              >
                {plan.badge && (
                  <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    {plan.badge}
                  </div>
                )}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Link
                  href={`/payment-services/plans/${index + 1}`}
                  className={`inline-block w-full text-center py-2 rounded-md font-medium ${
                    plan.badge
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  } transition-colors`}
                >
                  Tanlash
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nima uchun SPM to'lov xizmatlari?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Bizning hamkorlarimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm border flex items-center justify-center h-24"
              >
                <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} width={120} height={60} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Ko'p so'raladigan savollar</h2>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm mb-4">
                <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">SPM to'lov xizmatlaridan foydalanishni boshlang</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            SPM to'lov xizmatlari bilan to'lovlaringizni tez, qulay va xavfsiz amalga oshiring. Hoziroq ro'yxatdan
            o'ting va barcha imkoniyatlardan foydalaning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/register"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-md transition-colors"
            >
              Ro'yxatdan o'tish
            </Link>
            <Link
              href="/payment-services/spm-card"
              className="inline-block bg-transparent hover:bg-blue-700 text-white border border-white px-8 py-3 rounded-md font-bold transition-colors"
            >
              SPM Card olish
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
