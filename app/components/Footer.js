import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#241610] text-white px-12 pt-16">
      <section className="flex justify-between max-md:flex-col">
        <section className="mb-6 flex flex-col text-center md:text-left max-md:text-left">
          <h2 className="font-bold mb-6 tracking-widest">UPTOWN'S</h2>
          <p className="text-white mb-4 text-sm leading-5">
            Uptown's is the grooming experience every man deserves - <br />
            where traditional barbering and modern spa services meet your
            favorite watering hole. <br />
            Our team of professional and knowledgeable barbers work to help you
            achieve your best look.
            <br /> We thrive on great music, thoughtful conversation and
            fostering relationship in our community. <br />
            {"We’ve"} created a laid back environment for your regular dose of
            self-care. <br />
            Sit back, relax, get groomed - then enjoy a cocktail, coffee, or
            cold one in our private lounge.
          </p>
        </section>

        <section className="mb-6 flex flex-col">
          <h2 className="font-semibold mb-4">Company</h2>
          <Link
            href="/about"
            className="hover:text-gray-500 mb-2 text-sm text-white"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-500 mb-2 text-sm text-white"
          >
            Services
          </Link>
          <Link
            href="/teams"
            className="hover:text-gray-500 mb-2 text-sm text-white"
          >
            Teams
          </Link>
        </section>
      </section>

      <section className="flex justify-between text-center text-white text-sm py-4">
        <section className="flex justify-center md:justify-start space-x-4">
          <Link
            target="_blank"
            href="https://www.facebook.com/login"
            aria-label="facebook"
            className="hover:text-gray-400"
          >
            {<FaFacebookF /> || "facebook"}
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/accounts/login"
            aria-label="instagram"
            className="hover:text-gray-400"
          >
            {<FaInstagram /> || "instagram"}
          </Link>
          <Link
            target="_blank"
            href="https://twitter.com/login"
            aria-label="twitter"
            className="hover:text-gray-400"
          >
            {<FaTwitter /> || "twitter"}
          </Link>
        </section>

        <section>
          <p className="text-xs text-white">
            © 2023 Uptowns. All rights reserved.
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
