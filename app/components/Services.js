import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="flex max-md:flex-col justify-center w-screen h-screen px-12 lg:py-32">
      <section className="flex flex-col justify-center lg:h-full max-md:h-max ">
        <h1 className="text-4xl font-bold lg:mb-4 ">UPGRADE YOUR STYLE</h1>
        <p className="mb-2 tracking-widest leading-loose max-md:hidden">
          Look and feel better from head to toe with our range of services. From
          haircuts to massages and overall grooming, treat yourself to a day at
          Uptown's Barbers.
        </p>
        <Link
          href="/services"
          className="mr-auto border border-black bg-black text-white py-2 px-8 rounded hover:bg-white hover:text-black transition ease-in duration-200 max-md:hidden"
        >
          View Services
        </Link>
      </section>

      <Image
        className="flex rounded-3xl w-full h-auto lg:m-auto items-center justify-center p-4 object-cover hover:scale-105 ease-in duration-300 max-md:my-10 "
        src="/services.jpeg"
        width="200"
        height="200"
        alt="services"
      />
      <p className="tracking-widest leading-loose max-md:block lg:hidden mb-10">
        Look and feel better from head to toe with our range of services. From
        haircuts to massages and overall grooming, treat yourself to a day at
        Uptown's Barbers.
      </p>
      <Link
        href="/services"
        className="mr-auto border border-black bg-black text-white py-2 px-8 rounded hover:bg-white hover:text-black transition ease-in duration-200 max-md:block lg:hidden"
      >
        View Services
      </Link>
    </section>
  );
};

export default Services;
