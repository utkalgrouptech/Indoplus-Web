'use client'
import { contact1 } from '@/assest/Contact'
import Commonbreadcrumb from '@/Components/Commoncomponent/Commonbreadcrumb'
import MainLayouts from '@/Layouts/MainLayout'
import React, { ChangeEvent, FormEvent,useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Twitter, Facebook, Linkedin, Github } from 'lucide-react'

const data = {
  cont1: 'Contact Us',
  cont2: 'We would love to hear from you!'
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = ( e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <MainLayouts title="Contact Us | NexTech">
      <Commonbreadcrumb data={data} img={contact1.src} />

      {/* Section 1: Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-black via-gray-900 to-black text-center text-white relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold"
        >
          Let’s <span className="text-red-500">Connect</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg"
        >
          Reach out to us for project discussions, collaborations, or just to say hi.
        </motion.p>
      </section>

      {/* Section 2: Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 rounded-xl p-8 shadow"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-red-500" />
                <p>Arya Surya Enclave, Plot No- K5/475, Fourth Floor, Kalinga Vihar, Patrapada, Bhubaneswar, Dist- Khurdha, Odisha, India-751019.</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-red-500" />
                <p>+91 9583333030</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-red-500" />
                <p>info@indoplus.net</p>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[Twitter, Facebook, Linkedin, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow hover:bg-red-500 hover:text-white transition"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Stats */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: '500+', text: 'Happy Clients' },
            { number: '1200+', text: 'Projects Delivered' },
            { number: '15+', text: 'Countries Served' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-white/10 rounded-lg shadow-lg"
            >
              <h3 className="text-4xl font-bold">{stat.number}</h3>
              <p className="mt-2">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Find Us</h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="py-20 bg-black text-center text-white">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Work With Us?
        </motion.h2>
        <p className="text-gray-400 mb-8">
          Let’s build something amazing together. Reach out today.
        </p>
        <a
          href="#"
          className="px-10 py-4 bg-red-500 rounded-full font-semibold hover:bg-red-600 transition"
        >
          Get Started
        </a>
      </section>
    </MainLayouts>
  )
}
