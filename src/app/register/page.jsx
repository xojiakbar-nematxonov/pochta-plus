"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiUserPlus, FiPhone } from "react-icons/fi"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [step, setStep] = useState(1)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleNextStep = (e) => {
    e.preventDefault()
    setStep(2)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Parollar mos kelmadi")
      return
    }

    setIsLoading(true)

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false)
      // For demo purposes, always succeed
      window.location.href = "/login"
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          

          {/* Register Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 py-6 px-8 text-white">
              <h1 className="text-2xl font-bold flex items-center">
                <FiUserPlus className="mr-2" />
                Ro'yxatdan o'tish
              </h1>
              <p className="mt-2 opacity-90">Yangi hisob yaratish uchun ma'lumotlaringizni kiriting</p>
            </div>

            <div className="p-8">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
              )}

              {/* Progress Steps */}
              <div className="flex items-center mb-8">
                <div className="flex-1">
                  <div
                    className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                      step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    1
                  </div>
                  <p className="text-xs text-center mt-1">Shaxsiy ma'lumotlar</p>
                </div>
                <div className={`flex-1 h-1 ${step >= 2 ? "bg-blue-600" : "bg-gray-200"}`}></div>
                <div className="flex-1">
                  <div
                    className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                      step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    2
                  </div>
                  <p className="text-xs text-center mt-1">Hisob ma'lumotlari</p>
                </div>
              </div>

              {step === 1 ? (
                <form onSubmit={handleNextStep}>
                  {/* First Name Field */}
                  <div className="mb-6">
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                      Ismingiz
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ismingizni kiriting"
                        required
                      />
                    </div>
                  </div>

                  {/* Last Name Field */}
                  <div className="mb-6">
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                      Familiyangiz
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Familiyangizni kiriting"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Telefon raqamingiz
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiPhone className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+998 XX XXX XX XX"
                        required
                      />
                    </div>
                  </div>

                  {/* Next Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    Keyingi
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Email Field */}
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email manzil
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="sizning@email.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                      Parol
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiLock className="text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Parolingizni kiriting"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-gray-400 hover:text-gray-600 focus:outline-none"
                        >
                          {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Parol kamida 8 ta belgidan iborat bo'lishi kerak</p>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                      Parolni tasdiqlang
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiLock className="text-gray-400" />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Parolingizni qayta kiriting"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="text-gray-400 hover:text-gray-600 focus:outline-none"
                        >
                          {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-gray-700 text-sm">
                      Men{" "}
                      <Link href="/terms" className="text-blue-600 hover:text-blue-800">
                        foydalanish shartlari
                      </Link>{" "}
                      va{" "}
                      <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
                        maxfiylik siyosati
                      </Link>{" "}
                      bilan tanishdim va roziman
                    </label>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                    >
                      Orqaga
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                    >
                      {isLoading ? "Ro'yxatdan o'tmoqda..." : "Ro'yxatdan o'tish"}
                    </button>
                  </div>
                </form>
              )}

              {/* Divider */}
              <div className="relative flex items-center mt-8 mb-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-600">yoki</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Social Registration */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
               <FcGoogle/>
                  <span className="ml-2">Google</span>
                </button>
                <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  <FaFacebook/>
                  <span className="ml-2">Facebook</span>
                </button>
              </div>

              {/* Sign In Link */}
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Hisobingiz bormi?{" "}
                  <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                    Kirish
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
