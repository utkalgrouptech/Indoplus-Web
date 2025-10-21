// pages/index.js
import MainLayouts from '@/Layouts/MainLayout'
import { ArrowRight, Play, Code, Zap, Shield, Monitor, Smartphone, Palette, BarChart3, Search, Users, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { ppJigyanshu, ppShubhashree, team2 } from '@/assest/Team';

export default function Home() {


  const team = [
    {
      name: "Suresh Mishra",
      role: "CEO & Founder",
      image: team2.src,
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Aarjya Bharadwaz",
      role: "CTO",
      image: "/team/aarjya.jpg",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Jigyanshu Nayak",
      role: "Lead Developer",
      image: ppJigyanshu.src,
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Shubhashree Khillar",
      role: "Security Specialist",
      image: ppShubhashree.src,
      twitter: "#",
      linkedin: "#",
    },
  ];

  const testimonials = [
    {
      name: "John Carter",
      role: "CEO, TechCorp",
      initial: "J",
      feedback: "ExTech transformed our IT infrastructure with their cloud solutions. Our operations are now more efficient, reliable, and secure.",
      rating: 5,
    },
    {
      name: "Sophia Martinez",
      role: "Marketing Head, Brandify",
      initial: "S",
      feedback: "Their team designed a stunning website for us that boosted our engagement by 60%. The UI/UX exceeded our expectations!",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      role: "Founder, FinSolve",
      initial: "A",
      feedback: "With their custom software, we streamlined our finance operations. The support team is amazing and always available!",
      rating: 4,
    },
  ];

  const services = [
    {
      title: 'Mobile App Development',
      desc: 'Innovative and high-performing mobile applications for Android and iOS',
      icon: <Smartphone className="w-10 h-10" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Web Design & Development',
      desc: 'Modern, responsive websites built with cutting-edge technologies',
      icon: <Monitor className="w-10 h-10" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Custom Software Development',
      desc: 'Tailored software solutions to meet your unique business needs',
      icon: <Code className="w-10 h-10" />,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'UI/UX Design',
      desc: 'User-friendly, visually stunning designs for a seamless experience',
      icon: <Palette className="w-10 h-10" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Digital Marketing',
      desc: 'Boost your online presence with data-driven marketing strategies',
      icon: <BarChart3 className="w-10 h-10" />,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      title: 'SEO',
      desc: 'Optimize your website to rank higher and attract more traffic',
      icon: <Search className="w-10 h-10" />,
      color: 'from-indigo-500 to-blue-500'
    },
  ];

  return (
    <MainLayouts>
      <div className="min-h-screen bg-black">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500" />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-sm tracking-wide backdrop-blur-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Zap className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-blue-400 font-medium">Leading Tech Innovation</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  className="text-5xl md:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-red-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Transform
                  </span>
                  <br />
                  <span className="text-white">Your Digital Future</span>
                </motion.h1>

                {/* Sub Text */}
                <motion.p
                  className="text-xl text-gray-300 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  We craft cutting-edge solutions that ignite innovation, maximize efficiency,
                  and accelerate growth — empowering your business in the digital era.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-5"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button className="group relative px-8 py-4 font-medium rounded-xl overflow-hidden bg-gradient-to-r from-red-500 to-cyan-500 text-white shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105">
                    <span className="relative z-10 flex items-center">
                      Get Started Today
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  <button className="px-8 py-4 flex items-center rounded-xl border border-gray-600 bg-black/40 backdrop-blur-md text-gray-200 hover:bg-gray-800/40 transition-all duration-300">
                    <Play className="mr-2 h-5 w-5 text-blue-400" />
                    Watch Demo
                  </button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-3 gap-8 pt-10"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {[
                    { num: "500+", label: "Projects Delivered" },
                    { num: "98%", label: "Client Satisfaction" },
                    { num: "24/7", label: "Support Available" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-blue-400">{stat.num}</div>
                      <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Content - Tech Illustration */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="relative w-full h-[500px]">
                  {/* Central Tech Sphere */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                    <div className="w-40 h-40 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Code className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Orbiting Elements */}
                  {[
                    { icon: <Shield className="w-6 h-6 text-white" />, label: "Secure", delay: 0 },
                    { icon: <Zap className="w-6 h-6 text-white" />, label: "Fast", delay: 0.5 },
                    { icon: <Code className="w-6 h-6 text-white" />, label: "Scalable", delay: 1 },
                    { icon: <Monitor className="w-6 h-6 text-white" />, label: "Modern", delay: 1.5 },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: item.delay
                      }}
                    >
                      <motion.div
                        className="w-64 h-64 rounded-full border border-gray-700/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        animate={{ rotate: [0, -360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="bg-red-600 p-3 rounded-xl shadow-lg">
                            {item.icon}
                          </div>
                          <div className="text-white text-sm font-medium mt-2 text-center">{item.label}</div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative py-24 bg-gradient-to-br from-red-900 to-black overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                Comprehensive digital solutions to transform your business and drive growth in the modern landscape
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Icon */}
                  <div className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${service.color} w-16 h-16 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.desc}</p>

                  {/* Learn More */}
                  <div className="flex items-center text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 bg-gradient-to-br from-red-900 to-black ">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">Work</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                Discover how we&apos;ve helped businesses transform their operations with cutting-edge technology
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  client: "Retail Startup",
                  desc: "Full-stack web app with payment gateway and inventory management",
                  category: "Web Development • E-Commerce",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Mobile Banking App",
                  client: "Finance Corp",
                  desc: "Secure mobile app for banking, with biometric authentication",
                  category: "Mobile App • Security",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "Cloud Migration",
                  client: "Enterprise Inc.",
                  desc: "Migrated on-prem systems to scalable AWS infrastructure",
                  category: "Cloud • DevOps",
                  color: "from-green-500 to-teal-500",
                },
                {
                  title: "Healthcare Dashboard",
                  client: "HealthTech",
                  desc: "Custom analytics dashboard for patient data visualization",
                  category: "Data Analytics • UI/UX",
                  color: "from-orange-500 to-red-500",
                },
                {
                  title: "Corporate Website",
                  client: "UtkalOne Pvt. Ltd.",
                  desc: "Responsive corporate site with modern UI and animations",
                  category: "Web Design • Branding",
                  color: "from-yellow-500 to-amber-500",
                },
                {
                  title: "Digital Marketing Campaign",
                  client: "Startup Hub",
                  desc: "SEO + social media campaigns that boosted traffic by 250%",
                  category: "Marketing • SEO",
                  color: "from-indigo-500 to-blue-500",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Project Image/Color */}
                  <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-white text-2xl font-bold text-center p-4">{project.title}</div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                      <h3 className="text-white text-xl font-bold mb-2 text-center">{project.client}</h3>
                      <p className="text-gray-300 text-center mb-4">{project.desc}</p>
                      <p className="text-blue-400 text-sm italic text-center">{project.category}</p>
                      <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        View Case Study
                      </button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.desc}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-400 text-sm">{project.category}</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-gradient-to-br from-red-900 to-black ">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Client <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Testimonials</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                Hear what our clients have to say about our services and partnership
              </p>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-600"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">
                    &quot;{testimonial.feedback}&quot;
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.initial}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{testimonial.name}</h4>
                      <p className="text-blue-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 bg-gradient-to-br from-red-900 to-black ">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                Meet the talented professionals behind our innovative solutions
              </p>
            </motion.div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="group text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Profile Image */}
                  <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-blue-500 transition-colors duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Social Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex space-x-3">
                        <a
                          href={member.twitter}
                          className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a
                          href={member.linkedin}
                          className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-red-900 to-black">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Get in <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                Ready to transform your business? Contact us today for a free consultation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors duration-300 text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors duration-300 text-white"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors duration-300 text-white"
                      placeholder="Project Discussion"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Your Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors duration-300 text-white resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <p className="text-gray-400 mb-8">
                    We&apos;re here to help and answer any questions you might have. We look forward to hearing from you.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Address</h4>
                      <p className="text-gray-400">
                        Arya Surya Enclave, Plot No- K5/475, Khata No 95/937, Fourth Floor, 
                        Mouza-Subudhi Pur, Kalinga Vihar, Patrapada, Bhuabneswar, 
                        Dist- Khurda, Odisha, India-751019.
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Phone</h4>
                      <p className="text-gray-400">+91 9583333030</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <p className="text-gray-400">info@extech.com</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-gray-700">
                  <h4 className="text-white font-medium mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[
                      { name: 'Twitter', icon: 'twitter', color: 'hover:bg-blue-400' },
                      { name: 'Facebook', icon: 'facebook', color: 'hover:bg-blue-600' },
                      { name: 'LinkedIn', icon: 'linkedin', color: 'hover:bg-blue-700' },
                      { name: 'GitHub', icon: 'github', color: 'hover:bg-gray-700' },
                    ].map((platform) => (
                      <a
                        key={platform.name}
                        href="#"
                        className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 ${platform.color} transition-colors duration-300`}
                      >
                        <span className="sr-only">{platform.name}</span>
                        <Users className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <style jsx global>{`
          .bg-grid-pattern {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
          }
        `}</style>
      </div>
    </MainLayouts>
  );
}