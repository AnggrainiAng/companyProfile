import Image from "next/image";
import React from "react";
import CultureSection from "../components/CultureSection";
import CompanyTeam from "../components/CompanyTeam";

const page = () => {
  return (
    <section>
      <section className="h-screen w-screen ">
        <section className="absolute flex flex-col justify-center h-full text-white px-12 py-32 bg-black w-screen opacity-75 text-center">
          <h1 className="text-4xl font-bold mb-6 tracking-widest">
            We go way back.
          </h1>
          <p className="mb-4">
            Established in 1989, Uptown's Barbers has grown to a large network
            of branches nation wide.
          </p>
          <p className="mb-2">
            With its stylish, modern interiors, and commitment to providing
            excellent customer service, it has become the go-to place for men
            grooming in Indonesia.
          </p>
        </section>
        <Image
          className="h-screen w-screen object-cover "
          src="/logoabout.jpeg"
          width="2000"
          height="200"
          alt="hero-about"
        />
      </section>
      <CompanyTeam />
      <CultureSection />
    </section>
  );
};

export default page;
