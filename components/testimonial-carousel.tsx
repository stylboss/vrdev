"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Real Estate Agent",
    company: "Montreal Properties",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The virtual tours created by vrdev have completely transformed how I showcase properties. My listings with virtual tours receive 45% more inquiries and sell 30% faster. The quality and attention to detail are unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jean-Philippe Tremblay",
    role: "Marketing Director",
    company: "Boutique Hotel Group",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "We've seen a 60% increase in online bookings since implementing vrdev's 3D tours on our website. Guests love being able to explore our rooms and facilities before booking, and it's significantly reduced the number of cancellations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marie Dubois",
    role: "Gallery Owner",
    company: "Espace d'Art Contemporain",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The virtual exhibition tour created for our gallery has extended our reach globally. Art enthusiasts from around the world can now experience our exhibitions, and we've seen a notable increase in international sales as a result.",
    rating: 5,
  },
  {
    id: 4,
    name: "Alexandre Chen",
    role: "Architect",
    company: "Modern Design Studio",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "As an architect, I appreciate the precision and quality of vrdev's 3D models. They've become an essential tool for client presentations, allowing us to walk clients through designs in an immersive way that 2D renderings simply can't match.",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrevious = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 font-inter">"{testimonial.content}"</p>
                  <div className="flex flex-col items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full mb-3"
                    />
                    <h4 className="font-bold font-montserrat">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground font-inter">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background rounded-full p-2 shadow-md border hover:bg-muted transition-colors md:-translate-x-0"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background rounded-full p-2 shadow-md border hover:bg-muted transition-colors md:translate-x-0"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false)
              setActiveIndex(index)
            }}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
