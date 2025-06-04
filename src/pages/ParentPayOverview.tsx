"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

const ParentPayOverview = () => {
  const [mode, setMode] = useState<"munna" | "professional" | "bro">("bro")

  const getContent = () => {
    if (mode === "munna") {
      return {
        title: "ParentPay ka SIMS Next Gen",
        subtitle: "School management ka naya andaaz",
        projects: [
          {
            title: "Take Register",
            description:
              "Take register UK school teachers ke liye attendance process easy banane ke liye design kiya gaya hai.",
            link: "/take-register",
          },
          {
            title: "Fire Register",
            description:
              "Fire register admin, teacher aur school staff ko fire drills aur fire emergency mein support karne ke liye design kiya gaya hai.",
            link: "/fire-register",
          },
        ],
      }
    } else if (mode === "bro") {
      return {
        title: "ParentPay's SIMS Next Gen",
        subtitle: "School management made simple 🏫",
        projects: [
          {
            title: "Take Register",
            description: "Take register is designed to make attendance process easy for UK school teachers. 📚",
            link: "/take-register",
          },
          {
            title: "Fire Register",
            description:
              "Fire register is designed to support admin, teacher and other school staff in case of fire drills and fire emergency. 🚨",
            link: "/fire-register",
          },
        ],
      }
    } else {
      return {
        title: "ParentPay's SIMS Next Gen",
        subtitle: "Next generation school management system",
        projects: [
          {
            title: "Take Register",
            description: "Take register is designed to make attendance process easy for UK school teachers.",
            link: "/take-register",
          },
          {
            title: "Fire Register",
            description:
              "Fire register is designed to support admin, teacher and other school staff in case of fire drills and fire emergency.",
            link: "/fire-register",
          },
        ],
      }
    }
  }

  const content = getContent()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b-4 border-dashed border-blue-400 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Button variant="outline" onClick={() => window.history.back()} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            {mode === "munna" ? "Wapas Jao" : mode === "bro" ? "Go Back" : "Back"}
          </Button>

          <div className="flex items-center space-x-2">
            <Button variant={mode === "bro" ? "default" : "outline"} onClick={() => setMode("bro")} className="text-sm">
              Bro Mode
            </Button>
            <Button
              variant={mode === "munna" ? "default" : "outline"}
              onClick={() => setMode("munna")}
              className="text-sm"
            >
              Munna Mode
            </Button>
            <Button
              variant={mode === "professional" ? "default" : "outline"}
              onClick={() => setMode("professional")}
              className="text-sm"
            >
              Professional Mode
            </Button>
          </div>
        </div>
      </header>

      <section className="w-full py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">{content.title}</h1>
        <p className="text-lg text-center text-gray-600 mb-12">{content.subtitle}</p>

        <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 container mx-auto px-4">
          {content.projects.map((project, index) => (
            <Card
              key={index}
              className="flex-col p-4 w-72 space-y-4 text-center h-96 border-4 border-dashed border-blue-300 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => (window.location.href = project.link)}
            >
              <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              <CardDescription className="text-gray-600">{project.description}</CardDescription>
              <Button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white">
                {mode === "munna" ? "Dekho" : mode === "bro" ? "Check it out" : "View Details"}
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ParentPayOverview
