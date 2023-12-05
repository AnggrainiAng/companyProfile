"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  const testimonialsData = [
    {
      text: "By far my favorite haircut experience ever",
      name: "Alex",
      image: "/avatar1.png",
    },
    {
      text: " Love this place! I highly recommend it to anyone looking for a new shop.",
      name: "Jay",
      image: "/avatar2.png",
    },
    {
      text: "Super friendly and helpful team. The service here is always an A+.",
      name: "Ray",
      image: "/avatar3.png",
    },
    {
      text: "Awesome haircut. Awesome drinks. Awesome atmosphere",
      name: "Michael",
      image: "/avatar4.png",
    },
  ];
  return (
    <section className="bg-[#f0f0f0] px-12 py-32">
      <section className="container mx-auto px-4 lg:px-12">
        <h2 className="text-4xl font-semibold text-center mb-6">
          THE PEOPLE <br /> HAVE SPOKEN
        </h2>
        <section className="flex items-center justify-center mb-6">
          <span className="text-yellow-400 text-2xl">★★★★★</span>
          <p className="text-xl ml-2">4.9 / 5 | 4,000+ Google Reviews</p>
        </section>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className=" w-full h-auto"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="bg-white p-6 mx-2 rounded-lg shadow-md flex flex-col items-center justify-center
              sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <p className="text-gray-600 text-center mb-4">
                {testimonial.text}
              </p>
              <section className="flex flex-col items-center">
                <section className="mr-3">
                  <Image
                    className="rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                  />
                  <p className="text-lg font-medium text-center">
                    {testimonial.name}
                  </p>
                </section>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default Testimonials;
