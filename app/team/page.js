import Image from "next/image";

const page = async () => {
  const respond = await fetch("https://randomuser.me/api/?results=6", {
    next: { revalidate: 10 },
  });
  const { results } = await respond.json();
  console.log(results);

  const roles = [
    {
      role: "Master Barber & Shop Manager",
      expertise: "Expert in classic and contemporary haircuts, shop management",
      email: "manager@barbershop.com",
      phone: "+1 555 101 2021",
    },
    {
      role: "Traditional and Modern Cuts Specialist",
      expertise: "Expert in both traditional and modern haircut styles",
      email: "cutspecialist@barbershop.com",
      phone: "+1 555 106 2026",
    },

    {
      role: "Hair Styling & Texture Specialist",
      expertise: "Focuses on hair texturing and innovative styling",
      email: "stylist@barbershop.com",
      phone: "+1 555 104 2024",
    },
    {
      role: "Beard Grooming Expert",
      expertise: "Skilled in beard shaping and grooming",
      email: "beardguru@barbershop.com",
      phone: "+1 555 103 2023",
    },
    {
      role: "Senior Stylist & Color Specialist",
      expertise: "Specializes in hair coloring and styling",
      email: "colorist@barbershop.com",
      phone: "+1 555 102 2022",
    },
    {
      role: "Apprentice Barber",
      expertise: "Learning all aspects of barbering, client care",
      email: "apprentice@barbershop.com",
      phone: "++1 555 105 2025",
    },
  ];

  return (
    <section>
      <section className="h-screen w-screen">
        <section className="absolute flex flex-col justify-center h-full text-white pl-4 md:pl-12 pr-4 md:pr-12 bg-black w-screen opacity-75 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 tracking-widest">
            Meet the Family.
          </h1>
          <p className="text-sm md:text-base mb-4">
            The barbers you'd trust with your hair and your life. You may know
            us from our years at Uptown's Barber, or maybe you're a new face.
            Either way, you can trust us with yours. Welcome to the family.
          </p>
        </section>
        <Image
          className="h-screen w-screen object-cover"
          src="/barber.jpeg"
          width="2000"
          height="200"
          alt="hero-team"
        />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-screen p-4 md:p-12">
        {results.map((value, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start items-center"
          >
            <Image
              className="rounded-3xl"
              src={value.picture.large}
              width="120"
              height={200}
              objectFit="cover"
              alt="avatar-team"
            />
            <section className="m-2 text-left p-2">
              <h1 className="text-black font-semibold">
                {`${value.name.title} ${value.name.first} ${value.name.last}`}
              </h1>
              <section className="text-xs md:text-sm">
                <h2 className="text-black mt-2">{roles[index].role}</h2>
                <p className="text-black mt-2">{roles[index].expertise}</p>
                <p className="text-black mt-2">Email: {roles[index].email}</p>
                <p className="text-black mt-2">Phone: {roles[index].phone}</p>
              </section>
            </section>
          </div>
        ))}
      </section>
    </section>
  );
};

export default page;
