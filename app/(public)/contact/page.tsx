'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+63',
    contactNumber: '',
    message: '',
    isHuman: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const countryCodes = [
    { code: '+63', country: 'Philippines' },
    { code: '+1', country: 'USA/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'Australia' },
    { code: '+81', country: 'Japan' },
    { code: '+33', country: 'France' },
    { code: '+49', country: 'Germany' },
    { code: '+39', country: 'Italy' },
    { code: '+34', country: 'Spain' },
    { code: '+886', country: 'Taiwan' },
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.isHuman) {
      setSubmitMessage('Please verify that you are not a robot')
      return
    }

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.contactNumber ||
      !formData.message
    ) {
      setSubmitMessage('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitMessage('Thank you! Your message has been sent successfully.')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+63',
        contactNumber: '',
        message: '',
        isHuman: false,
      })

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-white text-[#483ef7]">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            CONTACT US
          </h1>
          <p className="text-lg md:text-xl">
            Have a question? We're here to help.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-left font-semibold mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                placeholder="First Name"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-left font-semibold mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-left font-semibold mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
              placeholder="your.email@example.com"
              required
            />
          </div>

          {/* Contact Number with Country Code */}
          <div>
            <label className="block text-left font-semibold mb-2">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-0">
              {/* Country Code Dropdown */}
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="px-4 py-3 border border-r-0 border-gray-300 rounded-l-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none bg-white transition-all"
              >
                {countryCodes.map(country => (
                  <option key={country.code} value={country.code}>
                    {country.code}
                  </option>
                ))}
              </select>

              {/* Phone Number Input */}
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                placeholder="123456789"
                required
              />
            </div>
          </div>

          {/* Questions and Comments */}
          <div>
            <label className="block text-left font-semibold mb-2">
              Questions and Comments <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all resize-none"
              rows={5}
              placeholder="Tell us about your inquiry or concern..."
              required
            ></textarea>
          </div>

          {/* Captcha Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="isHuman"
              checked={formData.isHuman}
              onChange={handleChange}
              className="w-5 h-5 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
            <label className="ml-3 font-medium cursor-pointer">
              I'm not a robot
            </label>
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div
              className={`p-4 rounded-lg text-center font-medium ${
                submitMessage.includes('successfully')
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {submitMessage}
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-10 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
