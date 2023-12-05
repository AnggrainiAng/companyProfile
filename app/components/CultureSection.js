import Head from "next/head";
import Image from "next/image";
import React from "react";
import CultureSection2 from "./CultureSection2";

const CultureSection = () => {
  return (
    <section>
      <section className="flex flex-col justify-center h-screen m-auto px-12 py-32">
        <p className="text-3xl italic mb-4 font-semibold">Uptown's</p>
        <h1 className="text-6xl font-bold mb-6 tracking-widest">
          Culture & <br />
          Benefits
        </h1>
        <p className="italic text-gray-500">
          To clients, Uptown's is the grooming experience they deserve - where
          traditional barbering and modern spa services meet their favorite
          watering hole. To you, Uptown's is an opportunity - to connect with
          clients and the community, to embrace your weird, and to live your
          potential in a fun, fast paced atmosphere.
        </p>
      </section>
      <section className="relative  h-screen w-screen overflow-hidden">
        <section className="absolute inset-0 z-0">
          <Image
            alt="hero-about2"
            src="/culture.jpeg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </section>
      </section>
      <CultureSection2 />
    </section>
  );
};

export default CultureSection;
