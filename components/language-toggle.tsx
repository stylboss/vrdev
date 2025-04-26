"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export default function LanguageToggle() {
  const [language, setLanguage] = useState("fr")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Sélectionner la langue" className="relative overflow-hidden">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Sélectionner la langue</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/10 backdrop-blur border border-white/10">
        <DropdownMenuItem onClick={() => setLanguage("en")} className="hover:bg-white/10">
          English {language === "en" && "✓"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("fr")} className="hover:bg-white/10">
          Français {language === "fr" && "✓"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
