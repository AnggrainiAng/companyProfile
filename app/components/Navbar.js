"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="fixed w-screen h-20 shadow-xl z-50 bg-[#080808]">
      <section className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Link href="/">
          <Image src="/2.png" width="200" height="300" alt="/" />
        </Link>
        <section className="text-white font-bold text-2xl">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b ">Home</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm uppercase hover:border-b">
                About Us
              </li>
            </Link>
            <Link href="/services">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Services
              </li>
            </Link>
            <Link href="/team">
              <li className="ml-10 text-sm uppercase hover:border-b">Teams</li>
            </Link>
          </ul>
          <section onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </section>
        </section>
      </section>
      <section
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-[#080808]" : ""
        }
      >
        <section
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#080808] ease-in duration-500 "
              : "fixed left-[100%] top-0 p-0 ease-in duration-500 "
          }
        >
          <section>
            <section className="flex w-full items-center justify-evenly">
              <Image
                className="h-28 w-44 object-cover "
                src="/2.png"
                width="500"
                height="35"
                alt="/"
              />
              <section
                onClick={handleNav}
                className="rounded-full p-3 cursor-pointer bg-white "
              >
                <AiOutlineClose />
              </section>
            </section>
            <section className="border-b text-[#535353] font-bold my-4 ml-6 mr-6 ">
              <p className=" md:w-[90%] py-4 mt-64">More than just a haircut</p>
            </section>
          </section>
          <section className="py-4 flex-col text-[#535353] font-bold pl-6 pr-6 ">
            <ul className="uppercase">
              <li className="py-4 text-sm">
                {" "}
                <Link href="/">Home</Link>
              </li>

              <li className="py-4 text-sm">
                <Link href="/about">About Us</Link>
              </li>

              <li className="py-4 text-sm">
                <Link href="/services">Services</Link>
              </li>

              <li className="py-4 text-sm">
                <Link href="/team">Teams</Link>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
