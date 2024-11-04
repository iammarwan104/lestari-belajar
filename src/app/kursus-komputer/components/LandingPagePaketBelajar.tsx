"use client";
import Image from "next/image";
import HargaPaketBelajar from "./HargaPaketBelajar";
import { RiH1 } from "react-icons/ri";
import MateriKursus from "./MateriKursus";

export interface JenisMobil {
  gambar: string[];
  nama: string;
  deskripsi: string;
}

export default function LandingPagePaketBelajar({
  jenisMobil,
}: {
  jenisMobil: JenisMobil;
}) {
  return (
    <>
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-0 justify-center md:justify-between items-center md:items-center">
          <div className= "text-white sm:w-[80vw] md:w-[50vw] lg:w-[50vw] text-center md:text-left flex justify-center md:justify-start items-center md:items-start flex-col gap-4">
            <h1 className="text-3xl lg:text-5xl font-semibold">
              {jenisMobil.nama}
            </h1>
            <p className="w-full lg:w-[85%]">{jenisMobil.deskripsi}</p>
          </div>
          <div className="sm:w-[50vw] md:w-[50vw] lg:w-[50vw] xl:h-[60vh] flex flex-wrap justify-center items-center gap-8">
            {jenisMobil.gambar.map((gambar, index) => {
              return (
                <Image
                  src={gambar}
                  width={220}
                  height={220}
                  alt={"Hero landing page"}
                  key={index}
                  className="block w-1/3"
                />
              );
            })}
          </div>
        </div>
      <HargaPaketBelajar />
      <MateriKursus/>
    </>
  );
}
