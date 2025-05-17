"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn } from "react-icons/fi"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // For demo purposes, always succeed
      window.location.href = "/"
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
         

          {/* Login Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 py-6 px-8 text-white">
              <h1 className="text-2xl font-bold flex items-center">
                <FiLogIn className="mr-2" />
                Tizimga kirish
              </h1>
              <p className="mt-2 opacity-90">Hisobingizga kirish uchun ma'lumotlaringizni kiriting</p>
            </div>

            <div className="p-8">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
              )}

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
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="password" className="block text-gray-700 font-medium">
                      Parol
                    </label>
                    <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                      Parolni unutdingizmi?
                    </Link>
                  </div>
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
                </div>

                {/* Remember Me */}
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-gray-700">
                    Meni eslab qolish
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                >
                  {isLoading ? "Kirish..." : "Kirish"}
                </button>
              </form>

              {/* Divider */}
              <div className="relative flex items-center mt-8 mb-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-600">yoki</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Social Login */}
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

              {/* Sign Up Link */}
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Hisobingiz yo'qmi?{" "}
                  <Link href="/register" className="text-blue-600 hover:text-blue-800 font-medium">
                    Ro'yxatdan o'tish
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
