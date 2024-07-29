// /pages/faq.tsx

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaList, FaServicestack, FaQuestionCircle, FaUserTie, FaPlus, FaMinus } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import 'tailwindcss/tailwind.css';

const faqData = [
  {
    question: "How do I search for rental properties?",
    answer: "You can search for rental properties by navigating to the Listings page and using the search filters to specify your criteria, such as location, price range, and property type."
  },
  {
    question: "How do I contact an agent?",
    answer: "You can contact an agent by going to the Find an Agent page, selecting the city you're interested in, and using the provided WhatsApp or phone contact details to reach out to them."
  },
  {
    question: "What services do you offer?",
    answer: "We offer a range of services including property listings, connecting clients with agents, and providing detailed information about rental properties in various cities."
  },
  {
    question: "What are the payment options?",
    answer: "Payment options vary depending on the landlord or property manager. Most commonly accepted methods include bank transfer, mobile money, and cash payments."
  },
  {
    question: "Can I schedule a viewing of a property?",
    answer: "Yes, you can schedule a viewing by contacting the agent responsible for the property. They will arrange a convenient time for you to visit and inspect the property."
  },
];

export default function FAQ() {
  const pathname = usePathname();
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const navLinkClasses = (path: string) => 
    `flex items-center text-black cursor-pointer relative ${
      pathname === path ? 'underline' : ''
    }`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50">
     <header className="w-full flex justify-center bg-amber-200 p-5 shadow-md">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center">
            <Image src="/images/r.png" alt="Logo" width={90} height={90} />
            <span className="text-black text-2xl font-bold">Rental</span>
          </div>
          <nav className="flex flex-row items-center gap-x-20">
            <Link legacyBehavior href="/">
              <a className={navLinkClasses('/')}>
                <FaHome className="mr-2" />
                Home
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </Link>
            <Link legacyBehavior href="/listings">
              <a className={navLinkClasses('/listings')}>
                <FaList className="mr-2" />
                Listings
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </Link>
            <Link legacyBehavior href="/services">
              <a className={navLinkClasses('/services')}>
                <FaServicestack className="mr-2" />
                Services
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </Link>
            <Link legacyBehavior href="/agents">
              <a className={navLinkClasses('/agents')}>
                <FaUserTie className="mr-2" />
                Find an Agent
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </Link>
            <Link legacyBehavior href="/faq">
              <a className={navLinkClasses('/faq')}>
                <FaQuestionCircle className="mr-2" />
                FAQ
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-8 bg-amber-100 shadow-lg rounded-lg mt-10">
        <section className="w-full text-center mt-16">
          <h1 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <div className="mt-8 grid grid-cols-1 gap-8">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <button
                    className="text-left text-2xl font-bold text-gray-900 focus:outline-none"
                    onClick={() => toggleQuestion(index)}
                  >
                    {faq.question}
                  </button>
                  <button onClick={() => toggleQuestion(index)} className="focus:outline-none">
                    {selectedQuestion === index ? <FaMinus className="text-xl" /> : <FaPlus className="text-xl" />}
                  </button>
                </div>
                {selectedQuestion === index && (
                  <p className="mt-4 text-lg text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full bg-gray-800 text-white p-4 text-center mt-16">
        <p>&copy; 2024 Rental. All rights reserved.</p>
      </footer>
    </div>
  );
}
