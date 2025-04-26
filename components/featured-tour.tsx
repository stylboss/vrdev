"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, ExternalLink } from "lucide-react"

interface FeaturedTourProps {
  title: string
  description: string
  imageUrl: string
  tourUrl: string
  category: string
}

export default function FeaturedTour({ title, description, imageUrl, tourUrl, category }: FeaturedTourProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <Button variant="secondary" size="sm" asChild>
            <Link href={tourUrl} className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              View Tour
            </Link>
          </Button>
        </div>
        <div className="absolute top-2 left-2 bg-primary/90 text-primary-foreground px-2 py-1 text-xs rounded">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1 font-montserrat">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3 font-inter">{description}</p>
        <Link href={tourUrl} className="text-primary text-sm font-medium inline-flex items-center hover:underline">
          Explore Tour <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      </CardContent>
    </Card>
  )
}
