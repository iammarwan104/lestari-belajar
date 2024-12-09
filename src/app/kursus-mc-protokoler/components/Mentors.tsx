'use client'
import Image from "next/image";

export default function Mentors() {
  const mentors = [
    { gambar: "/image/mentor-1.webp", nama: "Rudi Rahmat" }
  ];
  return (
    <>
      <section className="bg-cuslor-1">
        <h1 className="text-white mb-6 text-3xl text-center lg:text-3xl font-semibold">
          Mentor
        </h1>
        <div className="flex justify-center">
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
