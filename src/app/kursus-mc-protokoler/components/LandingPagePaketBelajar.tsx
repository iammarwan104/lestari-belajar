"use client";
import Image from "next/image";

export interface JenisMobil {
  gambar: string;
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
        <div className="flex flex-col-reverse md:flex-row gap-8 justify-end md:justify-between items-end md:items-center">
          <div className="text-white w-full text-center md:text-left flex justify-center md:justify-start items-center md:items-start flex-col gap-4 ">
            <h1 className="text-3xl lg:text-5xl font-semibold">
              {jenisMobil.nama}
            </h1>
            <p className="w-[90%] sm:w-[80%]">{jenisMobil.deskripsi}</p>
          </div>
          <div className="w-full flex justify-center items-center">
                <Image
                  src={jenisMobil.gambar}
                  width={330}
                  height={460}
                  alt={"Hero Mc & Protokoler"}
                  className="block"
                />
          </div>
        </div>
    </>
  );
}
