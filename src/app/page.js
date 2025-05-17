import Image from "next/image"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import TrackingSection from "@/components/tracking-section"
import ServicesGrid from "@/components/services-grid"
import OnlineServicesSection from "@/components/online-services-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";

import { FiSearch, FiGlobe, FiCreditCard, FiStar } from "react-icons/fi"

export default function HomePage() {
  // Stats data
  const stats = [
    {
      value: "100+",
      label: "Mamlakatlar",
    },
    {
      value: "24/7",
      label: "Xizmat",
    },
    {
      value: "1M+",
      label: "Mijozlar",
    },
    {
      value: "99%",
      label: "Mamnuniyat",
    },
  ]

  // Tracking features data
  const trackingFeatures = [
    {
      number: "1",
      title: "Jo'natmani kuzatish",
      description: "Jo'natmalaringizni real vaqtda kuzating va joylashuvini aniqlang.",
    },
    {
      number: "2",
      title: "Xavfsiz yetkazib berish",
      description: "Jo'natmalaringiz xavfsizligi va butunligi kafolatlanadi.",
    },
    {
      number: "3",
      title: "Tezkor xizmat",
      description: "Eng qisqa vaqt ichida jo'natmalaringizni manzilga yetkazib beramiz.",
    },
  ]

  // Online services steps data
  const onlineServicesSteps = [
    {
      number: "01",
      title: "Ro'yxatdan o'ting",
      description: "Platformamizda ro'yxatdan o'ting va shaxsiy kabinetingizni yarating.",
    },
    {
      number: "02",
      title: "Jo'natmani ro'yxatga oling",
      description: "Jo'natmangizni tizimda ro'yxatga oling va kuzatuv raqamini oling.",
    },
    {
      number: "03",
      title: "Kuzatib boring",
      description: "Jo'natmangizni real vaqtda kuzatib boring va manzilga yetib borguncha nazorat qiling.",
    },
  ]

  // Services data
  const services = [
    {
      icon: <FiSearch className="w-6 h-6" />,
      title: "Jo'natmalarni Kuzatish",
      description: "Real vaqtda jo'natmalar holatini kuzatish imkoniyati.",
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Xalqaro Jo'natmalar",
      description: "Dunyo bo'ylab jo'natmalarni yetkazib berish xizmatlari.",
    },
    {
      icon: <FiCreditCard className="w-6 h-6" />,
      title: "Onlayn To'lovlar",
      description: "Xizmatlar uchun qulay va tezkor to'lov tizimi.",
    },
  ]

  // FAQ data
  const faqs = [
    {
      question: "Jo'natmani qanday kuzatish mumkin?",
      answer: "Jo'natmangizni kuzatish uchun kuzatuv raqamini kiritib, jo'natma holatini tekshirishingiz mumkin.",
    },
    {
      question: "Xizmat narxlari qanday?",
      answer:
        "Xizmat narxlari jo'natma vazni, o'lchami va manzili asosida hisoblanadi. Batafsil ma'lumot uchun narxlar sahifasiga o'ting.",
    },
    {
      question: "Jo'natmani qanday yuborish mumkin?",
      answer:
        "Jo'natmani yuborish uchun bizning ofisimizga tashrif buyuring yoki onlayn buyurtma bering. Kuryer xizmatimiz jo'natmangizni olib ketadi.",
    },
    {
      question: "Qanday to'lov usullari mavjud?",
      answer:
        "Biz naqd pul, bank kartasi, onlayn to'lov tizimlari va bank o'tkazmalari orqali to'lovlarni qabul qilamiz.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Smart Post - Zamonaviy Pochta Xizmatlari"
        description="Jo'natmalarni kuzatish, xalqaro pochta xizmatlari va onlayn to'lovlar - barchasi bir platformada"
      >
        <div className="flex flex-col items-center gap-8">
          <StatsSection stats={stats} />

          {/* Tracking Form */}
          <div className="w-full max-w-2xl bg-white/30 backdrop-blur-sm rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Jo'natmangizni kuzating</h3>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Kuzatuv raqamini kiriting"
                className="flex-1 px-4 py-3 rounded-md bg-white text-gray-900  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2"
              >
                <FiSearch className="w-5 h-5" />
                <span>Kuzatish</span>
              </button>
            </form>
          </div>
        </div>
      </HeroSection>

      {/* Services Overview */}
      <ServicesGrid
        title="Bizning Xizmatlarimiz"
        description="Smart Post sizga zamonaviy va qulay pochta xizmatlarini taqdim etadi"
        services={services}
      />

      {/* Tracking Section */}
      <TrackingSection
        title="Jo'natmalarni kuzatish xizmati"
        description="Real vaqtda jo'natmalar holatini kuzatib boring va jo'natmalaringiz xavfsizligini ta'minlang."
        features={trackingFeatures}
        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-olZ3dM1Bametv46ENWFXYh9SRbLATJ.png"
      />

      {/* Online Services Section */}
      <OnlineServicesSection
        title="Onlayn xizmatlardan foydalanish"
        description="Smart Post platformasi orqali xizmatlardan foydalanish juda oson"
        steps={onlineServicesSteps}
        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fckk37CxgoP2RByTH7LGCe3TJ6LBoU.png"
      />

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Mijozlarimiz fikrlari</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar key={star} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Smart Post xizmatlari juda qulay va ishonchli. Jo'natmalarim har doim o'z vaqtida yetib keladi va
                  men ularni real vaqtda kuzatib boraman."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {item === 1 ? "A" : item === 2 ? "B" : "C"}
                  </div>
                  <div>
                    <p className="font-medium">
                      {item === 1 ? "Aziz Karimov" : item === 2 ? "Barno Saidova" : "Camol Rahimov"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item === 1 ? "Tadbirkor" : item === 2 ? "Marketolog" : "Dasturchi"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Bizning hamkorlarimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <div className="text-3xl font-bold text-blue-600">Logo {item}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Ko'p so'raladigan savollar"
        faqs={faqs}
        ctaText="Boshqa savollaringiz bormi?"
        ctaButtonText="Biz bilan bog'laning"
      />

      {/* Mobile App Section */}
      <section className="py-12 bg-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Mobil ilovamizni yuklab oling</h2>
              <p className="text-lg">
                Smart Post mobil ilovasi orqali jo'natmalaringizni kuzating, to'lovlarni amalga oshiring va barcha
                xizmatlardan foydalaning.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-block">
                  <FaAppStoreIos className="text-5xl"/>
                </a>
                <a href="#" className="inline-block">
                  <FaGooglePlay className="text-5xl"/>
                </a>
              </div>
            </div>
            <div className="relative flex h-[500px] justify-center items-center ">
              <div className="w-20 h-20 bg-blue-600 text-4xl rounded-md flex items-center justify-center text-white font-bold mr-2">
              SP
            </div>
            <span className="text-3xl font-bold">Smart Post</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Bizning xizmatlardan foydalaning"
        description="Smart Postplatformasi orqali jo'natmalarni kuzatish, xalqaro pochta xizmatlari va onlayn to'lovlar - barchasi bir platformada"
        primaryButtonText="Boshlash"
        secondaryButtonText="Batafsil ma'lumot"
      />
    </main>
  )
}
