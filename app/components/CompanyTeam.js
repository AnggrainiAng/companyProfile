import Image from "next/image";
import Link from "next/link";
import React from "react";

const CompanyTeam = () => {
  const description = [
    {
      role: "Master Barber & Shop Manager",
      expertise: "Expert in classic and contemporary haircuts, shop management",
      email: "manager@barbershop.com",
      phone: "+1 555 101 2021",
      image: "/avatar1.png",
    },
    {
      role: "Traditional and Modern Cuts Specialist",
      expertise: "Expert in both traditional and modern haircut styles",
      email: "cutspecialist@barbershop.com",
      phone: "+1 555 106 2026",
      image: "/avatar2.png",
    },

    {
      role: "Hair Styling & Texture Specialist",
      expertise: "Focuses on hair texturing and innovative styling",
      email: "stylist@barbershop.com",
      phone: "+1 555 104 2024",
      image: "/avatar3.png",
    },
  ];
  return (
    <section className="bg-[#f0f0f0] py-32 px-12">
      <section className="flex flex-col items-center text-center space-y-6 px-4">
        <p className="italic text-lg sm:text-xl">Skilled Barbers</p>
        <h1 className="text-2xl sm:text-4xl font-bold tracking-widest">
          Unmatched Attention to Detail.
        </h1>
        <p className="text-black">
          Check out the team below and get yourself booked in with one of our
          talented barbers. All of our barbers have a minimum of 5 years
          experience and have been trained to the highest standard.
        </p>

        <p className="text-black">
          more{" "}
          <Link
            href="/team"
            aria-label="teams"
            className="text-black hover:underline"
          >
            teams.
          </Link>
        </p>

        <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto">
          {description.map((member, index) => (
            <section
              key={index}
              className="group relative bg-white rounded-lg shadow overflow-hidden"
            >
              <section className="w-full h-60 relative">
                <Image
                  src={member.image}
                  alt={member.role}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 ease-in-out transform group-hover:scale-110"
                />
              </section>
              <section className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                <section className="text-center text-white px-4">
                  <p className="text-lg font-semibold">{member.role}</p>
                  <p>{member.expertise}</p>
                  <p>{member.email}</p>
                  <p>{member.phone}</p>
                </section>
              </section>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
};

export default CompanyTeam;
