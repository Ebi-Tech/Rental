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

export default function SubmitListing() {
  const pathname = usePathname();
  const [form, setForm] = useState({
    owner: '',
    apartmentType: '',
    price: '',
    address: '',
    city: 'Kigali',
    image: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "image" && e.target instanceof HTMLInputElement && e.target.files) {
      setForm({ ...form, [name]: e.target.files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", form);
    // Here you can handle form submission, e.g., send data to a server or update the state
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
        <section className="flex flex-col w-full items-center bg-white text-gray-800 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-8">Submit Your Listing</h1>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="owner">
                Owner Name
              </label>
              <input
                type="text"
                name="owner"
                id="owner"
                value={form.owner}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="apartmentType">
                Apartment Type
              </label>
              <input
                type="text"
                name="apartmentType"
                id="apartmentType"
                value={form.apartmentType}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="price">
                Price per Annum
              </label>
              <input
                type="text"
                name="price"
                id="price"
                value={form.price}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={form.address}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="city">
                City
              </label>
              <select
                name="city"
                id="city"
                value={form.city}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Kigali">Kigali</option>
                <option value="Musanze">Musanze</option>
                <option value="Rubavu">Rubavu</option>
                <option value="Huye">Huye</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="image">
                Upload Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="w-full bg-gray-800 text-white p-4 text-center mt-16">
        <p>&copy; 2024 Rental. All rights reserved.</p>
      </footer>
    </div>
  );
}
