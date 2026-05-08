import {
  Car,
  Wallet,
  Search,
  CreditCard,
  ShieldCheck,
  Zap,
  Globe,
  Lock,
  FileCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
  Download,
  Plane
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { VideoBackground } from './components/VideoBackground';
import { NeoLogo } from './components/NeoLogo';
import mockupImage from "figma:asset/01d7acf3f01fb29c7298d5fcfecae6e1ccd52e2f.png";

export default function App() {
  return (
    <div className="bg-[#f8faff] min-h-screen font-['Inter_Tight',sans-serif]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <VideoBackground />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-32 text-center">
          <div className="mb-6 sm:mb-8 inline-block">
            <div className="bg-gradient-to-b from-[#b5e488] to-[#80ca2f] rounded-full p-3 sm:p-4">
              <NeoLogo className="w-8 h-8 sm:w-12 sm:h-12" />
            </div>
          </div>
          
          <h1 className="font-bold text-[36px] sm:text-[48px] md:text-[64px] leading-[1.1] text-white mb-4 sm:mb-6 max-w-4xl mx-auto px-2">
            Travel smarter.
            <br />
            <span className="text-[#88d756]">All your trips</span> in one app.
          </h1>
          
          <p className="font-medium text-[16px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[32px] text-[#f2f5f7] mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Book flights, arrange transfers and manage your payments — seamlessly inside NeoTravel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-gradient-to-b from-[#b5e488] to-[#80ca2f] hover:from-[#88d756] hover:to-[#88d756] text-[#151827] font-semibold text-[16px] sm:text-[18px] px-6 sm:px-8 py-3 sm:py-4 rounded-[12px] flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl">
              <Download className="w-5 h-5" />
              Download Now
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold text-[16px] sm:text-[18px] px-6 sm:px-8 py-3 sm:py-4 rounded-[12px] flex items-center justify-center gap-2 transition-all">
              <Search className="w-5 h-5" />
              Explore Features
            </button>
          </div>

          {/* App Mockup */}
          <div className="mt-12 sm:mt-16 px-4">
            <img 
              src={mockupImage} 
              alt="NeoTravel App Interface"
              className="max-w-xs sm:max-w-md mx-auto rounded-[16px] sm:rounded-[24px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Problem → Solution Block */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <p className="font-semibold text-[14px] sm:text-[16px] text-[#88d756] mb-3 sm:mb-4">THE PROBLEM</p>
              <h2 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] text-[#151827] mb-4 sm:mb-6">
                Juggling multiple apps ruins your travel vibe
              </h2>
              <p className="font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] text-[#434b68] mb-6 sm:mb-8">
                Different apps for flights, hotels, and transfers. Currency exchanges, lost receipts, hidden fees — travel today is chaotic.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#151827] to-[#11181c] rounded-[24px] p-6 sm:p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-b from-[#b5e488]/20 to-[#80ca2f]/20 rounded-full blur-3xl" />
                <Plane className="w-8 h-8 sm:w-12 sm:h-12 text-[#3399ff] mb-2 sm:mb-4 mx-auto" />
                <h3 className="font-bold text-[20px] sm:text-[24px] text-white mb-2 sm:mb-3">Flights</h3>
                <p className="font-regular text-[14px] sm:text-[16px] text-[#bdc5d8]">Book direct & save</p>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 bg-[#f8faff] rounded-[24px] p-6 sm:p-8 md:p-12">
            <p className="font-semibold text-[14px] sm:text-[16px] text-[#88d756] mb-3 sm:mb-4 text-center">THE SOLUTION</p>
            <h2 className="font-bold text-[28px] sm:text-[36px] md:text-[40px] leading-[1.2] text-[#151827] mb-4 sm:mb-6 text-center max-w-3xl mx-auto">
              One seamless platform for <span className="text-[#88d756]">all your travel needs</span>
            </h2>
            <p className="font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] text-[#434b68] text-center max-w-2xl mx-auto">
              NeoTravel combines flights, accommodations, transfers, and payments in a single, intelligent app — no more switching, no more hassle.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#151827] via-[#151827] to-[#11181c]">
          <div className="absolute inset-0 opacity-20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1770321695582-db279b93fb9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              alt="Abstract background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#151827]/80 via-[#151827]/60 to-[#151827]/80"></div>

          {/* Floating orbs */}
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-[#88d756]/20 rounded-full blur-[100px]"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#3399ff]/15 rounded-full blur-[120px]"
            animate={{
              x: [0, -30, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-semibold text-[14px] sm:text-[16px] text-[#88d756] mb-3 sm:mb-4 text-center">CORE FEATURES</p>
            <h2 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] text-white mb-12 sm:mb-16 text-center">
              Everything you need, <br className="hidden sm:block" />all in one place
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Plane className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Smart Flight Booking",
                description: "Compare prices, get alerts, and book the best deals instantly.",
                gradient: "from-[#88d756] to-[#5fb82d]"
              },
              {
                icon: <Car className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Ground Transfers",
                description: "Pre-book taxis, shuttles and car rentals right from the app.",
                gradient: "from-[#3399ff] to-[#0066cc]"
              },
              {
                icon: <Wallet className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Unified Wallet",
                description: "One balance for everything — flights, hotels, transfers, all covered.",
                gradient: "from-[#88d756] to-[#5fb82d]"
              },
              {
                icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Crypto Card",
                description: "Spend crypto anywhere with our integrated payment card.",
                gradient: "from-[#3399ff] to-[#0066cc]"
              },
              {
                icon: <FileCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Digital Receipts",
                description: "Auto-saved receipts and expenses for easy tracking.",
                gradient: "from-[#88d756] to-[#5fb82d]"
              },
              {
                icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Global Coverage",
                description: "Book services worldwide, all from one convenient app.",
                gradient: "from-[#3399ff] to-[#0066cc]"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card background with gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-[20px] blur-sm group-hover:blur-md transition-all"></div>

                <div className="relative bg-gradient-to-br from-[#1a2035]/90 to-[#151827]/90 backdrop-blur-xl border border-white/10 rounded-[20px] p-6 sm:p-8 overflow-hidden">
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  {/* Animated icon container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`relative bg-gradient-to-br ${feature.gradient} rounded-[16px] p-4 sm:p-5 inline-block mb-4 sm:mb-6 shadow-lg`}
                  >
                    <div className="text-white relative z-10">
                      {feature.icon}
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} blur-xl opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                  </motion.div>

                  <h3 className="font-bold text-[18px] sm:text-[20px] md:text-[22px] text-white mb-2 sm:mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="font-regular text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#bdc5d8] relative z-10">
                    {feature.description}
                  </p>

                  {/* Shine effect on hover */}
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="font-semibold text-[14px] sm:text-[16px] text-[#88d756] mb-3 sm:mb-4 text-center">HOW IT WORKS</p>
          <h2 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] text-[#151827] mb-12 sm:mb-16 text-center">
            Your trip in <span className="text-[#88d756]">3 simple steps</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                step: "01",
                title: "Search & Compare",
                description: "Find the best flights, hotels, and transfers in seconds."
              },
              {
                step: "02",
                title: "Book & Pay",
                description: "Complete your booking with a single tap using your NeoTravel wallet."
              },
              {
                step: "03",
                title: "Travel & Enjoy",
                description: "Everything you need is in one app — boarding passes, bookings, receipts."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-b from-[#b5e488] to-[#80ca2f] rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="font-bold text-[24px] sm:text-[28px] md:text-[32px] text-[#151827]">{item.step}</span>
                </div>
                <h3 className="font-bold text-[20px] sm:text-[22px] md:text-[24px] text-[#151827] mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="font-regular text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] text-[#434b68]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wallet/Payments Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#f8faff] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <p className="font-semibold text-[14px] sm:text-[16px] text-[#88d756] mb-3 sm:mb-4">WALLET & PAYMENTS</p>
              <h2 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] text-[#151827] mb-4 sm:mb-6">
                One balance for <br />everything
              </h2>
              <p className="font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] text-[#434b68] mb-6 sm:mb-8">
                Load your NeoTravel wallet once and pay for flights, transfers, hotels — even crypto card purchases — without switching apps.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: <Wallet className="w-5 h-5 text-[#88d756]" />, text: "Instant top-ups with crypto or fiat" },
                  { icon: <CreditCard className="w-5 h-5 text-[#88d756]" />, text: "Spend anywhere with NeoCard" },
                  { icon: <CheckCircle2 className="w-5 h-5 text-[#88d756]" />, text: "Zero hidden fees, transparent rates" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-gradient-to-b from-[#b5e488]/20 to-[#80ca2f]/20 rounded-full p-2">
                      {item.icon}
                    </div>
                    <p className="font-medium text-[14px] sm:text-[16px] md:text-[18px] text-[#151827]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#151827] to-[#11181c] rounded-[24px] p-6 sm:p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-b from-[#b5e488]/20 to-[#80ca2f]/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <p className="font-medium text-[14px] sm:text-[16px] text-[#88d756] mb-2">Your Balance</p>
                <h3 className="font-bold text-[36px] sm:text-[44px] md:text-[52px] text-white mb-6 sm:mb-8">$45,555.00</h3>
                <div className="flex gap-3 sm:gap-4">
                  <button className="flex-1 bg-gradient-to-b from-[#b5e488] to-[#80ca2f] hover:from-[#88d756] hover:to-[#88d756] text-[#151827] font-semibold text-[14px] sm:text-[16px] py-3 rounded-[12px] transition-all">
                    Add Funds
                  </button>
                  <button className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold text-[14px] sm:text-[16px] py-3 rounded-[12px] transition-all">
                    Send Money
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Block */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-[#88d756]/5 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-[#3399ff]/5 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-semibold text-[14px] sm:text-[16px] text-[#88d756] mb-3 sm:mb-4">SECURITY</p>
            <h2 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] text-[#151827] mb-4 sm:mb-6">
              Your safety is our priority
            </h2>
            <p className="font-medium text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] text-[#434b68] mb-12 sm:mb-16 max-w-3xl mx-auto">
              Bank-level encryption, two-factor authentication, and blockchain security for your crypto assets.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Encrypted Data",
                description: "Military-grade encryption protects all your information."
              },
              {
                icon: <Lock className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "2FA Protection",
                description: "Extra layer of security for every transaction."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Verified Providers",
                description: "We partner only with trusted, licensed services."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-[#f8faff] rounded-[20px] p-6 sm:p-8 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#88d756]/5 to-[#3399ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated icon container */}
                <motion.div
                  className="relative bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-2xl transition-shadow"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Pulsing ring effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#88d756]/20"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  />
                  <div className="text-[#88d756] relative z-10">
                    {item.icon}
                  </div>
                </motion.div>

                <h3 className="font-bold text-[18px] sm:text-[20px] md:text-[22px] text-[#151827] mb-2 relative z-10">
                  {item.title}
                </h3>
                <p className="font-regular text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#434b68] relative z-10">
                  {item.description}
                </p>

                {/* Shine effect */}
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NeoTravel */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
        {/* Animated Background with Images */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#151827] via-[#151827] to-[#11181c]">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-1/2 h-1/2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659882751335-43e664461e6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Happy travelers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681895395517-d6f5e997e980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Traveler exploring"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#151827]/95 via-[#151827]/90 to-[#151827]/95"></div>

          {/* Animated orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#88d756]/20 rounded-full blur-[120px]"
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-semibold text-[14px] sm:text-[16px] text-[#88d756] mb-3 sm:mb-4 text-center">WHY NEOTRAVEL</p>
            <h2 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] text-white mb-12 sm:mb-16 text-center">
              Built for modern travelers
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Lightning Fast",
                description: "Book in seconds, not minutes. Our smart engine finds the best deals instantly.",
                image: "https://images.unsplash.com/photo-1763994679849-de757e723af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "24/7 Support",
                description: "Our global team is always ready to help, wherever you are.",
                image: "https://images.unsplash.com/photo-1681895395580-b1f57c7c8ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: "No Hidden Fees",
                description: "What you see is what you pay. Complete transparency, always.",
                image: "https://images.unsplash.com/photo-1717068342916-f45ead71702c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              },
              {
                icon: <ArrowRight className="w-6 h-6" />,
                title: "Easy Cancellations",
                description: "Plans change. Cancel or modify bookings hassle-free.",
                image: "https://images.unsplash.com/photo-1659882751335-43e664461e6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-[24px]"
              >
                {/* Card with image background */}
                <div className="relative h-full bg-gradient-to-br from-[#1a2035]/95 to-[#151827]/95 backdrop-blur-xl border border-white/10 rounded-[24px] overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#88d756]/5 to-[#3399ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="bg-gradient-to-br from-[#88d756] to-[#5fb82d] rounded-[16px] p-4 inline-block mb-4 shadow-lg"
                    >
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </motion.div>

                    <h3 className="font-bold text-[18px] sm:text-[20px] md:text-[22px] text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-regular text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#bdc5d8]">
                      {item.description}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="font-semibold text-[14px] sm:text-[16px] text-[#88d756] mb-3 sm:mb-4 text-center">TESTIMONIALS</p>
          <h2 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] text-[#151827] mb-12 sm:mb-16 text-center">
            Loved by travelers worldwide
          </h2>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Digital Nomad",
                review: "NeoTravel changed how I book trips. Everything in one app — it's brilliant!"
              },
              {
                name: "Marcus Rodriguez",
                role: "Business Traveler",
                review: "The wallet feature saves me so much time. No more juggling multiple payment methods."
              },
              {
                name: "Elena Volkov",
                role: "Adventure Seeker",
                review: "Best travel app I've used. Simple, fast, and the crypto integration is next-level."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#f8faff] rounded-[16px] p-6 sm:p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-[#88d756]">⭐</div>
                  ))}
                </div>
                <p className="font-regular text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#434b68] mb-6">
                  "{testimonial.review}"
                </p>
                <div>
                  <p className="font-bold text-[16px] sm:text-[18px] text-[#151827]">{testimonial.name}</p>
                  <p className="font-regular text-[12px] sm:text-[14px] text-[#8f95a2]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-[#151827] via-[#151827] to-[#11181c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-gradient-to-b from-[#b5e488] to-[#80ca2f] rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-bold text-[36px] sm:text-[48px] md:text-[56px] leading-[1.2] text-white mb-4 sm:mb-6 px-2">
            Ready to simplify <br className="hidden sm:block" />your travel?
          </h2>
          <p className="font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[32px] text-[#bdc5d8] mb-8 sm:mb-12 px-2">
            Download NeoTravel today and experience smarter journeys.
          </p>
          <button className="bg-gradient-to-b from-[#b5e488] to-[#80ca2f] hover:from-[#88d756] hover:to-[#88d756] text-[#151827] font-bold text-[18px] sm:text-[20px] px-8 sm:px-12 py-4 sm:py-5 rounded-[12px] inline-flex items-center gap-2 sm:gap-3 mx-auto transition-all shadow-2xl hover:shadow-[#88d756]/50">
            <Download className="w-5 h-5 sm:w-6 sm:h-6" />
            Download Now
          </button>

          {/* App Store badges simulation */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mt-8 sm:mt-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[12px] px-4 sm:px-6 py-2 sm:py-3">
              <p className="font-semibold text-[12px] sm:text-[14px] text-white">Available on iOS & Android</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-[#11181c]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-gradient-to-b from-[#b5e488] to-[#80ca2f] rounded-full p-2">
                <NeoLogo className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="font-bold text-[20px] sm:text-[24px] text-white">NeoTravel</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a
                href="https://neotravel.gitbook.io/neotravel-docs/legal/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[12px] sm:text-[14px] text-[#8f95a2] hover:text-[#88d756] transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="https://neotravel.gitbook.io/neotravel-docs/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[12px] sm:text-[14px] text-[#8f95a2] hover:text-[#88d756] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://neotravel.gitbook.io/neotravel-docs/legal/refund-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[12px] sm:text-[14px] text-[#8f95a2] hover:text-[#88d756] transition-colors"
              >
                Refund Policy
              </a>
            </div>

            <p className="font-regular text-[12px] sm:text-[14px] text-[#8f95a2] text-center">
              © 2026 NeoTravel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
