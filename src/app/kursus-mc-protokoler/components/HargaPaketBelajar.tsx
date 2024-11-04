'use client'
import Image from "next/image";

export default function HargaPaketBelajar() {
  const paketBelajar = [
    {
      waktu: "14 Jam",
      harga: "Rp.1.500.000.00",
      keterangan: "Belajar 1 jam perhari",
    },
    {
      waktu: "10 Jam",
      harga: "Rp.1.000.000.00",
      keterangan: "Belajar 1 jam perhari",
    },
    {
      waktu: "7 Jam",
      harga: "Rp.700.000.00",
      keterangan: "Belajar 1 jam perhari",
    },
    {
      waktu: "5 Jam",
      harga: "Rp.500.000.00",
      keterangan: "Belajar 1 jam perhari",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-6 mt-12 md:mt-16 w-[85%] md:w-[70%] xl mx-auto">
      {paketBelajar.map((paket, index) => {
        return (
          <div className="relative mx-auto" key={index}>
            <Image
              src={"/price-large.svg"}
              width={230}
              height={188}
              alt="price-large"
              className="absolute left-1/2 -translate-x-1/2 -top-[1.4rem] md:-top-[1.2rem] lg:-top-[1.4rem] w-[70%] sm:w-[60%] md:w-[80%] xl:w-[70%]"
            />
            <h2 className="absolute w-max left-1/2 -translate-x-1/2 -top-[1.2rem] md:-top-[1rem] lg:-top-[1.3rem] text-[20px] sm:text-[28px] md:text-[20px] lg:text-[24px] xl:text-[26px] font-semibold text-black">
              {paket.waktu}
            </h2>
            <div className="h-[6rem] sm:h-[7rem] xl:h-[8rem] text-center pt-[1.8rem] sm:pt-[2.4rem] rounded-lg mb-8 px-2 bg-[#f5f5f5]">
              <p className="text-[12px] sm:text-[20px] md:text-[12px] lg:text-[14px] xl:text-[18px] font-semibold text-black">
                {paket.harga}
              </p>
              <p className="text-[12px] sm:text-[20px] md:text-[12px] lg:text-[14px] xl:text-[18px] font-semibold text-black">
                {paket.keterangan}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
