"use client"; // Add this directive at the top

import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiUpload } from "react-icons/fi";

export default function ContactPage() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    applicant: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });
  const [status, setStatus] = useState("");

  // Telegram Bot credentials
  const botToken = "7140817767:AAE7Pp6NSlttwdqzcBk-biJnSoCdONvsRjQ";
  const chatId = "-4177602455";

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Yuborilmoqda...");

    // Prepare the message to send to Telegram
    const message = `
      Yangi murojaat:
      Murojatchi: ${formData.applicant}
      Email: ${formData.email || "Kiritilmagan"}
      Telefon: ${formData.phone}
      Xabar: ${formData.message}
    `;

    try {
      // Send text message to Telegram
      const textResponse = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        }
      );

      const textResult = await textResponse.json();
      if (!textResult.ok) {
        throw new Error(textResult.description || "Xabar yuborishda xatolik");
      }

      // If a file is attached, send it to Telegram
      if (formData.file) {
        const formDataToSend = new FormData();
        formDataToSend.append("chat_id", chatId);
        formDataToSend.append("document", formData.file);

        const fileResponse = await fetch(
          `https://api.telegram.org/bot${botToken}/sendDocument`,
          {
            method: "POST",
            body: formDataToSend,
          }
        );

        const fileResult = await fileResponse.json();
        if (!fileResult.ok) {
          throw new Error(fileResult.description || "Fayl yuborishda xatolik");
        }
      }

      setStatus("Xabar muvaffaqiyatli yuborildi!");
      // Reset form
      setFormData({
        applicant: "",
        email: "",
        phone: "",
        message: "",
        file: null,
      });
    } catch (error) {
      setStatus(`Xatolik: ${error.message}`);
    }
  };

  return (
    <main className="min-h-screen bg-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-bold text-blue-800 mb-6 pb-2 border-b">
              Biz bilan bog'lanish turlari:
            </h2>

            {/* Phone */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Telefon raqam</h3>
                  <p className="text-lg">1165</p>
                  <p>71 233-57-47</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">E-mail:</h3>
                  <p className="text-blue-600">uzpost.business@gmail.com</p>
                  <p className="text-sm text-gray-600">(Savollar va takliflar)</p>
                  <p className="text-blue-600 mt-1">info@pochta.uz</p>
                  <p className="text-sm text-gray-600">
                    (Rasmiy xatlar va murojatlar)
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Manzil:</h3>
                  <p>Yunusobod tumani, Oloy ko'chasi, 1-uy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-bold text-blue-800 mb-6 pb-2 border-b">
              Murojaat yoki hamkorlik uchun ariza yuborish
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-3 gap-4">
                {/* Applicant Name */}
                <div className="md:col-span-1">
                  <label className="block mb-1">
                    Murojatchi <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="applicant"
                    value={formData.applicant}
                    onChange={handleInputChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
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
                    <input
                      type="file"
                      name="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <span className="text-gray-500 text-sm">
                    {formData.file ? formData.file.name : "Файл не выбран"}
                  </span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1">
                  Murojaat matni <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Savol, murojaat yoki taklifni kiriting..."
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              {/* Status Message */}
              {status && (
                <div
                  className={`text-sm ${
                    status.includes("Xatolik")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {status}
                </div>
              )}

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
        </div>
      </div>
    </main>
  );
}