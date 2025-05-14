import Link from "next/link"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

function SocialLink({ href, icon }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
    >
      {icon}
    </Link>
  )
}

export default function SocialConnectSection({ title, description, socialLinks, children }) {
  // Map social media names to icons
  const getIconForSocial = (socialName) => {
    const socialIcons = {
      facebook: <FaFacebook className="w-5 h-5" />,
      twitter: <FaTwitter className="w-5 h-5" />,
      instagram: <FaInstagram className="w-5 h-5" />,
      linkedin: <FaLinkedin className="w-5 h-5" />,
    }

    return socialIcons[socialName] || <FaFacebook className="w-5 h-5" />
  }

  return (
    <section className="py-12 bg-gray-50 border-t border-b">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="text-gray-700 mb-6">{description}</p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  icon={link.icon || getIconForSocial(link.name || "facebook")}
                />
              ))}
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}
