"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaList, FaServicestack, FaQuestionCircle, FaBullseye, FaChartLine, FaTools, FaQuoteLeft, FaUserTie, FaPlusCircle } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import '../app/globals.css';

function navLinkClasses(path: string): string {
  return `nav-link ${path === window.location.pathname ? 'active' : ''}`;
}

const images = [
  '/images/b.jpg',
  '/images/cd.jpg',
  '/images/g.jpg',
  '/images/d.jpg',
  '/images/f.jpg',
  '/images/e.jpg',


];

export default function Home() {
  const pathname = usePathname();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  const navLinkClasses = (path: string) =>
    `flex items-center text-black cursor-pointer relative ${pathname === path ? 'underline' : ''}`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-gray-50">
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

      <div className="flex-grow container h-[500px] mx-auto max-w-[100%] p-0.5 rounded-none bg-amber-500 shadow-lg rounded-lg">
        <section
          className="flex flex-col md:flex-row w-full items-center justify-between bg-cover bg-center h-full text-white p-8 rounded-lg transition-all duration-1000"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          {/**slider **/}
          <div className="md:w-1/5 space-y-4">
            <h1 className="text-4xl font-bold mt-[250px] text-shadow">Find a Good Place in Rwanda</h1>
            <Link legacyBehavior href="/listings">
              <a className="bg-amber-500 text-white px-4 py-2 rounded-lg inline-block cursor-pointer">
                View Listings
              </a>
            </Link>
          </div>
        </section>
      </div>
      {/* end of slider */}

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <FaBullseye className="text-amber-500 text-4xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-700">
            Our mission is to connect people with the best rental properties in Rwanda.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <FaChartLine className="text-amber-500 text-4xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Our Impact</h2>
          <p className="mt-4 text-lg text-gray-700">
            We have helped thousands of people find their perfect rental homes.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <FaTools className="text-amber-500 text-4xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Services</h2>
          <p className="mt-4 text-lg text-gray-700">
            We offer a range of services....
          </p>
        </div>
      </section>

      <section className="w-full text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md relative">
            <FaQuoteLeft className="text-amber-500 text-3xl absolute top-4 left-4" />
            <p className="mt-8 text-gray-700">
              "Rental helped me find a great apartment in Kigali. Highly recommend!"
            </p>
            <span className="block mt-2 text-right text-amber-600">- John Doe</span>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md relative">
            <FaQuoteLeft className="text-amber-500 text-3xl absolute top-4 left-4" />
            <p className="mt-8 text-gray-700">
              "A seamless experience from start to finish. Thank you, Rental!"
            </p>
            <span className="block mt-2 text-right text-amber-600">- Jane Smith</span>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md relative">
            <FaQuoteLeft className="text-amber-500 text-3xl absolute top-4 left-4" />
            <p className="mt-8 text-gray-700">
              "Found a lovely home thanks to Rental. Couldn't be happier!"
            </p>
            <span className="block mt-2 text-right text-amber-600">- Samuel Lee</span>
          </div>
        </div>
      </section>

      <footer className="w-full bg-gray-800 text-white p-4 text-center mt-16">
        <p>&copy; 2024 Rental. All rights reserved.</p>
      </footer>
    </main>
  );
}
