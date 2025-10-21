'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { LogoArr } from '@/Utils/index'
import { port15 } from '@/assest/Portfolio'
import { StaticImageData } from 'next/image'

// Define interface
interface Logo {
  id: number
  img: StaticImageData | string
}

const LogoGrid = () => {
  const getPyramidRows = (logos: Logo[]) => {
    const rows: Logo[][] = []
    let count = 1
    let index = 0

    while (index < logos.length) {
      rows.push(logos.slice(index, index + count))
      index += count
      count++
    }
    return rows
  }

  const pyramidRows = Array.isArray(LogoArr) ? getPyramidRows(LogoArr) : []

  return (
    <section
      className="relative min-h-screen py-20 px-6 bg-black text-white overflow-hidden"
      style={{ backgroundImage: `url(${port15.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section 1: Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-red-500 uppercase tracking-widest font-semibold">Our Partners</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Trusted by <span className="text-red-500">Top Brands</span></h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We collaborate with industry-leading companies to deliver innovative solutions and top-class services.
          </p>
        </motion.div>

        {/* Section 2: Pyramid Logo Showcase */}
        <div className="space-y-8">
          {pyramidRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: rowIndex * 0.2 }}
              className="flex justify-center gap-10"
            >
              {row.map((logo) => (
                <motion.div
                  key={logo.id}
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  className="p-4 bg-gray-900/60 rounded-xl shadow-lg hover:shadow-red-500/40 transition-all"
                >
                  <img
                    src={typeof logo.img === 'string' ? logo.img : logo.img.src}
                    alt={`Logo ${logo.id}`}
                    className="w-24 h-24 object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Section 3: Animated Stat Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-28">
          {[
            { number: '50+', text: 'Global Partners' },
            { number: '100+', text: 'Projects Completed' },
            { number: '10+', text: 'Years of Experience' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-900/70 rounded-2xl p-10 text-center shadow-lg hover:shadow-red-500/30 transition"
            >
              <h3 className="text-5xl font-bold text-red-500 mb-4">{stat.number}</h3>
              <p className="text-gray-300">{stat.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Section 4: Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-28"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Want to Partner With Us?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Join hands with us to create impactful solutions and be part of our growing network of successful partnerships.
          </p>
          <button className="px-8 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-transform hover:-translate-y-1">
            Become a Partner
          </button>
        </motion.div>
      </div>

      {/* Background floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"
      />
    </section>
  )
}

export default LogoGrid
