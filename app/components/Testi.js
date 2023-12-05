"use client";
import Image from "next/image";
import React, { useState } from "react";

const Testi = () => {
  const testiData = [
    {
      text: "By far my favorite haircut experience ever",
      name: "Alex",
      image: "/avatar1.png",
    },
    {
      text: "Love coming here. Friendly bunch, easy going and excellent service. Thanks Tommy, Matt and the team.",
      name: "Marston",
      image: "/noprofile.jpeg",
    },
    {
      text: " Love this place! I highly recommend it to anyone looking for a new shop.",
      name: "Jay",
      image: "/avatar2.png",
    },
    {
      text: "Tommy's awesome- I always leave him looking better than when I walked in. He's careful and considerate with every cut, and will ensure I'm not asking for a silly haircut and really knows his styles. Plus, he's super cool to talk to. The shop's chilled out, clean, and I never have to wait too long with an appointment. Highly recommend him if you want a solid haircut in a relaxed chair",
      name: "Daniel",
      image: "/noprofile.jpeg",
    },
    {
      text: "Super friendly and helpful team. The service here is always an A+.",
      name: "Ray",
      image: "/avatar3.png",
    },
    {
      text: "Always awesome. Will is great and the banter is fantastic. No complaints whatsoever",
      name: "Andy",
      image: "/noprofile.jpeg",
    },
    {
      text: "Awesome haircut. Awesome drinks. Awesome atmosphere",
      name: "Michael",
      image: "/avatar4.png",
    },
    {
      text: "Fantastic service. The staff were friendly, professional and very helpful. After a long seven years without a proper cut I was quite nervous about getting so much cut off but Uptown's was fantastic about deciphering my non-hair-savvy ramblings about what I would like length/style wise and I'm very happy with the result! I will be going back next time I need a cut or a tidy up!",
      name: "Ian",
      image: "/noprofile.jpeg",
    },
  ];
  const truncateText = (text, length, expand) => {
    return expand || text.length <= length
      ? text
      : text.substring(0, length) + "...";
  };

  return (
    <section className="bg-gray-100 sm:p-8">
      <section className="max-w-6xl max-md:p-6 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {testiData.map((testi, index) => {
          const [isExpanded, setIsExpanded] = useState(false);

          return (
            <section
              key={index}
              className="bg-white  sm:p-6 rounded-2xl shadow-lg flex flex-col space-y-3 max-md:p-2"
            >
              <section className="flex items-center space-x-3">
                <section className="flex-shrink-0">
                  <Image
                    src={testi.image}
                    alt={testi.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </section>
                <p className="text-black font-semibold">{testi.name}</p>
              </section>
              <p className="text-gray-500 text-xs sm:text-sm ">
                {truncateText(testi.text, 90, isExpanded)}
                {testi.text.length > 90 && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[#241710] hover:border-b transition duration-300 ease-in-out"
                  >
                    {isExpanded ? " Read less" : " Read more"}
                  </button>
                )}
              </p>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default Testi;
