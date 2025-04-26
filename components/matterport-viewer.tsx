"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Maximize, Minimize, ZoomIn, ZoomOut, RotateCcw, HomeIcon, Info } from "lucide-react"
import Image from "next/image"

export default function MatterportViewer() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hotspots, setHotspots] = useState([
    { id: 1, x: 25, y: 45, title: "Living Room", description: "Spacious open concept living area" },
    { id: 2, x: 65, y: 35, title: "Kitchen", description: "Modern kitchen with high-end appliances" },
    { id: 3, x: 45, y: 75, title: "Master Bedroom", description: "Luxurious master suite with ensuite bathroom" },
  ])

  useEffect(() => {
    // Simulate loading the Matterport viewer
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className={`relative ${isFullscreen ? "fixed inset-0 z-50 bg-background" : "h-full"}`}>
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p className="mt-4 text-muted-foreground">Loading 3D Tour...</p>
          </div>
        </div>
      ) : (
        <>
          {/* Placeholder for Matterport iframe - in a real implementation, this would be the actual Matterport embed */}
          <div className="relative h-full w-full bg-muted">
            <Image
              src="/placeholder.svg?height=800&width=1200&text=Matterport 3D Tour"
              alt="Matterport 3D Tour"
              fill
              className="object-cover"
            />

            {/* Hotspots */}
            {hotspots.map((hotspot) => (
              <div
                key={hotspot.id}
                className="absolute z-10 cursor-pointer"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              >
                <div className="relative group">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground animate-pulse">
                    <Info className="h-4 w-4" />
                  </div>
                  <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded bg-background p-2 shadow-lg group-hover:block">
                    <div className="w-48 text-center">
                      <h4 className="font-bold">{hotspot.title}</h4>
                      <p className="text-xs text-muted-foreground">{hotspot.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-background/90 p-2 shadow-lg">
            <Button variant="ghost" size="icon" aria-label="Home view">
              <HomeIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Zoom in">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Zoom out">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Reset rotation">
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleFullscreen} aria-label="Toggle fullscreen">
              {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
