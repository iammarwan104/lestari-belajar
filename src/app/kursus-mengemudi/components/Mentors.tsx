'use client'
import Image from "next/image";

export default function Mentors() {
  const mentors = [
    { gambar: "/image/mengemudi-1.webp", nama: "Syamsul Alam" },
    { gambar: "/image/mengemudi-2.webp", nama: "Samsumarlin" },
  ];
  return (
    <>
      <section className="bg-cuslor-1 pt-16">
        <h1 className="text-white mb-6 text-3xl text-center lg:text-3xl font-semibold">
          Para Mentor
        </h1>
        <div className="grid grid-cols-2 justify-center items-start md:w-[80%] lg:w-[75%] xl:w-[60%] mx-auto">
          {mentors.map((mentor, index) => {
            return (
              <div key={index} className="flex flex-col gap-4 justify-center items-center">
                <Image
                  src={mentor.gambar}
                  width={163}
                  height={244}
                  alt="Mentor"
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
