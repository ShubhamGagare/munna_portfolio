"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

function BigMarket() {
  const [mode, setMode] = useState<"munna" | "professional" | "bro">("bro")

  const getContent = () => {
    if (mode === "munna") {
      return {
        title: "Big Market - Grocery Ki Duniya",
        challenge:
          "2019 mein Big Market start hua Ahmednagar mein. 2020 tak users badhe but phir slow aur complex ho gaya. Humne grocery shopping experience ko redesign kiya fastest growing startup ke liye.",
        userResearch: {
          targetAudience: ["Ghar ki malkin aur working women", "Families ke liye target kiya"],
          existingApps: ["Bahut grocery apps hain but local area mein service nahi", "Local apps outdated aur poor UI"],
          userNeeds: [
            "Corona ke time online grocery shopping chahiye",
            "Reasonable rates aur good delivery",
            "Food items ki variety",
            "Ghar pe quality food",
          ],
          painPoints: [
            "Nearby market se hi kharidna padta",
            "Vegetables aur grains refine karne padte",
            "Alag-alag jagah se grocery",
            "Line mein khada rehna",
            "Home delivery with packaging chahiye",
            "Transport aur weather problems",
            "Shopping mein items bhool jaate",
          ],
        },
      }
    } else if (mode === "bro") {
      return {
        title: "Big Market - Grocery Game Changer 🛒",
        challenge:
          "Big Market started in 2019 in Ahmednagar. By 2020, users grew but the experience became slow and complex. I redesigned the grocery shopping experience for the fastest growing startup in the region.",
        userResearch: {
          targetAudience: ["Housewives and working women 👩‍💼", "Targeted for families 👨‍👩‍👧‍👦"],
          existingApps: [
            "Many grocery apps exist but no service in local area 📍",
            "Local apps are outdated with poor UI 😬",
          ],
          userNeeds: [
            "COVID pandemic made online grocery shopping essential 🦠",
            "Need reasonable rates and good delivery 🚚",
            "Wide variety of food items 🥬",
            "Good quality food delivered home 🏠",
          ],
          painPoints: [
            "Could only buy from nearby markets 🏪",
            "Vegetables and grains needed refinement 🌾",
            "Had to buy groceries from different places 🛍️",
            "Standing in lines was annoying 😤",
            "People expect home delivery with good packaging 📦",
            "Bad weather and transport issues 🌧️",
            "Forgetting items while shopping 🤦‍♀️",
          ],
        },
      }
    } else {
      return {
        title: "Big Market - Grocery Shopping Experience Redesign",
        challenge:
          "In 2019, Big Market was started in Ahmednagar. By the end of 2020, the number of users increased but the platform had evolved into a collection of disparate features that made the experience slow and complex. I redesigned the Big Market grocery shopping experience for the fastest growing startup in Ahmednagar.",
        userResearch: {
          targetAudience: ["Housewives and working women", "Targeted for families"],
          existingApps: [
            "Many grocery apps are available but service is not available in local area",
            "Apps built for local area are not updated and have poor UI",
          ],
          userNeeds: [
            "Due to COVID pandemic, users are looking for apps that can satisfy their online grocery shopping needs",
            "Users need groceries at reasonable rates with good home delivery service",
            "Wide variety of food items",
            "Good quality food delivered to their door",
          ],
          painPoints: [
            "Users could only buy from nearby markets, limited to available items in available quality",
            "Vegetables and grains had to be refined",
            "Groceries had to be bought from different places",
            "Had to stand in lines",
            "People expect home delivery with good packaging",
            "Bad weather and transport issues",
            "People may forget items while shopping",
          ],
        },
      }
    }
  }

  const content = getContent()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 ">
      {/* Header */}
      <header className="border-b-4 border-dashed border-orange-400 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
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

      <div className="container mx-auto px-6 py-8">
        <div className="h-[20rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md mb-16">
          <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center relative z-20">{content.title}</h1>
        </div>

        <div className="flex-col space-y-16 mx-auto max-w-2xl">
          <div className="flex-col space-y-8">
            <h1 className="flex text-5xl font-bold min-w-44">
              {mode === "munna" ? "Samasya" : mode === "bro" ? "The Challenge 🎯" : "The Challenge"}
            </h1>
            <p className="flex text-md">{content.challenge}</p>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-5xl font-bold min-w-44">
              {mode === "munna" ? "User Research" : mode === "bro" ? "User Research 🔍" : "User Research"}
            </h1>

            <div className="flex-col space-y-8">
              <div className="flex-col">
                <h2 className="flex text-3xl font-bold">
                  {mode === "munna" ? "Target Audience" : mode === "bro" ? "Target Audience 🎯" : "Target Audience"}
                </h2>
                <ul className="px-6">
                  {content.userResearch.targetAudience.map((item, index) => (
                    <li key={index} className="list-disc text-lg w-full">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-col">
                <h2 className="flex text-3xl font-bold">
                  {mode === "munna" ? "Existing Apps" : mode === "bro" ? "Existing Apps 📱" : "Existing Apps"}
                </h2>
                <ul className="px-6">
                  {content.userResearch.existingApps.map((item, index) => (
                    <li key={index} className="list-disc text-lg w-full">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-col">
                <h2 className="flex text-3xl font-bold">
                  {mode === "munna" ? "User Needs" : mode === "bro" ? "User Needs 💭" : "User Needs"}
                </h2>
                <ul className="px-6">
                  {content.userResearch.userNeeds.map((item, index) => (
                    <li key={index} className="list-disc text-lg w-full">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-col">
                <h2 className="flex text-3xl font-bold">
                  {mode === "munna" ? "User Pain Points" : mode === "bro" ? "User Pain Points 😤" : "User Pain Points"}
                </h2>
                <ul className="px-6">
                  {content.userResearch.painPoints.map((item, index) => (
                    <li key={index} className="list-disc text-lg w-full">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-5xl font-bold min-w-44">
              {mode === "munna"
                ? "Findings aur Analysis"
                : mode === "bro"
                  ? "Findings & Analysis 📊"
                  : "Findings and Analysis"}
            </h1>
            <ul className="px-6">
              <li className="list-disc text-lg w-full">
                {mode === "munna"
                  ? "Saari groceries ek jagah milni chahiye"
                  : mode === "bro"
                    ? "All groceries should be available at one place 🏪"
                    : "All groceries should be available at one place"}
              </li>
              <li className="list-disc text-lg w-full">
                {mode === "munna"
                  ? "Home delivery aur packaging accha hona chahiye"
                  : mode === "bro"
                    ? "Home delivery and packaging should be top-notch 📦"
                    : "Home delivery and packaging should be good"}
              </li>
              <li className="list-disc text-lg w-full">
                {mode === "munna"
                  ? "Items ki list maintain karni chahiye"
                  : mode === "bro"
                    ? "Shopping list feature is essential 📝"
                    : "List of items has to be maintained"}
              </li>
              <li className="list-disc text-lg w-full">
                {mode === "munna"
                  ? "Same item ki different quality available honi chahiye"
                  : mode === "bro"
                    ? "Different quality options for same items 🌟"
                    : "Different quality of the same grocery item should be available"}
              </li>
              <li className="list-disc text-lg w-full">
                {mode === "munna"
                  ? "Refined products available hone chahiye"
                  : mode === "bro"
                    ? "Refined/processed products should be available ✨"
                    : "Refined products should be available"}
              </li>
            </ul>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-5xl font-bold min-w-44">
              {mode === "munna" ? "User Persona" : mode === "bro" ? "User Persona 👤" : "User Persona"}
            </h1>
            <div className="flex space-x-4 w-full overflow-auto">
              <img
                src="/User Persona.png"
                alt="Big Market User Persona"
                className="w-[600px] h-[500px] object-contain rounded-lg border-4 border-dashed border-orange-300"
              />
            </div>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-5xl font-bold min-w-44">Competitive Analysis</h1>
            <div className="flex space-x-4 w-full overflow-auto">
              <img
                src="/Capture.png"
                alt="Competitive Analysis"
                className="w-[600px] h-[500px] object-contain rounded-lg border-4 border-dashed border-orange-300"
              />
            </div>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-5xl font-bold min-w-44">User Journey</h1>
            <div className="flex space-x-4 w-full overflow-auto">
              <img
                src="/BM_User_Journey.png"
                alt="User Journey"
                className="w-[600px] h-[500px] object-contain rounded-lg border-4 border-dashed border-orange-300"
              />
            </div>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-5xl font-bold min-w-44">Information Architecture</h1>
            <div className="flex space-x-4 w-full overflow-auto">
              <img
                src="/BM_Info_Arch.png"
                alt="Information Architecture"
                className="w-[600px] h-[500px] object-contain rounded-lg border-4 border-dashed border-orange-300"
              />
            </div>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-5xl font-bold min-w-44">Wireframes</h1>
            <div className="flex space-x-4 w-full overflow-auto">
              <img
                src="/Wireframes.png"
                alt="Wireframes"
                className="w-[600px] h-[500px] object-contain rounded-lg border-4 border-dashed border-orange-300"
              />
            </div>
            <div className="flex space-x-4 w-full overflow-auto">
              <img
                src="/other-hifi.png"
                alt="other-hifi"
                className="w-[600px] h-[500px] object-contain rounded-lg border-4 border-dashed border-orange-300"
              />
            </div>
            <div className="flex space-x-4 w-full overflow-auto">
              <img
                src="/loc-home.png"
                alt="loc-home"
                className="w-[600px] h-[500px] object-contain rounded-lg border-4 border-dashed border-orange-300"
              />
            </div>
            <div className="flex space-x-4 w-full overflow-auto">
              <img
                src="/order-hifi.png"
                alt="order-hifi"
                className="w-[600px] h-[500px] object-contain rounded-lg border-4 border-dashed border-orange-300"
              />
            </div>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-5xl font-bold min-w-44">High Fidelity Designs</h1>
            <div className="flex space-x-4 w-full overflow-auto">
              <img
                src="/Prototype.png"
                alt="Prototype"
                className="w-[600px] h-[500px] object-contain rounded-lg border-4 border-dashed border-orange-300"
              />
            </div>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-5xl font-bold min-w-44">
              {mode === "munna" ? "Conclusion" : mode === "bro" ? "Conclusion 🎉" : "Conclusion"}
            </h1>
            <p className="flex text-md">
              {mode === "munna"
                ? "Purane Big Market ke comparison mein, naya design positive impact deta hai shopping experience pe. Users ko saved list feature bahut handy laga aur faster way to order groceries. User research aur testing ke baad, maine assumptions aur changes validate kiye. Khushi ki baat hai ki small changes se bhi big impacts create kar sakte hain aur users ke liye great experience bana sakte hain."
                : mode === "bro"
                  ? "Compared to the previous Big Market version, this redesign creates a positive impact on the shopping experience. Users found the saved list feature super handy and a faster way to order groceries. After user research and testing, I validated my assumptions and changes. It's amazing how small changes can yield big impacts and create great user experiences! 🚀"
                  : "Compared with the previous version of Big Market, this newly designed version gives a positive impact on the shopping experience. Users find the new saved list feature much handier and a faster way to order groceries. After user research and testing, I was able to validate the assumptions and changes I had made. I am glad to learn that even by making small changes, we are able to yield big impacts and create a great experience for users."}
            </p>
          </div>
        </div>
      </div>
      <div className="pb-40"></div>
    </div>
  )
}

export default BigMarket
