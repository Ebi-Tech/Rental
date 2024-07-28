"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaList, FaServicestack, FaQuestionCircle, FaBullseye, FaChartLine, FaTools, FaQuoteLeft, FaUserTie } from "react-icons/fa";
import { usePathname } from 'next/navigation';


function navLinkClasses(path: string): string {
  // Add your logic to determine the class based on the path
  return `nav-link ${path === window.location.pathname ? 'active' : ''}`;
}

export default function Home() {
  const pathname = usePathname();

  const navLinkClasses = (path: string) => 
    `flex items-center text-black cursor-pointer relative ${
      pathname === path ? 'underline' : ''
    }`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-gray-50">
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

      <div className="flex-grow container mx-auto max-w-[100%] p-2 bg-amber-100 shadow-lg rounded-lg mt-10">
        <section className="flex flex-col md:flex-row w-full items-center justify-between bg-gray-800 text-white p-8 rounded-lg">
          <div className="md:w-1/5 space-y-4">
            <h1 className="text-4xl font-bold ">Find a Good Place in Rwanda</h1>
            <Link legacyBehavior href="/listings">
              <a className="bg-amber-500 text-white px-4 py-2 rounded-lg inline-block cursor-pointer">
                View Listings
              </a>
            </Link>
          </div>
          <div className="md:w-[1000px] mt-8 md:mt-0">
            <video className="rounded-lg w-full" controls src="/hero-video.mp4"></video>
          </div>
        </section>
       
      </div>
      <div>
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
      </div>

      <footer className="w-full bg-gray-800 text-white p-4 text-center mt-16">
        <p>&copy; 2024 Rental. All rights reserved.</p>
      </footer>
    </main>
  );
}
