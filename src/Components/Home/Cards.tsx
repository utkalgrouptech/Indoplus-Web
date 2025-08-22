'use client'

import { useState } from 'react'
import { ourservice } from '@/Utils'
import Image from 'next/image'
import { img4 } from '@/assest/Home' 

export default function Services() {
  const [activeService, setActiveService] = useState('01')

  return (
    <div className="min-h-screen py-16 px-4 overflow-hidden sticky">
      {/* Background Pattern with img4 */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${img4.src}), linear-gradient(45deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">    
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-purple-500 font-medium mb-4">OUR SERVICES</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 relative z-20">We Provide Best Services</h1> {/* Added relative z-20 */}
        </div>

        {/* Services Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {ourservice.map((service) => {
            const isActive = service.id === activeService

            return (
<div
  key={service.id}
  className={`relative cursor-pointer border border-gray-800 rounded-lg overflow-hidden
    ${isActive ? 'lg:w-[30%] bg-gray-800/50' : 'lg:w-[10%] bg-transparent'}
    hover:bg-gray-700/50 transition-none duration-300 ease-in-out`}
  onClick={() => setActiveService(service.id)}
  onMouseEnter={() => setActiveService(service.id)}
>
  <div className="p-8 relative">
    <div
      className={`flex items-center transition-none duration-300
        ${!isActive && 'lg:mt-32'}
      `}
    >
      <h3
        className={`text-white text-center font-medium whitespace-nowrap transition-transform duration-500
          ${!isActive && 'lg:rotate-[-90deg] lg:origin-left lg:translate-y-12'}
        `}
      >
        {service.title}
      </h3>
    </div>

    {/* Smoothly open content */}
    <div
      className={`transition-all duration-500 ease-in-out
        ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        overflow-hidden`}
    >
      {service.description && (
        <div>
          <Image
            src={service.image}
            alt={service.title}
            width={250}
            height={250}
            className="rounded-lg mb-6 w-full object-cover"
          />
          <p className="text-gray-300 mb-6 line-clamp-4">
            {service.description}
          </p>
          <button className="text-purple-500 hover:text-purple-400 flex items-center gap-2 transition-colors">
            Read More
          </button>
        </div>
      )}
    </div>
  </div>

  <div className="absolute bottom-8 left-8 text-6xl font-bold text-gray-700/20">
    {service.id}
  </div>
</div>

            )
          })}
        </div>
      </div>
    </div>
  )
}
