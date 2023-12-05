import Image from "next/image";
import Overview from "./Overview";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Link from "next/link";

const Main = () => {
  return (
    <section>
      <section className="h-screen w-screen ">
        <section className="absolute flex flex-col justify-center h-full text-white px-12 py-32 bg-black w-screen opacity-75">
          <h1 className="text-6xl font-bold mb-6 ">
            More than just a <br /> haircut.
          </h1>
          <p className="mt-4 text-2xl mb-10">
            Come in, relax and walk out feeling like a new man.
          </p>
          <Link
            href="/about"
            className="mr-auto border border-white py-2 px-8 rounded hover:bg-white hover:text-black transition ease-in duration-200"
          >
            Know More
          </Link>
        </section>
        <Image
          className="h-screen w-screen object-cover "
          src="/logobanner1.webp"
          width="2000"
          height="200"
          alt="hero-home"
        />
      </section>
      <Overview />
      <Services />
      <Testimonials />
    </section>
  );
};

export default Main;
