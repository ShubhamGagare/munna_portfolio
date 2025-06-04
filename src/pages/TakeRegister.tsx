"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

function TakeRegister() {
    const [mode, setMode] = useState<"munna" | "professional" | "bro">("bro")

    const getContent = () => {
        if (mode === "munna") {
            return {
                title: "Take Register - School Attendance Ka Naya Andaaz",
                challenge:
                    "ParentPay ka legacy product SIMS, 75% market share rakhta tha. Challenge tha ki iske 'take register' functionality ko modernize karna aur additional features add karna jaise dinner registers, meal choices, aur UK DfE codes. Teachers existing system aur uski limitations ke aadat the. Mera task tha register system ko redesign karna primary schools ke liye while ensuring scalability for secondary school requirements.",
                userNeeds: [
                    "Register jaldi lena aur teaching pe focus karna",
                    "UK DFE code guidelines ke hisaab se students mark karna aur comment add karna",
                    "Sab students marked hain ensure karna safeguarding ke liye",
                    "Secondary mein sab lesson attendance marks dikhana",
                    "Register lete time meal choice select karna",
                ],
                painPoints: [
                    "Teacher ke liye register lena ek to-do thing hai, primary task nahi",
                    "Legacy system mein sab students mark karne mein time lagta",
                    "Admin ko teachers ko chase karna padta complete register ke liye",
                    "Dinner register ke liye alag screen pe navigate karna",
                    "Class ka summary quick glance mein nahi dikh sakta",
                    "Teaching ke beech late student mark karna mushkil",
                ],
            }
        } else if (mode === "bro") {
            return {
                title: "Take Register - Attendance Made Easy 📚",
                challenge:
                    "ParentPay's legacy product SIMS held a dominant 75% market share. The challenge was modernizing its 'take register' functionality and integrating features like dinner registers, meal choices, and UK DfE codes. Teachers were used to the old system and its quirks. My job: redesign the register system for primary schools while keeping it scalable for secondary requirements.",
                userNeeds: [
                    "Take register ASAP and get back to teaching 🏃‍♀️",
                    "Mark students per UK DFE guidelines with comments 📝",
                    "Ensure all students are marked for safeguarding 🛡️",
                    "Show all lesson attendance in secondary schools 📊",
                    "Select meal choices while taking register 🍽️",
                ],
                painPoints: [
                    "Taking register = admin task, not the main gig 😤",
                    "Legacy system takes forever to mark all students ⏰",
                    "Admin constantly chasing teachers to complete registers 📞",
                    "Had to navigate to different screen for dinner register 🔄",
                    "Can't see class summary at a glance 👀",
                    "Marking late students during teaching = nightmare 😰",
                ],
            }
        } else {
            return {
                title: "Take Register - Attendance System Redesign",
                challenge:
                    "ParentPay's legacy product, SIMS, held a dominant 75% market share. The challenge was to modernize its 'take register' functionality and integrate additional features like dinner registers, meal choices, and UK DfE codes. Teachers were accustomed to the existing system and its limitations. My task was to redesign the register system to support primary schools while ensuring scalability for secondary school requirements.",
                userNeeds: [
                    "Need to take register as quickly as possible and move on to teaching",
                    "Mark students as per the UK DFE code guidelines and add relative comments",
                    "Ensure all students are marked to make sure safeguarding of students",
                    "In secondary display all lesson attendance marks to teacher to keep informed about student's whereabouts",
                    "Select meal choice of the students while taking register so canteen will be informed",
                ],
                painPoints: [
                    "For teacher taking register is one of the to-do things and not the primary task",
                    "Legacy system takes time to mark all students",
                    "Admin has to chase teachers to mark all students and complete the register",
                    "To take dinner register teacher had to navigate to another screen",
                    "Cannot see the summary of the class on quick glance",
                    "Marking student late becomes difficult in legacy system if students come in between teaching",
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

            <div className="container mx-auto px-6 py-8">
                <div className="h-[20rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md mb-16">
                    <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center relative z-20">{content.title}</h1>
                </div>

                <div className="flex-col space-y-16 mx-auto max-w-3xl">
                    <div className="flex-col space-y-8">
                        <h1 className="text-4xl font-bold min-w-44">
                            {mode === "munna" ? "Live Demo" : mode === "bro" ? "Live Demo 🎬" : "Live Demo"}
                        </h1>
                        <div className="w-full h-[800px] bg-gray-100 rounded-lg border-4 border-dashed border-blue-300 flex items-center justify-center">
                            <iframe className='w-full  h-[768px]'
                                src="https://parentpay.wistia.com/medias/0diawfj7ys"
                                frameBorder="0" allowFullScreen></iframe>

                        </div>
                    </div>

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
                            <div className="flex-col space-y-4">
                                <h2 className="flex text-2xl font-bold">
                                    {mode === "munna" ? "Target Audience" : mode === "bro" ? "Target Audience 🎯" : "Target Audience"}
                                </h2>
                                <ul className="px-6">
                                    <li className="list-disc w-full">
                                        {mode === "munna"
                                            ? "UK Primary school teachers"
                                            : mode === "bro"
                                                ? "UK Primary school teachers 👩‍🏫"
                                                : "UK Primary school teachers"}
                                    </li>
                                    <li className="list-disc w-full">
                                        {mode === "munna"
                                            ? "UK Secondary school teachers"
                                            : mode === "bro"
                                                ? "UK Secondary school teachers 👨‍🏫"
                                                : "UK Secondary school teachers"}
                                    </li>
                                </ul>
                            </div>

                            <div className="flex-col">
                                <h2 className="flex text-2xl font-bold">
                                    {mode === "munna" ? "User Needs" : mode === "bro" ? "User Needs 💭" : "User Needs"}
                                </h2>
                                <ul className="px-6">
                                    {content.userNeeds.map((need, index) => (
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
                                <ul className="px-6">
                                    {content.painPoints.map((pain, index) => (
                                        <li key={index} className="list-disc w-full">
                                            {pain}
                                        </li>
                                    ))}
                                </ul>
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
                                ? "Teachers register jaldi complete karna chahte hain aur teaching pe move on karna chahte hain. Students mark karne, comments add karne aur meal choice select karne ka easy way chahiye. Register aur dinner register alag process nahi hona chahiye teachers ke liye. Late student mark karne ka quicker way chahiye. Register complete karne ke baad teachers ko summary chahiye. Admin ko school ke sabhi class ka accurate register status chahiye."
                                : mode === "bro"
                                    ? "Teachers want to complete registers quickly and get back to teaching. Need an easy way to mark students, add comments, and select meal choices. Taking register and dinner register shouldn't be separate processes. Need a quicker way to mark late students. Teachers need a summary after taking register. Admin needs accurate register status of all classes in school. 📋"
                                    : "Teachers want to complete register quickly and move on to teaching. Need an easy way to mark students, add comments and select meal choice. Taking register and dinner register shouldn't be different processes for teachers. Need a quicker way to mark late students. At the end of taking register teachers need a summary. Admin needs to know accurate register status of all classes in school."}
                        </p>
                    </div>

                    <div className="flex-col space-y-8">
                        <h1 className="flex text-4xl font-bold min-w-44">
                            {mode === "munna" ? "Designs" : mode === "bro" ? "Design Solutions 🎨" : "Designs"}
                        </h1>
                        <div className="flex space-x-4 w-full overflow-auto">
                            <img
                                src="/SIMS.webp"
                                alt="SIMS Design"
                                className="w-[600px] h-[500px] object-contain rounded-lg border-4 border-dashed border-blue-300"
                            />
                            <img
                                src="/myregister.png"
                                alt="My Register Design"
                                className="w-[500px] h-[500px] object-contain rounded-lg border-4 border-dashed border-blue-300"
                            />
                            <img
                                src="/take-register.png"
                                alt="Take Register Design"
                                className="w-[600px] h-[500px] object-contain rounded-lg border-4 border-dashed border-blue-300"
                            />
                        </div>
                    </div>

                    <div className="flex-col space-y-8">
                        <h1 className="flex text-4xl font-bold min-w-44">
                            {mode === "munna" ? "Conclusion" : mode === "bro" ? "Conclusion 🎉" : "Conclusion"}
                        </h1>
                        <p className="flex text-md">
                            {mode === "munna"
                                ? "ParentPay ke liye naya register system successfully modernize karta hai 'take register' functionality, legacy system ki limitations address karte hue. Meal choices, UK DfE codes, aur summary view jaise features incorporate karke, system primary aur secondary school teachers dono ki needs meet karta hai. Streamlined process teachers ko quickly aur accurately attendance mark karne allow karta hai."
                                : mode === "bro"
                                    ? "The new register system for ParentPay successfully modernizes the 'take register' functionality, fixing all the legacy system's pain points. By adding meal choices, UK DfE codes, and summary views, it meets the needs of both primary and secondary school teachers. The streamlined process lets teachers mark attendance quickly and accurately! 🎯"
                                    : "The new register system for ParentPay successfully modernizes the 'take register' functionality, addressing the limitations of the legacy system. By incorporating features like meal choices, UK DfE codes, and a summary view, the system meets the needs of both primary and secondary school teachers. The streamlined process allows teachers to quickly and accurately mark attendance."}
                        </p>
                    </div>
                </div>
            </div>
            <div className="pb-40"></div>
        </div>
    )
}

export default TakeRegister
