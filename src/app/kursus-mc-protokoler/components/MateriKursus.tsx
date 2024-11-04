'use client'
import Image from "next/image";

interface MateriKursus {
  gambar: string;
  deskripsi: string;
}
export default function MateriKursus() {
  const materiKursus = [
    {
      gambar: "/image/tools.png",
      deskripsi: "Pengenalan tools kendaraan dan cara kerjanya",
    },
    {
      gambar: "/image/water.png",
      deskripsi:
        "Pengecekan rutin ringan kendaraan (oli, battery, air radiator, air wiper)",
    },
    {
      gambar: "/image/tools.png",
      deskripsi: "Teori start dan stop beserta prakteknya",
    },
    {
      gambar: "/image/turn-left.png",
      deskripsi: "Teori haluan saat berkendara beserta prakteknya",
    },
    {
      gambar: "/image/uphill.png",
      deskripsi: "Teori tanjakan beserta prakteknya",
    },
    {
      gambar: "/image/parking.png",
      deskripsi:
        "Teori parkir beserta prakteknya (parkir paralel, parkir L, dan parkir serong)",
    },
    {
      gambar: "/image/blind-spot.png",
      deskripsi: "Teori Blind Spot area beserta prakteknya",
    },
    {
      gambar: "/image/good.png",
      deskripsi: "Pemantapan berkendara di jalan raya",
    },
  ];
  return (
    <>
      <section className="bg-cuslor-1 pt-8">
        <h1 className="text-white mb-16 text-3xl text-center lg:text-3xl font-semibold">
          Materi Kursus
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-center gap-4 mt-12 md:mt-4 w-[85%] md:w-[75%] xl:w-[60%] mx-auto">
          {materiKursus.map((materiKursus, index) => {
            return (
              <div key={index} className="relative mx-auto">
                <Image
                  src={"/kursus.svg"}
                  width={230}
                  height={188}
                  alt="price-large"
                  className="absolute left-1/2 -translate-x-1/2 -top-[1.6rem] md:-top-[1.4rem] lg:-top-[1.8rem] w-[60%] sm:w-[40%] md:w-[60%]"
                />
                <Image
                  src={materiKursus.gambar}
                  width={50}
                  height={50}
                  alt="logo materi"
                  className="absolute w-[1.6rem] left-1/2 -translate-x-1/2 -top-[1.2rem] md:-top-[1rem] lg:-top-[1.6rem] xl:-top-[1.2rem] md:w-[1.6rem] lg:w-[2.4rem] xl:w-[2.3rem]"
                />
                <div className="h-[8rem] flex justify-center items-center rounded-lg mb-8 px-2 bg-[#f5f5f5]">
                  <p className="text-black text-center text-[12px] lg:text-[13px] lg:pt-6">
                    {materiKursus.deskripsi}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
