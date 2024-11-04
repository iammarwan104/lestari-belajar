'use client'
import Image from "next/image";
import HargaPaketBelajar from "./HargaPaketBelajar";

export interface JenisMobil {
  jenis: string;
  gambar: string;
  nama: string;
  tempatDuduk: string;
  mesin: string;
  tenaga: string;
}

export default function LandingPagePaketBelajar({
  jenisMobil,
}: {
  jenisMobil: JenisMobil;
}) {
  return (
    <>
      <div>
        <h1 className="mb-12 text-3xl text-white text-center lg:text-3xl font-semibold">
          {jenisMobil.jenis}
        </h1>
        <div className="flex flex-col-reverse md:flex-row gap-8 justify-end md:justify-between items-end md:items-center">
          <div className="text-white w-full text-center md:text-left flex justify-center md:justify-start items-center md:items-start flex-col gap-4 ">
            <h2 className="text-3xl lg:text-5xl font-semibold">
              {jenisMobil.nama}
            </h2>
            <p className="flex flex-col text-2xl gap-2 leading-none">
              <span>{jenisMobil.tempatDuduk}</span>{" "}
              <span>{jenisMobil.mesin}</span> <span>{jenisMobil.tenaga}</span>
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <Image
              src={jenisMobil.gambar}
              width={662}
              height={664}
              alt={"Hero landing page"}
              className="block w-full"
            />
          </div>
        </div>
      </div>
      <HargaPaketBelajar/>
    </>
  );
}
