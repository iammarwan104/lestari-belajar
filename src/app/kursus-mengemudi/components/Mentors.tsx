'use client'
import Image from "next/image";

export default function Mentors() {
  const mentors = [
    { gambar: "/image/mentor-1.webp", nama: "Rudi Rahmat" },
    { gambar: "/image/mentor-2.webp", nama: "Takdir" },
    { gambar: "/image/mentor-3.webp", nama: "Mawardi Rahman" },
  ];
  return (
    <>
      <section className="bg-cuslor-1 pt-16">
        <h1 className="text-white mb-6 text-3xl text-center lg:text-3xl font-semibold">
          Para Mentor
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 xl:gap-0 justify-center md:w-[80%] lg:w-[75%] xl:w-[60%]  mx-auto">
          {mentors.map((mentor, index) => {
            return (
              <div key={index} className="flex flex-col gap-4 justify-center items-center">
                <Image
                  src={mentor.gambar}
                  width={150}
                  height={200}
                  alt="Mentor"
                  className="lg:w-[60%]"
                />
                <h4 className="text-white text-center font-semibold text-[16px]">
                  {mentor.nama}
                </h4>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
