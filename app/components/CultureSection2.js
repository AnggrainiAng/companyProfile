"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CultureSection2 = () => {
  const testimonialsData = [
    {
      text: "At the end of the day, we're in the business of making people feel good about themselves. Sit back and relax. Have a drink. Have some fun. Be weird, be kind and keep things in perspective. Give a Damn We hope and expect ourselves and our employees to, simply put, give a damn. What does that mean? Stay committed to greatness and hold themselves to a higher standard. Expect excellence, do more with less, always raise the bar, lead others and be humble. ",
      name: "Embrace Your Weird",
    },
    {
      text: "We say we're the best part of your day. And we mean it. We're confident the un experience will leave you looking good, feeling great and saying damn. What's our secret? Passion, positivity, enthusiasm, and flashin' them pearly whites to everyone who walks in the door.",
      name: "Be a Day-Maker",
    },
    {
      text: "Give change a big ol' hug and invite it to stick around — because as far as we're concerned, the only comfort zone we need is a plush sectional sofa for the occasional binge sesh. We credit pushing our limits for many successes along the way and don't ever expect it to stop.",
      name: "Push Your Limits",
    },
    {
      text: "We hope and expect ourselves and our employees to, simply put, give a damn. What does that mean? Stay committed to greatness and hold themselves to a higher standard. Expect excellence, do more with less, always raise the bar, lead others and be humble.",
      name: "Give a Damn",
    },
    {
      text: "We're relationship people. We care about our clients, employees and communities. We communicate, listen and learn. We create and foster connections, hold ourselves accountable, and establish trust. And, the pinnacle of all successful relationships, we make a mean Manhattan.",
      name: "Create Real Relationships",
    },
  ];
  return (
    <section className="bg-gray-100 lg:px-12 py-32">
      <section className="container mx-auto px-4 lg:px-12">
        <p className=" italic mb-4 ">Our Core Values</p>
        <h1 className="text-6xl font-bold mb-6 tracking-widest">
          What We <br />
          Believe In
        </h1>

        <section className="flex">
          <section className="lg:flex-grow"></section>
          <section className="flex-none lg:w-[80%] max-md:w-full">
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
              className="lg:w-[80%] "
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center
              sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <h1 className="text-2xl font-bold mb-6 tracking-widest">
                    {testimonial.name}
                  </h1>
                  <p className="text-gray-500 mb-4">{testimonial.text}</p>
                  <section className="flex flex-col items-center"></section>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </section>
      </section>
    </section>
  );
};

export default CultureSection2;
