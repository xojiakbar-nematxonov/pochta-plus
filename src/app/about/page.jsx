import Image from "next/image"
import SocialConnectSection from "@/components/social-connect-section"
import LocationsGrid from "@/components/locations-grid"
import ValuesSection from "@/components/values-section"
import TeamSection from "@/components/team-section"
import ContactGrid from "@/components/contact-grid"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import {  FiUpload } from "react-icons/fi"

export default function AboutPage() {
  // Social media icons
  const socialLinks = [
    {
      href: "#",
      icon: <FaFacebook className="w-5 h-5" />,
      name: "facebook",
    },
    {
      href: "#",
      icon: <FaTwitter className="w-5 h-5" />,
      name: "twitter",
    },
    {
      href: "#",
      icon: <FaInstagram className="w-5 h-5" />,
      name: "instagram",
    },
    {
      href: "#",
      icon: <FaLinkedin className="w-5 h-5" />,
      name: "linkedin",
    },
  ]

  // Locations data
  const locations = [
    {
      city: "Toshkent",
      address: "Amir Temur ko'chasi, 15, Toshkent, O'zbekiston",
      postalCode: "100000",
    },
    {
      city: "Samarqand",
      address: "Registon ko'chasi, 7, Samarqand, O'zbekiston",
      postalCode: "140100",
    },
    {
      city: "Buxoro",
      address: "Pochtachi ko'chasi, 12, Buxoro, O'zbekiston",
      postalCode: "200100",
    },
    {
      city: "Urganch",
      address: "Xorazm ko'chasi, 5, Urganch, O'zbekiston",
      postalCode: "220100",
    },
  ]

  // Values data
  const values = [
    {
      title: "Jo'natmalarni kuzatish",
      description: "Jo'natmalaringizni real vaqtda kuzatish imkoniyatidan foydalaning.",
    },
    {
      title: "Xavfsiz to'lovlar",
      description: "Bizning platformamiz orqali xavfsiz va ishonchli to'lovlarni amalga oshiring.",
    },
    {
      title: "Xalqaro xizmatlar",
      description: "Xalqaro jo'natmalarni qulay va samarali tarzda amalga oshiring.",
    },
  ]

  const teamMembers = [
    {
      name: "Olimjon Karimov",
      role: "Rahbar",
      imageSrc: "/staff.png",
    },
    {
      name: "Dilnoza Ismoilova",
      role: "Marketing mutaxassisi",
      imageSrc: "/staff.png",
    },
    {
      name: "Shokirbek Abdullayev",
      role: "Texnik mutaxassis",
      imageSrc: "/staff.png",
    },
    {
      name: "Madina Ergasheva",
      role: "Mijozlar bilan aloqalar bo'limi",
      imageSrc: "/staff.png",
    },
  ]

  // Contact data
  const contacts = [
    {
      title: "Hamkorlik",
      email: "hamkorlik@pochtaplus.uz",
      phone: "+998 (71) 123-4567",
    },
    {
      title: "Matbuot",
      email: "matbuot@pochtaplus.uz",
      phone: "+998 (71) 234-5678",
    },
    {
      title: "Karyera",
      email: "karyera@pochtaplus.uz",
      phone: "+998 (71) 345-6789",
    },
    {
      title: "Umumiy savollar",
      email: "info@pochtaplus.uz",
      phone: "+998 (71) 456-7890",
    },
  ]

  // Additional locations data
  const additionalLocations = [
    {
      city: "Toshkent",
      address: "Amir Temur ko'chasi, 15-uy, Toshkent, O'zbekiston",
      postalCode: "100000",
    },
    {
      city: "Samarqand",
      address: "Registon ko'chasi, 25-uy, Samarqand, O'zbekiston",
      postalCode: "140100",
    },
    {
      city: "Buxoro",
      address: "Ibn Sino ko'chasi, 10-uy, Buxoro, O'zbekiston",
      postalCode: "200100",
    },
    {
      city: "Farg'ona",
      address: "Navroz ko'chasi, 5-uy, Farg'ona, O'zbekiston",
      postalCode: "150100",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-blue-600 font-medium mb-2">Sifatli xizmatlar va innovatsion yechimlar</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Biz haqimizda</h1>
            <p className="text-gray-700 text-lg">
              Smart Post platformasi pochta xizmatlarini zamonaviy va qulay shaklda taqdim etadi. Bizning maqsadimiz -
              xalqaro va mahalliy jo'natmalarni kuzatish, to'lovlarni osonlashtirish va foydalanuvchilar uchun eng
              yaxshi xizmatlarni yaratish.
            </p>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <SocialConnectSection
        title="Biz bilan bog'laning"
        description="Smart Post platformasi orqali siz biz bilan aloqada bo'lishingiz, savollaringizni berishingiz va hamkorlik imkoniyatlarini muhokama qilishingiz mumkin."
        socialLinks={socialLinks}
      >
        <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-bold text-blue-800 mb-6 pb-2 border-b">
             Murojaat yoki hamkorlik  uchun ariza yuborish
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                {/* Applicant Name */}
                <div className="md:col-span-1">
                  <label className="block mb-1">
                    Murojatchi <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ismingizni kiriting"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Email */}
                <div className="md:col-span-1">
                  <label className="block mb-1">E-mail:</label>
                  <input
                    type="email"
                    placeholder="Email manzilingizni kiriting"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Phone */}
                <div className="md:col-span-1">
                  <label className="block mb-1">
                    Telefon raqami: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Telefon raqamingizni kiriting"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block mb-1">Fayl</label>
                <div className="flex items-center gap-2">
                  <label className="cursor-pointer flex items-center gap-2 border rounded-md px-3 py-1.5 bg-gray-50 hover:bg-gray-100">
                    <FiUpload className="text-gray-600" />
                    <span>Выберите файл</span>
                    <input type="file" className="hidden" />
                  </label>
                  <span className="text-gray-500 text-sm">Файл не выбран</span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1">
                  Murojaat matni <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="6"
                  placeholder="Savol, murojaat yoki taklifni kiriting..."
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Xabar Yuborish
                </button>
              </div>
            </form>
          </div>
      </SocialConnectSection>

    

      {/* Our Values Section */}
      <ValuesSection
        title="Bizning qadriyatlarimiz"
        description="Smart Post jamoasi sifat, ishonchlilik va mijozlarga qulaylikni birinchi o'ringa qo'yadi. Bizning xizmatlarimiz orqali jo'natmalarni kuzatish va to'lovlarni amalga oshirish yanada osonlashadi."
        values={values}
        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-juooJireNDrnqM68qqWCdHElgrQffP.png"
        extraTitle="Oson va qulay xizmatlar"
        extraDescription="Bizning platformamiz orqali pochta xizmatlaridan foydalanish yanada qulay va tezkor."
      />

      {/* Our Team Section */}
      <TeamSection
        title="Bizning jamoamiz Mutaxassislar"
        description="Smart Post jamoasi - bu tajribali mutaxassislar va innovatsion fikrlovchilar. Ular sizga eng yaxshi xizmatlarni taqdim etishga tayyor."
        members={teamMembers}
        buttonText="Jamoamizni ko'ring"
      />

      {/* Contact Section */}
      <ContactGrid title="Biz bilan bog'laning" contacts={contacts} />

      {/* Additional Locations Section */}
      <LocationsGrid
        title="Bizning manzillarimiz"
        description="O'zbekiston bo'ylab bizning ofislarimizni kashf eting."
        locations={additionalLocations}
      />
    </main>
  )
}
