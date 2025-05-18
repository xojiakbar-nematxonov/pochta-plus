import Image from "next/image"
import SocialConnectSection from "@/components/social-connect-section"
import LocationsGrid from "@/components/locations-grid"
import ValuesSection from "@/components/values-section"
import TeamSection from "@/components/team-section"
import ContactGrid from "@/components/contact-grid"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FiChevronDown, FiStar } from "react-icons/fi"

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
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Add Your Form in 3 Easy Steps</h3>
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                <span>1</span>
              </div>
              <div>
                <p className="font-medium">Choose a third-party form to embed.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                <span>2</span>
              </div>
              <div>
                <p className="font-medium">Create and customize your form using the selected platform.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                <span>3</span>
              </div>
              <div>
                <p className="font-medium">Input the form link into the setting bar and click Confirm.</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-medium mb-4">You can choose</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                    <span className="text-purple-600 text-sm">G</span>
                  </div>
                  <span className="font-medium">Google Forms</span>
                </div>
                <p className="text-xs text-gray-600">A powerful online form creator by Google.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-blue-600 text-sm">T</span>
                  </div>
                  <span className="font-medium">Typeform</span>
                </div>
                <p className="text-xs text-gray-600">An interactive and stylish form builder.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                    <span className="text-green-600 text-sm">O</span>
                  </div>
                  <span className="font-medium">Other</span>
                </div>
                <p className="text-xs text-gray-600">For other forms, use an embed code to add them.</p>
              </div>
            </div>
          </div>
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
