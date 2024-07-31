// /pages/agents.tsx

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaList, FaServicestack, FaQuestionCircle, FaUserTie, FaWhatsapp, FaPhone, FaEnvelope, FaUser, FaPlusCircle } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import 'tailwindcss/tailwind.css';

const agentsData: { [key: string]: { id: number; name: string; whatsapp: string; phone: string; email: string; }[] } = {
    Kigali: [
        { id: 1, name: "John Doe", whatsapp: "+250 123 456 789", phone: "+250 111 111 111", email: "john@example.com" },
        { id: 2, name: "Jane Smith", whatsapp: "+250 987 654 321", phone: "+250 222 222 222", email: "jane@example.com" },
    ],
    Musanze: [
        { id: 3, name: "Samuel Lee", whatsapp: "+250 123 123 123", phone: "+250 333 333 333", email: "samuel@example.com" },
        { id: 4, name: "Alice Johnson", whatsapp: "+250 456 456 456", phone: "+250 444 444 444", email: "alice@example.com" },
    ],
    Rubavu: [
        { id: 5, name: "Michael Brown", whatsapp: "+250 789 789 789", phone: "+250 555 555 555", email: "michael@example.com" },
        { id: 6, name: "Emily Davis", whatsapp: "+250 321 321 321", phone: "+250 666 666 666", email: "emily@example.com" },
    ],
    Huye: [
        { id: 7, name: "Chris Wilson", whatsapp: "+250 654 654 654", phone: "+250 777 777 777", email: "chris@example.com" },
        { id: 8, name: "Sophia Martinez", whatsapp: "+250 987 987 987", phone: "+250 888 888 888", email: "sophia@example.com" },
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
        `flex items-center text-black cursor-pointer relative ${pathname === path ? 'underline' : ''
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
                            <div className="flex items-center space-x-4">
                                <FaUser className="text-3xl text-amber-500" />
                                <h2 className="text-2xl font-bold mt-4">{agent.name}</h2>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center space-x-2">
                                    <FaWhatsapp className="text-lg text-green-500" />
                                    <p className="text-lg text-gray-700">{agent.whatsapp}</p>
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <FaPhone className="text-lg text-blue-500" />
                                    <p className="text-lg text-gray-700">{agent.phone}</p>
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <FaEnvelope className="text-lg text-red-500" />
                                    <p className="text-lg text-gray-700">{agent.email}</p>
                                </div>
                            </div>
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
