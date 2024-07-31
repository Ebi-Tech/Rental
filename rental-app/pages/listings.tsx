"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaList, FaServicestack, FaQuestionCircle, FaUserTie, FaPlusCircle } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import 'tailwindcss/tailwind.css';

function navLinkClasses(path: string): string {
  return `nav-link ${path === window.location.pathname ? 'active' : ''}`;
}

const cities = ["Kigali", "Musanze", "Rubavu", "Huye"];

const listingsData: { [key: string]: { id: number; name: string; price: string; image: string; }[] } = {
  Kigali: [
    { id: 1, name: "Luxury Apartment", price: "$1000/month", image: "/images/house1.jpg" },
    { id: 2, name: "Modern Condo", price: "$800/month", image: "/images/house2.jpg" },
  ],
  Musanze: [
    { id: 3, name: "Cozy Cottage", price: "$600/month", image: "/images/house3.jpg" },
    { id: 4, name: "Mountain View House", price: "$700/month", image: "/images/house4.jpg" },
  ],
  Rubavu: [
    { id: 5, name: "Beachside Villa", price: "$1200/month", image: "/images/house5.jpg" },
    { id: 6, name: "Lakefront Bungalow", price: "$1100/month", image: "/images/house6.jpg" },
  ],
  Huye: [
    { id: 7, name: "Historical Home", price: "$750/month", image: "/images/house7.jpg" },
    { id: 8, name: "University Apartment", price: "$650/month", image: "/images/house8.jpg" },
  ],
};

export default function Listings() {
  const pathname = usePathname();
  const [selectedCity, setSelectedCity] = useState<string>("Kigali");
  const [listings, setListings] = useState(listingsData[selectedCity]);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value;
    setSelectedCity(city);
    setListings(listingsData[city]);
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
            <h1 className="text-4xl font-bold">Available Houses in {selectedCity}</h1>
            <select onChange={handleCityChange} className="bg-amber-500 text-white px-2 py-2 rounded-lg">
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white p-6 rounded-lg shadow-md">
              <Image src={listing.image} alt={listing.name} width={500} height={300} className="rounded-lg" />
              <h2 className="text-2xl font-bold mt-4">{listing.name}</h2>
              <p className="text-lg text-gray-700 mt-2">{listing.price}</p>
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
