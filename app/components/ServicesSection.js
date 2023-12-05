"use client";
import React, { useState } from "react";

const services = {
  Hair: [
    {
      category: "Haircut",
      items: [
        "Men's Cut",
        "Men's Cut with Blow",
        "Dry",
        "Head Shave",
        "Hair Art",
        "Kiddie Cut",
        "Kiddie Cut with Shampoo",
      ],
    },
    {
      category: "Hairstyling",
      items: ["Shampoo", "Blow Dry", "Iron", "Brazilian Blow Out"],
    },
    {
      category: "Hair Color",
      items: ["Hair Color", "Organic Color", "Highlights", "Moustache/Beard"],
    },
    {
      category: "Hair Care",
      items: [
        "Revitalizing Hair Treatment",
        "Intense Curing Mask Treatment",
        "Total Hair Repair",
        "Dandruff Control Therapy",
        "Mentholated Scalp Treatment",
        "Scalp Exfoliation Therapy",
        "Hair Growth Therapy",
      ],
    },
    {
      category: "Hair Removal",
      items: [
        "Shave",
        "Beard Art",
        "Threading/Waxing",
        "Eyebrow Shaping",
        "Eyebrows, Moustache",
        "Face",
        "Gray Hair Pulling",
      ],
    },
  ],

  "Facial & Body Care": [
    {
      category: "Facial Care",
      items: ["Hypoallergenic Facial", "Deep Cleansing Facial"],
    },
    {
      category: "Hand Care",
      items: [
        "Quick Dry Polish",
        "Manicure with Quick Dry Polish",
        "Manicure/Nail Cleaning",
        "Manicure with Polish",
        "Nail Art",
      ],
    },
    {
      category: "Foot Care",
      items: [
        "Pedicure with Quick Dry Polish",
        "Foot Spa with Quick Dry Polish",
        "Pedicure/Nail Cleaning",
        "Pedicure with Polish",
        "Foot Spa with Pedicure",
        "Foot Spa with Polish",
      ],
    },
    {
      category: "Massages",
      items: [
        "Body Massage 30 mins",
        "Scalp Massage 15 mins",
        "Back Massage 15 mins",
        "Hand Massage 15 mins",
        "Foot Massage 15 mins",
      ],
    },
    { category: "Other Services", items: ["Ear Cleaning"] },
  ],
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("Hair");

  const renderCategories = (categories) => {
    return categories.map((category, categoryIndex) => (
      <div key={categoryIndex} className="space-y-2">
        <h1 className="text-lg font-semibold">{category.category}</h1>
        <ul className="list-disc list-inside text-black text-base">
          {category.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <section className="w-screen flex flex-col ">
      <section className="flex justify-center bg-gray-200 py-4 text-[#535353] font-bold text-2xl">
        <section className="tabs text-2xl">
          <button
            className={`mr-8 hover:text-black tab tab-lifted ${
              activeTab === "Hair" ? "text-black" : "hover:text-black"
            }`}
            onClick={() => setActiveTab("Hair")}
          >
            Hair
          </button>

          <button
            className={`hover:text-black tab tab-lifted ${
              activeTab === "Facial & Body Care"
                ? "text-black"
                : "hover:text-black"
            }`}
            onClick={() => setActiveTab("Facial & Body Care")}
          >
            Facial & Body Care
          </button>
        </section>
      </section>

      <section className="bg-[#f0f0f0] flex-grow overflow-auto px-12 py-10">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {renderCategories(services[activeTab])}
        </section>
      </section>
    </section>
  );
};

export default ServicesSection;
