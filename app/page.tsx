"use client"

import { useState } from "react"
import {
  Menu,
  X,
  Mail,
  MessageCircle,
  Instagram,
  ArrowRight,
  Check,
  Code2,
  Zap,
  Globe,
  Users,
  Rocket,
  Target,
} from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/8075159094?text=Hi%20CODE%20LEAF%2C%20I%27d%20like%20to%20discuss%20a%20project",
      "_blank",
    )
  }

  const handleInstagram = () => {
    window.open("https://instagram.com/codeleaf.tech", "_blank")
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    section?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 bg-primary backdrop-blur border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image src="/images/cl-cream-logo.png" alt="CODE LEAF Logo" fill className="object-contain" />
            </div>
            <span className="font-extrabold text-xl text-primary-foreground tracking-wide">CODE LEAF</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-primary-foreground/90 hover:text-accent transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-primary-foreground/90 hover:text-accent transition"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-primary-foreground/90 hover:text-accent transition"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-accent text-primary rounded-full hover:bg-accent/90 transition font-semibold"
            >
              Get Started
            </button>
          </div>

          <button className="md:hidden text-primary-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/20 p-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-primary-foreground hover:text-accent transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-left text-primary-foreground hover:text-accent transition"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-left text-primary-foreground hover:text-accent transition"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full px-6 py-2 bg-accent text-primary rounded-full hover:bg-accent/90 transition font-semibold"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      <section className="relative py-12 sm:py-20 px-4 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight text-primary-foreground">
                Technology That Scales <span className="text-accent">With Your Vision.</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 text-pretty leading-relaxed">
                We build custom software, automation tools, and scalable web solutions for clients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 bg-accent text-primary rounded-lg font-semibold hover:bg-accent/90 transition flex items-center justify-center gap-2"
                >
                  Get Your Free Consultation <ArrowRight size={20} />
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition"
                >
                  Chat on WhatsApp
                </button>
              </div>
            </div>
            <div className="flex justify-center items-start">
              <div className="relative w-full max-w-md">
                <div className="w-full flex items-center justify-center">
                  <Image
                    src="/images/chatgpt-20image-20nov-2025-2c-202025-2c-2009-56-12-20am.png"
                    alt="CODE LEAF - Tech That Grows With You"
                    width={400}
                    height={400}
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-32 px-4 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Code2, title: "Web & Mobile Apps", desc: "Custom applications built with modern tech stack" },
              {
                icon: Target,
                title: "Fee & Attendance Systems",
                desc: "Complete solutions for educational institutions",
              },
              { icon: Zap, title: "Business Automation", desc: "Streamline operations with smart automation" },
              { icon: Globe, title: "Custom Web Apps", desc: "Scalable solutions for any business size" },
              {
                icon: Rocket,
                title: "REST APIs & Cloud Deploy",
                desc: "High-performance APIs deployed on reliable infrastructure",
              },
              { icon: Users, title: "Training & Mentoring", desc: "Python, Django & Deployment courses for graduates" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition group cursor-pointer"
              >
                <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground/70">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 sm:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">Why Choose Code Leaf?</h2>
              <div className="space-y-4">
                {[
                  "Expertise in Django, PostgreSQL, MySQL & DRF",
                  "Deployed on Render, Railway, Vercel, cPanel & Linux",
                  "End-to-end: Strategy → Build → QA → Support",
                  "Affordable rates without compromising quality",
                  "Based in Kochi, serving clients worldwide",
                  "Proven track record with institutions & startups",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-8 sm:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-primary-foreground mb-1">50+</h3>
                  <p className="text-primary-foreground/80">Projects Delivered</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary-foreground mb-1">15+</h3>
                  <p className="text-primary-foreground/80">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary-foreground mb-1">5+</h3>
                  <p className="text-primary-foreground/80">Years of Expertise</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary-foreground mb-1">24/7</h3>
                  <p className="text-primary-foreground/80">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 sm:py-32 px-4 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-foreground/70">How we bring your vision to life</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Discovery", desc: "Free consultation to understand your needs" },
              { num: "2", title: "Planning", desc: "Define requirements and project scope" },
              { num: "3", title: "Development", desc: "Build and test with quality assurance" },
              { num: "4", title: "Deployment", desc: "Launch and provide ongoing support" },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-foreground/70 text-sm">{step.desc}</p>
                </div>
                {idx < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-primary/30" />}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition inline-flex items-center gap-2"
            >
              Start Your Project <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">About Code Leaf</h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              Based in <span className="font-semibold text-primary">Kochi, Kerala</span>, Code Leaf Software Solutions
              is dedicated to delivering exceptional custom software, web applications, and automation solutions. We
              specialize in serving educational institutions, startups, and businesses of all sizes.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              With expertise in modern development frameworks and a commitment to quality, we transform your business
              challenges into innovative digital solutions. Whether you're scaling globally or just starting out, we're
              your partner in success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 px-4 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Your Free Consultation</h2>
            <p className="text-lg text-foreground/70">Let's discuss how we can help your business grow</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <form className="bg-card border border-border rounded-xl p-8 space-y-6">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <a
                href={`mailto:codeleaf.tech@gmail.com?subject=Consultation Request&body=${encodeURIComponent(message)}`}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition text-center block"
              >
                Send Inquiry
              </a>
            </form>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:codeleaf.tech@gmail.com" className="text-primary hover:underline">
                      codeleaf.tech@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <button onClick={handleWhatsApp} className="text-primary hover:underline">
                      +91 8075159094
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Instagram className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Follow Us</h3>
                    <button onClick={handleInstagram} className="text-primary hover:underline">
                      @codeleaf.tech
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-xl p-6">
                <p className="font-semibold mb-2">Quick Response</p>
                <p className="text-sm opacity-90">We typically respond within 24 hours. Let's connect!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image src="/images/cl-cream-logo.png" alt="CODE LEAF Logo" fill className="object-contain" />
                </div>
                <span className="font-extrabold text-xl text-primary-foreground tracking-wide">CODE LEAF</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Tech that grows with you</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>
                  <a href="#services" className="hover:text-primary-foreground transition">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary-foreground transition">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary-foreground transition">
                    Automation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>
                  <a href="#why-us" className="hover:text-primary-foreground transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-primary-foreground transition">
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary-foreground transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <div className="flex gap-4">
                <button onClick={handleInstagram} className="hover:opacity-70 transition">
                  <Instagram size={20} />
                </button>
                <button onClick={handleWhatsApp} className="hover:opacity-70 transition">
                  <MessageCircle size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
            <p>&copy; 2025 CODE LEAF Software Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
