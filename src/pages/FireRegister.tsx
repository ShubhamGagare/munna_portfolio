"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

function FireRegister() {
    const [mode, setMode] = useState<"munna" | "professional" | "bro">("bro")

    const getContent = () => {
        if (mode === "munna") {
            return {
                title: "Fire Register - School Ki Safety",
                challenge:
                    "UK schools mein teachers abhi bhi fire drills aur evacuations ke liye paper registers use karte hain. Fire drill ke time missing pupils ko monitor karna mushkil hai. Evacuation ke time teachers ground pe register lete hain, aur admin ensure karta hai ki school empty hai.",
                userNeeds: {
                    teachers: [
                        "Fire drills ke time register ka quick aur easy access",
                        "Attendance mark karna quick aur accurate",
                        "Missing pupils ki instant notification",
                    ],
                    admins: [
                        "Sabhi classes ki real-time updates",
                        "School bhar missing pupils ka comprehensive view",
                        "Assurance ki sab pupils account mein hain",
                    ],
                },
                painPoints: {
                    teachers: [
                        "Paper registers use karna time-consuming",
                        "Attendance mark karne mein human error ka risk",
                        "Sab pupils safe aur accounted for ensure karna mushkil",
                    ],
                    admins: [
                        "Attendance information receive karne mein delay",
                        "Ground pe teachers ke saath coordinate karna challenging",
                        "Missing pupils ko track aur locate karna inefficient",
                    ],
                },
            }
        } else if (mode === "bro") {
            return {
                title: "Fire Register - School Safety Revolution 🚨",
                challenge:
                    "UK school teachers still use paper registers for fire drills and evacuations. Monitoring missing pupils during emergencies is tough. During evacuation, teachers take registers on the ground while admin ensures the school is empty.",
                userNeeds: {
                    teachers: [
                        "Quick and easy register access during fire drills 🔥",
                        "Fast and accurate attendance marking ✅",
                        "Instant alerts for missing pupils 🚨",
                    ],
                    admins: [
                        "Real-time updates on all class statuses 📊",
                        "Complete view of missing pupils across school 👥",
                        "Confidence that all pupils are safe 🛡️",
                    ],
                },
                painPoints: {
                    teachers: [
                        "Paper registers are painfully slow ⏰",
                        "Human error risk in marking attendance 😰",
                        "Hard to ensure all pupils are safe and accounted for 😟",
                    ],
                    admins: [
                        "Delays in getting attendance info 📞",
                        "Coordination challenges with teachers on ground 🤝",
                        "Inefficient tracking and locating missing pupils 🔍",
                    ],
                },
            }
        } else {
            return {
                title: "Fire Register - Emergency Management System",
                challenge:
                    "Teachers in UK schools still use paper registers for fire drills and evacuations. Monitoring missing pupils during a fire drill or evacuation is difficult. During evacuation teachers take registers on the ground, and the admin ensures the school is empty.",
                userNeeds: {
                    teachers: [
                        "Quick and easy access to the register during fire drills",
                        "Ability to mark attendance quickly and accurately",
                        "Instant notification of missing pupils",
                    ],
                    admins: [
                        "Real-time updates on the status of all classes",
                        "A comprehensive view of missing pupils across the school",
                        "Assurance that all pupils are accounted for",
                    ],
                },
                painPoints: {
                    teachers: [
                        "Time-consuming process of using paper registers",
                        "Risk of human error in marking attendance",
                        "Difficulty in ensuring all pupils are safe and accounted for",
                    ],
                    admins: [
                        "Delays in receiving attendance information",
                        "Challenges in coordinating with teachers on the ground",
                        "Inefficiency in tracking and locating missing pupils",
                    ],
                },
            }
        }
    }

    const content = getContent()

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
            {/* Header */}
            <header className="border-b-4 border-dashed border-red-400 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
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

                <div className="flex-col space-y-16 mx-auto max-w-5xl">
                    <div className="flex-col space-y-8">
                        <h1 className="flex text-4xl font-bold min-w-44">
                            {mode === "munna" ? "Samasya" : mode === "bro" ? "The Challenge 🎯" : "The Challenge"}
                        </h1>
                        <p className="flex text-md">{content.challenge}</p>
                    </div>

                    <div className="flex-col space-y-8">
                        <h1 className="flex text-4xl font-bold min-w-44">
                            {mode === "munna" ? "User Research" : mode === "bro" ? "User Research 🔍" : "User Research"}
                        </h1>

                        <div className="flex-col space-y-8">
                            <div className="flex-col">
                                <h2 className="flex text-2xl font-bold">
                                    {mode === "munna" ? "Methodology" : mode === "bro" ? "Research Method 📋" : "Methodology"}
                                </h2>
                                <ul className="px-6">
                                    <li className="list-disc w-full">
                                        {mode === "munna"
                                            ? "Teachers, admins, aur fire wardens ke saath surveys aur interviews"
                                            : mode === "bro"
                                                ? "Surveys and interviews with teachers, admins, and fire wardens 📝"
                                                : "Conduct surveys and interviews with teachers, admins, and fire wardens"}
                                    </li>
                                    <li className="list-disc w-full">
                                        {mode === "munna"
                                            ? "Schools mein fire drills aur evacuation processes observe kiye"
                                            : mode === "bro"
                                                ? "Observed fire drills and evacuation processes in schools 👀"
                                                : "Observe fire drills and evacuation processes in schools"}
                                    </li>
                                </ul>
                            </div>

                            <div className="flex-col">
                                <h3 className="flex text-xl font-bold mt-4">
                                    {mode === "munna" ? "Teachers Ki Zaroorat" : mode === "bro" ? "Teachers Need 👩‍🏫" : "Teachers"}
                                </h3>
                                <ul className="px-6">
                                    {content.userNeeds.teachers.map((need, index) => (
                                        <li key={index} className="list-disc w-full">
                                            {need}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex-col">
                                <h3 className="flex text-xl font-bold mt-4">
                                    {mode === "munna"
                                        ? "Admins/Fire Wardens Ki Zaroorat"
                                        : mode === "bro"
                                            ? "Admins/Fire Wardens Need 👨‍💼"
                                            : "Admins/Fire Wardens"}
                                </h3>
                                <ul className="px-6">
                                    {content.userNeeds.admins.map((need, index) => (
                                        <li key={index} className="list-disc w-full">
                                            {need}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex-col">
                                <h2 className="flex text-2xl font-bold">
                                    {mode === "munna" ? "User Pain Points" : mode === "bro" ? "Pain Points 😤" : "User Pain Points"}
                                </h2>

                                <div className="flex-col">
                                    <h3 className="flex text-xl font-bold mt-4">
                                        {mode === "munna" ? "Teachers Ki Problems" : mode === "bro" ? "Teachers' Problems 😰" : "Teachers"}
                                    </h3>
                                    <ul className="px-6">
                                        {content.painPoints.teachers.map((pain, index) => (
                                            <li key={index} className="list-disc w-full">
                                                {pain}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex-col">
                                    <h3 className="flex text-xl font-bold mt-4">
                                        {mode === "munna"
                                            ? "Admins Ki Problems"
                                            : mode === "bro"
                                                ? "Admins' Problems 😓"
                                                : "Admins/Fire Wardens"}
                                    </h3>
                                    <ul className="px-6">
                                        {content.painPoints.admins.map((pain, index) => (
                                            <li key={index} className="list-disc w-full">
                                                {pain}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col space-y-8">
                        <h1 className="flex text-4xl font-bold min-w-44">
                            {mode === "munna"
                                ? "Findings aur Analysis"
                                : mode === "bro"
                                    ? "Key Findings 📊"
                                    : "Findings and Analysis"}
                        </h1>
                        <p className="flex text-md">
                            {mode === "munna"
                                ? "Current paper-based system slow hai aur errors prone hai. Teachers aur admins ke beech real-time communication nahi hai emergencies ke time. Missing pupils ko identify aur locate karne mein delay serious safety risks create kar sakti hai."
                                : mode === "bro"
                                    ? "The current paper-based system is painfully slow and error-prone. There's zero real-time communication between teachers and admins during emergencies. Delays in finding missing pupils = serious safety risks! 🚨"
                                    : "The current paper-based system is slow and prone to errors. There's a lack of real-time communication between teachers and admins during emergencies. Delays in identifying and locating missing pupils can lead to serious safety risks."}
                        </p>
                    </div>

                    <div className="flex-col space-y-8">
                        <h1 className="flex text-4xl font-bold min-w-44">
                            {mode === "munna" ? "User Journey" : mode === "bro" ? "User Journey 🗺️" : "User Journey"}
                        </h1>
                        <div className="flex-col space-y-4 w-full overflow-auto">
                            <img
                                src="/fire_journey.png"
                                alt="Fire Register User Journey"
                                className="w-[1200px] h-[600px] object-fit rounded-lg border-4 border-dashed border-red-300"
                            />
                            <img
                                src="/fire_journey2.png"
                                alt="Fire Register Wireframes"
                                className="w-[1200px] h-[600px] object-fit rounded-lg border-4 border-dashed border-red-300"
                            />
                        </div>
                    </div>

                    <div className="flex-col space-y-8">
                        <h1 className="flex text-4xl font-bold min-w-44">
                            {mode === "munna" ? "Wireframes" : mode === "bro" ? "Wireframes 📐" : "Wireframes"}
                        </h1>
                        <div className="flex-col space-y-4 w-full overflow-auto">
                            <img
                                src="/fire3.png"
                                alt="Fire Register Wireframes"
                                className="w-[1200px] h-[600px] object-fit rounded-lg border-4 border-dashed border-red-300"
                            />
                            <img
                                src="/fire.png"
                                alt="Fire Register Wireframes"
                                className="w-[1200px] h-[600px] overflow-x-scroll object-fit rounded-lg border-4 border-dashed border-red-300"
                            />
                        </div>
                    </div>

                    <div className="flex-col space-y-8">
                        <h1 className="flex text-4xl font-bold min-w-44">
                            {mode === "munna" ? "Conclusion" : mode === "bro" ? "Conclusion 🎉" : "Conclusion"}
                        </h1>
                        <p className="flex text-md">
                            {mode === "munna"
                                ? "UK schools mein digital fire register system implement karna efficiency aur accuracy significantly improve kar sakta hai fire drills aur evacuations ke time attendance marking mein. Real-time updates aur streamlined communication provide karke, system pupil safety enhance karta hai aur teachers aur admins ke roles simplify karta hai."
                                : mode === "bro"
                                    ? "Implementing a digital fire register system in UK schools can massively improve efficiency and accuracy during fire drills and evacuations. Real-time updates + streamlined communication = enhanced pupil safety and simplified roles for teachers and admins. Win-win! 🏆"
                                    : "Implementing a digital fire register system in UK schools can significantly improve the efficiency and accuracy of attendance marking during fire drills and evacuations. By providing real-time updates and streamlined communication, the system enhances pupil safety and simplifies the roles of teachers and admins."}
                        </p>
                    </div>
                </div>
            </div>
            <div className="pb-40"></div>
        </div>
    )
}

export default FireRegister
