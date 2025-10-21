import { about1 } from "@/assest/About";
import Commonbreadcrumb from "@/Components/Commoncomponent/Commonbreadcrumb";
import MainLayouts from "@/Layouts/MainLayout";
import Link from "next/link";
import React from "react";

const data = {
  cont1: "About Us",
  cont2: "Discover the essence of IndoPlus and our driving force",
};

export default function About() {
  return (
    <MainLayouts title="About Us | IndoPlus">
      {/* Breadcrumb Banner */}
      <Commonbreadcrumb data={data} img={about1.src} />

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
              About IndoPlus
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">Digital Excellence</span>
            </h2>
            <p className="text-lg text-gray-600">
              IndoPlus is a collective of passionate technology innovators dedicated to delivering transformative digital solutions. 
              We empower businesses with cutting-edge tools that drive operational efficiency, scalability, and sustainable growth.
            </p>
            <p className="text-lg text-gray-600">
              From emerging startups to established enterprises, our expertise encompasses full-cycle software development, 
              cloud-native architectures, and comprehensive digital transformation strategies.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-red-700">50+</h3>
                <p className="text-sm text-gray-500">Projects Delivered</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-red-700">15+</h3>
                <p className="text-sm text-gray-500">Expert Team Members</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-red-700">5+</h3>
                <p className="text-sm text-gray-500">Years of Excellence</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={about1.src}
                alt="About IndoPlus"
                className="w-full h-[450px] object-cover transform hover:scale-105 transition duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-red-600 to-black rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-red-400 to-red-800 rounded-2xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
              Our Foundation
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">Principles</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The guiding philosophy that shapes our approach and defines our culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mission",
                desc: "To empower businesses with transformative technology that accelerates innovation and creates sustainable value.",
                icon: (
                  <div className="p-4 bg-red-100 rounded-2xl inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                ),
                color: "from-red-600 to-black"
              },
              {
                title: "Vision",
                desc: "To be Indonesia's foremost digital innovation partner, making cutting-edge technology accessible and impactful for all businesses.",
                icon: (
                  <div className="p-4 bg-red-100 rounded-2xl inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                ),
                color: "from-red-500 to-red-900"
              },
              {
                title: "Values",
                desc: "Innovation with purpose, collaborative excellence, integrity in action, and relentless commitment to client success.",
                icon: (
                  <div className="p-4 bg-red-100 rounded-2xl inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                ),
                color: "from-red-700 to-black"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent group-hover:from-red-600 group-hover:to-black">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                <div className={`h-1 w-0 group-hover:w-20 bg-gradient-to-r ${item.color} transition-all duration-500 mt-6 rounded-full`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
              Our Evolution
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              IndoPlus <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">Journey</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Milestones that mark our growth and commitment to excellence
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-black"></div>
            {[
              {
                year: "2019",
                desc: "IndoPlus was founded with a vision to revolutionize Indonesia's digital landscape",
                side: "left"
              },
              {
                year: "2020",
                desc: "Expanded our service offerings to include enterprise cloud solutions and digital transformation",
                side: "right"
              },
              {
                year: "2022",
                desc: "Recognized as a leading digital innovation partner with a growing portfolio of successful projects",
                side: "left"
              },
              {
                year: "2024",
                desc: "Serving diverse clients across industries with cutting-edge, impactful technology solutions",
                side: "right"
              },
            ].map((item, index) => (
              <div key={index} className={`flex w-full mb-12 ${item.side === "left" ? "justify-start" : "justify-end"}`}>
                <div className={`w-5/12 ${item.side === "left" ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="relative">
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-red-600 to-black rounded-full border-4 border-white shadow-lg"
                      style={item.side === "left" ? {right: "-52px"} : {left: "-52px"}}></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.year}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
              Our Team
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">Collective</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The visionary minds steering IndoPlus toward innovation and excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Suresh Mishra",
                role: "CEO & Founder",
                bio: "Technology visionary with 12+ years of industry experience and passion for digital innovation.",
                initials: "SM"
              },
              {
                name: "Aarjys Bharadhwaj",
                role: "CTO",
                bio: "Software architecture expert with deep expertise in scalable cloud-native solutions.",
                initials: "AB"
              },
              {
                name: "Jigyanshu Nayak",
                role: "Lead Developer",
                bio: "Full-stack developer with exceptional talent for creating elegant, efficient code.",
                initials: "JN"
              },
              {
                name: "Shubhashree Khillar",
                role: "Security Specialist",
                bio: "Cybersecurity expert committed to building robust, impenetrable digital fortresses.",
                initials: "SK"
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="h-4 bg-gradient-to-r from-red-600 to-black"></div>
                <div className="p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-red-600 to-black flex items-center justify-center text-white text-xl font-bold">
                      {member.initials}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                  <div className="flex justify-center space-x-3 mt-5 pt-4 border-t border-gray-100">
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
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
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Co-create the Digital Future</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
            Partner with IndoPlus to harness transformative technology that propels your business forward.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-red-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Connect With Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </MainLayouts>
  );
}