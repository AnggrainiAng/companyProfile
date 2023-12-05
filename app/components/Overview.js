import React from "react";

const Overview = () => {
  return (
    <section className="h-screen w-screen bg-[#f0f0f0]">
      <section className="absolute flex flex-col justify-center h-full m-auto px-12 py-32 text-center ">
        <h1 className="text-4xl font-bold mb-6">DO YOURSELF A FAVOR</h1>

        <p className="tracking-widest items-center leading-loose text-gray-500">
          Uptown's is the grooming experience every man deserves - where
          traditional barbering and <br />
          modern spa services meet your favorite watering hole. <br />
          Our team of professional and knowledgeable barbers work to
          <br /> help you achieve your best look. We thrive on great music,
          thoughtful <br /> conversation and fostering relationship in our
          community. <br /> We've created a laid back environment for your
          regular dose of self-care. Sit back, relax, get groomed - then enjoy a
          cocktail, coffee, or cold one in our private lounge.
        </p>
      </section>
    </section>
  );
};

export default Overview;
