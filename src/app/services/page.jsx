import Image from "next/image"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import TrackingSection from "@/components/tracking-section"
import OnlineServicesSection from "@/components/online-services-section"
import ServicesGrid from "@/components/services-grid"
import DeliveryTypesSection from "@/components/delivery-types-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import { FiMapPin } from "react-icons/fi"

export default function ServicesPage() {
  // Stats data
  const stats = [
    {
      value: "100+ mamlakat",
      label: "Xalqaro Jo'natmalar",
    },
    {
      value: "24/7",
      label: "Onlayn To'lovlar",
    },
    {
      value: "10+",
      label: "Xizmat Turlari",
    },
    {
      value: "Millionlab",
      label: "Foydalanuvchilar",
    },
  ]

  // Tracking features data
  const trackingFeatures = [
    {
      number: "1",
      title: "Tezkor Kuzatuv",
      description: "Jo'natmalar holatini bir necha soniya ichida tekshiring.",
    },
    {
      number: "2",
      title: "Xavfsizlik Kafolati",
      description: "Jo'natmalaringizni ishonchli tizim orqali kuzatib boring.",
    },
    {
      number: "3",
      title: "Global Qamrov",
      description: "Dunyoning istalgan joyiga jo'natmalarni kuzatish imkoniyati.",
    },
  ]

  // Online services steps data
  const onlineServicesSteps = [
    {
      number: "01",
      title: "Ro'yxatdan o'ting",
      description: "Platformaga kirish uchun hisob yarating.",
    },
    {
      number: "02",
      title: "Xizmatni tanlang",
      description: "Sizga kerakli xizmatni tanlang va ariza yuboring.",
    },
    {
      number: "03",
      title: "To'lovni amalga oshiring",
      description: "Onlayn to'lov tizimi orqali xizmat uchun to'lov qiling.",
    },
  ]

  // Services data - we'll use the automatic icon mapping in ServicesGrid
  const services = [
    {
      title: "Jo'natmalarni Kuzatish",
      description: "Real vaqtda jo'natmalar holatini kuzatish imkoniyati.",
    },
    {
      title: "Xalqaro Jo'natmalar",
      description: "Dunyo bo'ylab jo'natmalarni yetkazib berish xizmatlari.",
    },
    {
      title: "Onlayn To'lovlar",
      description: "Xizmatlar uchun qulay va tezkor to'lov tizimi.",
    },
    {
      title: "E-tijorat Integratsiyasi",
      description: "Biznesingizni rivojlantirish uchun pochta xizmatlari.",
    },
    {
      title: "Mahalliy Yetkazib Berish",
      description: "Hududiy jo'natmalar tez va ishonchli yetkazish.",
    },
  ]

  // Special services data
  const specialServices = [
    {
      title: "Virtual pochta qutisi",
      description: "Sizning pochta xabarlaringizni onlayn kuzatish imkoniyati.",
    },
    {
      title: "Sug'urta xizmati",
      description: "Jo'natmalaringizni xavfsiz va sug'urtalangan holda yetkazib berish.",
    },
    {
      title: "Tezkor yetkazib berish",
      description: "Mahsulotlaringizni eng qisqa vaqt ichida yetkazib berish.",
    },
    {
      title: "Pochta abonamenti",
      description: "Doimiy mijozlar uchun maxsus pochta xizmatlari.",
    },
    {
      title: "Pochta bank xizmatlari",
      description: "To'lovlar va moliyaviy operatsiyalarni pochta orqali amalga oshirish.",
    },
    {
      title: "Maxsus qadoqlash",
      description: "Jo'natmalaringiz uchun sifatli va xavfsiz qadoqlash xizmati.",
    },
  ]

  // Delivery types data
  const deliveryTypes = [
    {
      title: "Xalqaro Jo'natmalar",
      description: "Dunyo bo'ylab jo'natmalarni ishonchli va tez yetkazib berish.",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e85rRBWzBd11BdGyXPxrlA4J3YZMfo.png",
    },
    {
      title: "Mahalliy Yetkazib Berish",
      description: "Hududiy jo'natmalar uchun tezkor xizmatlar.",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e85rRBWzBd11BdGyXPxrlA4J3YZMfo.png",
    },
  ]

  // FAQ data
  const faqs = [
    {
      question: "Qanday ro'yxatdan o'tish mumkin?",
      answer: "Sahifaning yuqori qismidagi \"Ro'yxatdan o'tish\" tugmasini bosib, kerakli ma'lumotlarni kiriting.",
    },
    {
      question: "Xizmatlar uchun chegirmalar mavjudmi?",
      answer: "Ha, bizda mavjudiy chegirmalar va maxsus aksiyalar mavjud.",
    },
    {
      question: "To'lovni qanday amalga oshirish mumkin?",
      answer:
        "Bizning platformada kredit karta, PayPal va bank o'tkazmalari orqali to'lovni amalga oshirishingiz mumkin.",
    },
    {
      question: "Qo'llab-quvvatlash xizmatidan qanday foydalanish mumkin?",
      answer: "Bizning qo'llab-quvvatlash jamoamiz 24/7 rejimida email, chat va telefon orqali sizga yordam beradi.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Xizmatlarimizga xush kelibsiz"
        description="Pochta Plus platformasi orqali jo'natmalar kuzatish, xalqaro jo'natmalar va onlayn to'lovlar xizmatlaridan foydalaning."
      >
        <StatsSection stats={stats} />
      </HeroSection>

      {/* Tracking Service Section */}
      <TrackingSection
        title="Jo'natmalarni kuzatish xizmati"
        description="Real vaqtda jo'natmalar holatini kuzatib boring va jo'natmalaringiz xavfsizligini ta'minlang."
        features={trackingFeatures}
        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-olZ3dM1Bametv46ENWFXYh9SRbLATJ.png"
      />

      {/* Online Services Section */}
      <OnlineServicesSection
        title="Onlayn to'lov va xizmatlardan foydalanish jarayoni"
        description="Pochta Plus orqali xizmatlardan foydalanish juda oson. Quyidagi bosqichlarni bajaring:"
        steps={onlineServicesSteps}
        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fckk37CxgoP2RByTH7LGCe3TJ6LBoU.png"
      />

      {/* Our Services Section */}
      <ServicesGrid
        title="Bizning xizmatlarimiz"
        description="Pochta Plus sizga pochta va logistika sohasida eng yaxshi xizmatlarni taqdim etadi. Bizning malakali jamoamiz quyidagi xizmatlarni taqdim etadi."
        services={services}
      />

      {/* Special Services Section */}
      <ServicesGrid
        title="Zamonaviy va ishonchli pochta xizmatlarimiz"
        description="O'zbekiston pochta xizmatlari"
        services={specialServices}
      />

      {/* Delivery Types Section */}
      <DeliveryTypesSection deliveryTypes={deliveryTypes} />

      {/* Service Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Bizning xizmat hududlarimiz</h2>
              <p className="text-gray-600">
                Pochta Plus xalqaro va mahalliy hududlarda xizmat ko'rsatadi. Bizning Toshkent ofisimiz orqali
                xizmatlardan foydalaning.
              </p>
              <div className="flex items-center gap-2">
                <FiMapPin className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Toshkent ofisi</span>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pzURjFma2OiRRshr4y7XlP3abH5wDX.png"
                alt="Service areas map"
                
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Ko'p so'raladigan savollar"
        faqs={faqs}
        ctaText="Sizni qiziqtirgan savolga javob topa olmadingizmi?"
        ctaButtonText="Bizning qo'llab-quvvatlash xizmatimizga murojaat qiling"
      />

      {/* CTA Section */}
      <CTASection
        title="Hamkorlikni boshlang"
        description="Biz bilan birga ishlash orqali pochta xizmatlarini yangi darajaga olib chiqing. Hoziroq qo'shiling!"
        primaryButtonText="Boshlang"
        secondaryButtonText="Batafsil ma'lumot"
      />
    </main>
  )
}
