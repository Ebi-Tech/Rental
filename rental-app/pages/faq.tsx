// /pages/faq.tsx

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaList, FaServicestack, FaQuestionCircle, FaUserTie, FaPlus, FaMinus, FaPlusCircle } from "react-icons/fa";
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
     <header className="w-full relative items-center bg-gray-950 shadow-md">
                <div className="absolute inset-0 bg-cover bg-center opacity-[5%]" style={{ backgroundImage: 'url(/images/h.jpg)' }}></div>
                <div className="relative flex flex-row items-center ">
                    <Image className="items-start m" src="/images/r.png" alt="Logo" width={200} height={200} />
                    <div className="flex items-center space-x-10 text-white">
                        <nav className="flex flex-row items-center gap-x-[40px] text-white">
                            <Link legacyBehavior href="/" className="text-white">
                                <a className={navLinkClasses('/')}>
                                    <FaHome className="mr-2 ml-10 text-amber-500" />
                                    <p className="text-white"> Home </p>
                                </a>
                            </Link>
                            <Link legacyBehavior href="/listings">
                                <a className={navLinkClasses('/listings')}>
                                    <FaList className="mr-2 text-amber-500" />
                                    <p className="text-white">Listings</p>
                                </a>
                            </Link>
                            <Link legacyBehavior href="/services">
                                <a className={navLinkClasses('/services')}>
                                    <FaServicestack className="mr-2 text-amber-500" />
                                    <p className="text-white">Services</p>
                                </a>
                            </Link>
                            <Link legacyBehavior href="/agents">
                                <a className={navLinkClasses('/agents')}>
                                    <FaUserTie className="mr-2 text-amber-500" />
                                    <p className="text-white">Find an Agent</p>
                                </a>
                            </Link>
                            <Link legacyBehavior href="/faq">
                                <a className={navLinkClasses('/faq')}>
                                    <FaQuestionCircle className="mr-2 text-amber-500" />
                                    <p className="text-white">FAQ</p>
                                </a>
                            </Link>
                            <Link legacyBehavior href="/submit-listing">
                                <a className={navLinkClasses('/submit-listing')}>
                                    <FaPlusCircle className="mr-2 text-amber-500" />
                                    <p className="text-white">Submit Listing</p>
                                </a>
                            </Link>

                        </nav>
                    </div>
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
