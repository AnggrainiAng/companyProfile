import Image from "next/image";
import React from "react";

import ServicesSection from "../components/ServicesSection";
import Testi from "../components/Testi";
import Testi1 from "../components/Testi1";

const page = () => {
  return (
    <section>
      <section className="h-screen w-screen">
        <section className="absolute flex flex-col justify-center h-full text-white pl-12 pr-12 bg-black w-screen opacity-75 text-center">
          <h1 className="text-4xl font-bold mb-6 tracking-widest">
            You got the style. We got the goods.
          </h1>
          <p className="mb-4">
            Stick to your classic cut, try a new style or personalize your trim.
            We're here to bring out the best in you
          </p>
          <p>
            Browse through our list of grooming services and book your
            appointment today!
          </p>
        </section>
        <Image
          className="h-screen w-screen object-cover "
          src="/services2.webp"
          width="2000"
          height="200"
          alt="hero-services"
        />
      </section>
      <ServicesSection />
      <Testi1 />
      <Testi />
    </section>
  );
};

export default page;
