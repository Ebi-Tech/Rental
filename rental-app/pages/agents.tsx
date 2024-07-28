// /pages/agents.tsx

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaList, FaServicestack, FaQuestionCircle, FaUserTie } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import 'tailwindcss/tailwind.css';

function navLinkClasses(path: string): string {
  return `nav-link ${path === window.location.pathname ? 'active' : ''}`;
}

const agentsData = {
  Kigali: [
    { id: 1, name: "John Doe", whatsapp: "+250 123 456 789" },
    { id: 2, name: "Jane Smith", whatsapp: "+250 987 654 321" },
  ],
  Musanze: [
    { id: 3, name: "Samuel Lee", whatsapp: "+250 123 123 123" },
    { id: 4, name: "Alice Johnson", whatsapp: "+250 456 456 456" },
  ],
  Rubavu: [
    { id: 5, name: "Michael Brown", whatsapp: "+250 789 789 789" },
    { id: 6, name: "Emily Davis", whatsapp: "+250 321 321 321" },
  ],
  Huye: [
    { id: 7, name: "Chris Wilson", whatsapp: "+250 654 654 654" },
    { id: 8, name: "Sophia Martinez", whatsapp: "+250 987 987 987" },
  ],
};

export default function Agents() {
  const pathname = usePathname();
  const [selectedCity, setSelectedCity] = useState<string>("Kigali");
  const [agents, setAgents] = useState(agentsData[selectedCity]);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value;
    setSelectedCity(city);
    setAgents(agentsData[city]);
  };

  const navLinkClasses = (path: string) => 
    `flex items-center text-black cursor-pointer relative ${
      pathname === path ? 'underline' : ''
    }`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50">
      <header className="w-full flex justify-center bg-amber-200 p-6 shadow-md">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center">
            <Image src="/images/r.png" alt="Logo" width={190} height={190} />
            <span className="text-black text-2xl font-bold">Rental</span>
          </div>
          <nav className="flex flex-row items-center gap-10">
            <Link legacyBehavior href="/">
              <a className={navLinkClasses('/')}>
                <FaHome className="mr-2" />
                Home
              </a>
            </Link>
            <Link legacyBehavior href="/listings">
              <a className={navLinkClasses('/listings')}>
                <FaList className="mr-2" />
                Listings
              </a>
            </Link>
            <Link legacyBehavior href="/services">
              <a className={navLinkClasses('/services')}>
                <FaServicestack className="mr-2" />
                Services
              </a>
            </Link>
            <Link legacyBehavior href="/find-agent">
              <a className={navLinkClasses('/find-agent')}>
                <FaUserTie className="mr-2" />
                Find an Agent
              </a>
            </Link>
            <Link legacyBehavior href="/faq">
              <a className={navLinkClasses('/faq')}>
                <FaQuestionCircle className="mr-2" />
                FAQ
              </a>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-8 bg-amber-100 shadow-lg rounded-lg mt-10">
        <section className="flex flex-col md:flex-row w-full items-center justify-between bg-gray-800 text-white p-8 rounded-lg">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">Agents in {selectedCity}</h1>
            <select onChange={handleCityChange} className="bg-amber-500 text-white px-4 py-2 rounded-lg">
              {Object.keys(agentsData).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mt-4">{agent.name}</h2>
              <p className="text-lg text-gray-700 mt-2">WhatsApp: {agent.whatsapp}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="w-full bg-gray-800 text-white p-4 text-center mt-16">
        <p>&copy; 2024 Rental. All rights reserved.</p>
      </footer>
    </div>
  );
}
