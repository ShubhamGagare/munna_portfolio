"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

function VolpayTestSuite() {
  const [mode, setMode] = useState<"munna" | "professional" | "bro">("bro")

  const getContent = () => {
    if (mode === "munna") {
      return {
        title: "Volpay TestSuite - Testing Ka Desi Jugaad",
        whatIs:
          "Yeh suite In-House automation testing product ke roop mein develop kiya gaya tha. Yeh specifically VolPay ki testing requirements meet karne ke liye design aur develop kiya gaya. Main moto tha automating regression aur functional testing support dena jo existing available tools mein possible nahi tha.",
        problems: [
          "Sirf QA teams ke testers hi users hain",
          "Testers zyada time testcase configure karne mein spend karte hain",
          "VolPay enhance hone pe new testcase existing tool mein configure nahi kar sakte",
          "Frontend limitations ki wajah se backend support hone ke bawajood sab testcase configurable nahi the",
        ],
        outcomes: [
          "Redesigned TestSuite 70% testcase automate kar sakta hai",
          "Manual testers ka valuable time bachata hai",
          "TestCase configuration, automation aur monitoring easy ho gaya",
          "Quality Assurance improve hua making sense mein",
        ],
        myRole:
          "Main small team ka part tha. BA support nahi tha so humari team ko design se leke develop tak end to end solutions karne padte the. Mujhe opportunity mila ki main bahut functionalities design aur develop karun frontend se backend aur DB architecture tak.",
      }
    } else if (mode === "bro") {
      return {
        title: "Volpay TestSuite - Testing Automation That Actually Works 🧪",
        whatIs:
          "This suite was developed as an in-house automation testing product specifically designed to meet VolPay's testing requirements. The main goal was providing automation support for regression and functional testing that existing tools couldn't handle.",
        problems: [
          "Only QA team testers are the users 👥",
          "Testers spend most time configuring test cases ⏰",
          "When VolPay gets enhanced, new test cases can't be configured in existing tools 😤",
          "Despite backend support, frontend limitations made all test cases non-configurable 🚫",
        ],
        outcomes: [
          "Redesigned TestSuite can automate 70% of test cases 🎯",
          "Saves valuable time for manual testers ⏱️",
          "TestCase configuration, automation and monitoring became easy 📊",
          "Improved Quality Assurance significantly 📈",
        ],
        myRole:
          "I was part of a small team with no BA support, so we had to design and develop end-to-end solutions. I got the opportunity to design and develop many functionalities from frontend to backend and DB architecture! 🚀",
      }
    } else {
      return {
        title: "Volpay TestSuite - In-House Automation Testing Product",
        whatIs:
          "This suite was developed as an in-house automation testing product specifically designed to meet the testing requirements of VolPay. The main objective was providing automating regression and functional testing support which were not possible in existing available tools.",
        problems: [
          "The only users are the testers from different QA teams",
          "Testers spend most of the time configuring test cases",
          "As VolPay gets enhanced, new test cases cannot be configured in existing tools",
          "Despite backend support, due to frontend limitations all test cases were not configurable",
        ],
        outcomes: [
          "Redesigned TestSuite can automate 70% of the test cases",
          "It saves valuable time of manual testers",
          "TestCase configuration, automation and monitoring became easy",
          "Improved Quality Assurance at making sense",
        ],
        myRole:
          "I was part of a small team. There was no BA support so our team had to design and develop end-to-end solutions. I had the opportunity to design and develop many functionalities from frontend to backend and DB architecture.",
      }
    }
  }

  const content = getContent()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b-4 border-dashed border-purple-400 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
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
            <h1 className="flex text-4xl font-bold min-w-44">
              {mode === "munna"
                ? "TestSuite Kya Hai?"
                : mode === "bro"
                  ? "What is TestSuite? 🤔"
                  : "What is TestSuite?"}
            </h1>
            <div className="flex-col space-y-4">
              <div className="bg-gray-100 p-6 rounded-lg border-4 border-dashed border-purple-300">
                <h2 className="flex text-2xl font-bold mb-4">
                  {mode === "munna" ? "Bank" : mode === "bro" ? "Bank 🏦" : "Bank"}
                </h2>
                <div className="w-full h-[500px] bg-white rounded border-2 border-gray-300 flex items-center justify-center">
                  <img src="/Bank.png" alt="Bank Architecture Diagram" className="h-full w-full object-contain" />
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg border-4 border-dashed border-purple-300">
                <h2 className="flex text-2xl font-bold mb-4">
                  {mode === "munna" ? "VolPay" : mode === "bro" ? "VolPay 💳" : "VolPay"}
                </h2>
                <div className="w-full h-[500px] bg-white rounded border-2 border-gray-300 flex items-center justify-center">
                  <img src="/VolPay.png" alt="VolPay Architecture Diagram" className="h-full w-full object-contain" />
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg border-4 border-dashed border-purple-300">
                <h2 className="flex text-2xl font-bold mb-4">
                  {mode === "munna"
                    ? "TestSuite Kya Hai?"
                    : mode === "bro"
                      ? "What is TestSuite? 🧪"
                      : "What is TestSuite?"}
                </h2>
                <img
                  src="/what_is_testsuite.png"
                  alt="TestSuite Explanation Diagram"
                  className="h-full w-full object-contain mb-4"
                />
                <p className="text-md">{content.whatIs}</p>
              </div>
            </div>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-4xl font-bold min-w-44">
              {mode === "munna" ? "Product Vision" : mode === "bro" ? "Product Vision 🎯" : "Product Vision"}
            </h1>
            <p className="flex text-md">
              {mode === "munna"
                ? "Yeh suite In-House automation testing product ke roop mein develop kiya gaya tha. Yeh specifically VolPay ki testing requirements meet karne ke liye design aur develop kiya gaya. Main moto tha automating regression aur functional testing support dena jo existing available tools mein possible nahi tha. VolPay ek suite hai software applications ka jo specifically design kiya gaya hai payment integration, processing aur orchestration ke sabhi aspects ko accelerate karne ke liye."
                : mode === "bro"
                  ? "This suite was developed as an in-house automation testing product specifically designed to meet VolPay's testing requirements. The main goal was providing automation support for regression and functional testing that existing tools couldn't handle. VolPay is a suite of software applications designed to accelerate all aspects of payment integration, processing and orchestration! 💰"
                  : "This suite was developed as In-House automation testing product. It is specifically designed and developed to meet the testing requirements of the VolPay. The main moto of this tool was giving the automating regression and functional testing support which are not possible in existing available tools. VolPay is a suite of software applications designed specifically to accelerate all aspects of payment integration, processing and orchestration."}
            </p>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-3xl font-bold min-w-44">
              {mode === "munna"
                ? "User Problems Jo Discover Kiye"
                : mode === "bro"
                  ? "Discovered User Problems 🔍"
                  : "Discovered User Problems"}
            </h1>
            <div className="flex-col space-y-8">
              <div className="flex-col mt-2">
                <ul className="px-6">
                  {content.problems.map((problem, index) => (
                    <li key={index} className="list-disc w-full mb-2">
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-3xl font-bold min-w-44">
              {mode === "munna" ? "Outcomes" : mode === "bro" ? "Outcomes 🎉" : "Outcomes"}
            </h1>
            <div className="flex-col space-y-8">
              <div className="flex-col mt-2">
                <ul className="px-6">
                  {content.outcomes.map((outcome, index) => (
                    <li key={index} className="list-disc w-full mb-2">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-4xl font-bold min-w-44">
              {mode === "munna" ? "Mera Role" : mode === "bro" ? "My Role 👨‍💻" : "My Role"}
            </h1>
            <div className="flex-col">
              <p className="flex text-md mb-4">{content.myRole}</p>
              <div className="flex-col mt-2">
                <ul className="px-6">
                  <li className="list-disc w-full">
                    {mode === "munna"
                      ? "Testing requirements gather karna aur VolPay ki nayi functionalities samajhna"
                      : mode === "bro"
                        ? "Gathering testing requirements and understanding new VolPay functionalities 📋"
                        : "Gathering the testing requirements and understanding new functionalities of the VolPay"}
                  </li>
                  <li className="list-disc w-full">
                    {mode === "munna"
                      ? "Uske basis pe solutions design karna jo UI, backend implementation aur DB architecture include karta"
                      : mode === "bro"
                        ? "Designing solutions including UI, backend implementation and DB architecture 🏗️"
                        : "Based on that designed the solutions which includes UI, backend implementation and DB architecture"}
                  </li>
                  <li className="list-disc w-full">
                    {mode === "munna"
                      ? "Existing profiles ko redesign aur develop karna"
                      : mode === "bro"
                        ? "Redesigning and developing existing profiles 🔄"
                        : "Redesigning and developing the existing profiles"}
                  </li>
                  <li className="list-disc w-full">
                    {mode === "munna"
                      ? "Nayi profiles aur functionalities design aur develop karna"
                      : mode === "bro"
                        ? "Designing and developing new profiles and functionalities ✨"
                        : "Design and develop new profiles and functionalities"}
                  </li>
                  <li className="list-disc w-full">
                    {mode === "munna"
                      ? "Testers ke feedback ke hisaab se overall UI improve karna time to time"
                      : mode === "bro"
                        ? "Improving overall UI based on tester feedback over time 🎨"
                        : "Improving the overall UI time to time as per testers feedback"}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-4xl font-bold min-w-44">
              {mode === "munna" ? "User Journey" : mode === "bro" ? "User Journey 🗺️" : "User Journey"}
            </h1>
            <div className="flex space-x-4 w-full overflow-auto">
              <img
                src="/TestSuiteUserJourney.png"
                alt="TestSuite User Journey"
                className="w-[800px] h-[600px] object-contain rounded-lg border-4 border-dashed border-purple-300"
              />
            </div>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-4xl font-bold min-w-44">
              {mode === "munna"
                ? "Process Highlights"
                : mode === "bro"
                  ? "Process Highlights ⭐"
                  : "Process Highlights"}
            </h1>
            <div className="flex space-x-4 w-full overflow-auto">
              <img
                src="/TestSuite Process Highlights.png"
                alt="TestSuite Process Highlights"
                className="w-[800px] h-[600px] object-contain rounded-lg border-4 border-dashed border-purple-300"
              />
            </div>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-4xl font-bold min-w-44">
              {mode === "munna" ? "Designs" : mode === "bro" ? "Design Solutions 🎨" : "Designs"}
            </h1>
            <div className="flex-col">
              <p className="flex text-md mb-4">
                {mode === "munna"
                  ? "*Product In-house development hai aur company regulations ki wajah se screenshots upload nahi kiye confidential details keep karne ke liye. Yeh core profiles ke mirror designs hain jo maine design kiye hain."
                  : mode === "bro"
                    ? "*As the product is in-house development and due to company regulations, screenshots aren't uploaded to keep details confidential. These are mirror designs of the core profiles I designed! 🔒"
                    : "*As the product is In-house development and due to company regulations screenshots are not uploaded to keep the details confidential. These are the mirror designs of the core profiles which I have designed."}
              </p>
              <div className="flex-col space-y-4 w-full overflow-auto">
                <img
                  src="/TC_TP.png"
                  alt="TC_TP Design"
                  className="w-[800px] h-[1000px] object-contain rounded-lg border-4 border-dashed border-purple-300"
                />
                <img
                  src="/TP_Old_New.png"
                  alt="TP_Old_New Design"
                  className="w-[800px] h-[1200px] object-contain rounded-lg border-4 border-dashed border-purple-300"
                />
              </div>
            </div>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-4xl font-bold min-w-44">
              {mode === "munna" ? "User Testing" : mode === "bro" ? "User Testing 🧪" : "User Testing"}
            </h1>
            <div className="flex-col">
              <div className="flex-col mt-2">
                <ul className="px-6">
                  <li className="list-disc w-full">
                    {mode === "munna"
                      ? "Design aur development ek saal se zyada time mein hua, so hum constantly VolPay QA team se feedback collect kar rahe the"
                      : mode === "bro"
                        ? "Design and development happened over a year, so we constantly collected feedback from the VolPay QA team 📊"
                        : "The design and development has been over a year, so we were constantly collecting feedback from the VolPay QA team"}
                  </li>
                  <li className="list-disc w-full">
                    {mode === "munna"
                      ? "Initially testplan mein testcases differentiate karne ke liye poora testcase box color kiya jata tha different levels ke liye. Ab yeh redesign karke colored sidebar use kiya"
                      : mode === "bro"
                        ? "Initially in testplan, whole testcase boxes were colored for different levels. Now redesigned to use colored sidebar 🎨"
                        : "Initially in testplan to differentiate testcases whole testcase box was colored for different levels. Which is now redesigned to colored sidebar of the box"}
                  </li>
                  <li className="list-disc w-full">
                    {mode === "munna"
                      ? "Do output comparison ke bajay teen output comparison suggest kiya gaya"
                      : mode === "bro"
                        ? "Instead of two output comparison, three output comparison was suggested 📈"
                        : "Instead of two output comparison three output comparison was suggested"}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-col space-y-8">
            <h1 className="flex text-4xl font-bold min-w-44">
              {mode === "munna" ? "Conclusion" : mode === "bro" ? "Conclusion 🎉" : "Conclusion"}
            </h1>
            <p className="flex text-md">
              {mode === "munna"
                ? "Naya redesigned testsuite testers ko 70% zyada testcases configure aur automate karne allow karta hai. Redesigned testsuite testing team ke countless hours bachata hai. Maine seekha ki B2B product ke liye simple aur scalable solutions design karna. Khushi ki baat hai ki small changes se bhi big impacts create kar sakte hain aur users ke liye great experience bana sakte hain."
                : mode === "bro"
                  ? "The newly redesigned testsuite allows testers to configure and automate 70% more testcases. It saves countless hours for the testing team. I learned to design simple and scalable solutions for B2B products. Amazing how small changes can yield big impacts and create great user experiences! 🚀"
                  : "The newly redesigned testsuite allows testers to configure and automated 70% more testcases. The redesigned testsuite saves the countless hours of the testing team. I learn design new solutions which can be simple and scalable for B2B product. I am glad to learn that even by making small changes, we are able to yield big impacts and create a great experience for users."}
            </p>
          </div>
        </div>
      </div>
      <div className="pb-40"></div>
    </div>
  )
}

export default VolpayTestSuite
