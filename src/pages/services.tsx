"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { app, cloud, social, uiux, web } from "@/assest/Home";
import { Service8 } from "@/assest/Services";
import Commonbreadcrumb from "@/Components/Commoncomponent/Commonbreadcrumb";
import MainLayouts from "@/Layouts/MainLayout";

const data = {
  cont1: "Service Details",
  cont2: "Discover our expertise in comprehensive IT solutions",
};

export const services = [
  {
    id: '01',
    title: 'WEB DEVELOPMENT',
    description:
      'Web development involves creating websites and web applications, combining coding, design, and server management. It encompasses front-end (user interface) and back-end (server-side) development to deliver seamless online experiences.',
    image: web,
    features: [
      'Frontend Development',
      'Backend Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
    ],
  },
  {
    id: '02',
    title: 'MOBILE APP DEVELOPEMENT',
    description:
      'Mobile app development creates software for smartphones and tablets, involving design, coding, and testing. It includes building apps for iOS and Android, focusing on user experience, functionality, and performance.',
    image: app,
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Apps',
      'App Maintenance & Support',
    ],
  },
  {
    id: '03',
    title: 'Cloud Computing',
    description:
      'Transform your business with scalable, secure, and efficient cloud solutions. Our cloud computing services enable digital transformation, enhance operational efficiency, and provide robust infrastructure for your growing needs.',
    image: cloud,
    features: [
      'Cloud Migration',
      'Infrastructure Setup',
      'Disaster Recovery',
      'Scalable Architecture',
    ],
  },
  {
    id: '04',
    title: 'SOCIAL MEDIA MARKETING',
    description:
      "In today's rapidly evolving digital landscape, social media marketing helps businesses connect with audiences, build brand awareness, and drive engagement across platforms.",
    image: social,
    features: [
      'Content Strategy',
      'Campaign Management',
      'Targeted Advertising',
      'Analytics & Reporting',
    ],
  },
  {
    id: '05',
    title: 'CLOUD SERVER',
    description:
      'A cloud server provides virtualized computing resources over the internet, offering scalable storage and processing power. It supports flexible, cost-effective solutions for data management, application hosting, and remote access.',
    image: cloud,
    features: [
      'Virtualized Computing',
      'Scalable Storage',
      'Secure Hosting',
      'Remote Access',
    ],
  },
  {
    id: '06',
    title: 'UI/UX DESIGNER',
    description:
      'UI/UX development focuses on designing user interfaces and experiences for software and websites. It involves creating intuitive layouts and interactions to enhance usability, accessibility, and overall user satisfaction.',
    image: uiux,
    features: [
      'Wireframing & Prototyping',
      'User Research',
      'Responsive Design',
      'Interactive Prototypes',
    ],
  },
];


export default function Services() {
  const [activeService, setActiveService] = useState("01");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <MainLayouts title="Services | IndoPlus">
      {/* Breadcrumb */}
      <Commonbreadcrumb data={data} img={Service8.src} />

      {/* Interactive Services Showcase */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
              Our Expertise
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of specialized services designed to address your unique business challenges
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {services.map((service, index) => {
              const isActive = service.id === activeService;

              return (
                <div
                  key={service.id}
                  className={`relative cursor-pointer border rounded-2xl overflow-hidden group
                    ${
                      isActive 
                        ? "lg:w-[40%] bg-gradient-to-b from-red-600 to-black text-white shadow-2xl" 
                        : "lg:w-[15%] bg-white text-gray-700 shadow-md hover:shadow-lg"
                    }
                    transition-all duration-700 ease-in-out`}
                  onClick={() => setActiveService(service.id)}
                  onMouseEnter={() => setActiveService(service.id)}
                >
                  <div className="p-8 relative h-full flex flex-col">
                    <div
                      className={`flex items-center transition-all duration-500 ${
                        !isActive && "lg:mt-32"
                      }`}
                    >
                      <h3
                        className={`font-semibold whitespace-nowrap transition-transform duration-500
                          ${
                            !isActive &&
                            "lg:rotate-[-90deg] lg:origin-left lg:translate-y-12"
                          }
                        `}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Expandable content */}
                    <div
                      className={`transition-all duration-700 ease-in-out flex-grow flex flex-col
                        ${isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                        overflow-hidden`}
                    >
                      <div className="my-6">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={300}
                          height={200}
                          className="rounded-xl mb-6 w-full h-48 object-cover transform group-hover:scale-105 transition duration-700"
                        />
                        <p className="mb-6">
                          {service.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-3 mb-8">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center">
                              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <button className={`flex items-center gap-2 transition-all hover:gap-3
                          ${isActive ? "text-white" : "text-red-600"}`}>
                          Explore Service
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={`absolute bottom-8 left-8 text-6xl font-bold 
                    ${isActive ? "text-white/20" : "text-gray-200"}`}>
                    {service.id}
                  </div>
                  
                  {/* Hover effect border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 pointer-events-none
                    ${isActive ? "border-white/30" : "border-transparent group-hover:border-red-200"}`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
              Our Advantage
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">Choose IndoPlus</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Cutting-edge Technology",
                desc: "We leverage the latest tools and frameworks to build scalable, future-proof solutions.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Client-Centric Approach",
                desc: "We build strong partnerships through transparent communication and collaborative processes.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Proven Results",
                desc: "Our track record of successful projects delivers measurable impact and ROI for businesses.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
                <div className="h-1 w-0 group-hover:w-20 bg-gradient-to-r from-red-600 to-black transition-all duration-500 mt-6 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-red-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-700/30 text-red-300 text-sm font-medium mb-4">
              Our Methodology
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Structured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-800">Approach</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A proven process that ensures quality, efficiency, and exceptional results
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-10 right-10 top-16 h-1 bg-red-700/50 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative">
              {[
                { 
                  step: "01", 
                  title: "Discovery", 
                  desc: "Understanding your goals and challenges",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )
                },
                { 
                  step: "02", 
                  title: "Planning", 
                  desc: "Crafting a tailored strategy",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )
                },
                { 
                  step: "03", 
                  title: "Execution", 
                  desc: "Building and implementing solutions",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                { 
                  step: "04", 
                  title: "Support", 
                  desc: "Continuous improvement and maintenance",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-gradient-to-b from-red-900/60 to-red-900/40 rounded-2xl border border-red-700/30 hover:border-red-500/50 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-700/30 text-red-300 mb-6">
                      {item.icon}
                    </div>
                    <div className="text-xl font-bold text-red-400 mb-2">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-black text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="absolute top-0 left-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" />
            <path d="M0,50 Q50,0 100,50 Q50,100 0,50 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M50,0 Q100,50 50,100 Q0,50 50,0 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
            Let's collaborate to create innovative solutions that drive your business forward.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-red-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Start a Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>
    </MainLayouts>
  );
}