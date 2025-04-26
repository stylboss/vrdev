"use client"

import { useEffect, useState } from "react"
import Header from "@/components/landing/Header"
import HeroSection from "@/components/landing/HeroSection"
import ServicesSection from "@/components/landing/ServicesSection"
import FeaturedToursSection from "@/components/landing/FeaturedToursSection"
import CTASection from "@/components/landing/CTASection"
import Footer from "@/components/landing/Footer"

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    setIsLoaded(true)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="grid-pattern fixed inset-0 z-0"></div>
      <div
        className="glow fixed z-0"
        style={{
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`,
        }}
      ></div>

      {/* Header */}
      <Header />

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Featured Tours Section */}
        <FeaturedToursSection />

        {/* CTA Section */}
        <CTASection />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
