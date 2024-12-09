import type { CustomFlowbiteTheme } from "flowbite-react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Flowbite,
} from "flowbite-react";
import Link from "next/link";

export default function Pertanyaan() {
  const pertanyaanPertanyaan = [
    {
      pertanyaan: "Rute latihannya kemana ?",
      jawaban:
        "Bagi siswa yang tidak memiliki dasar mengudi, maka akan diajari terlebih dahulu dasar dasar mengemudi ditempat yang sepi dari pengendara",
    },
    {
      pertanyaan: "Bagaimana sistem belajarnya ?",
      jawaban:
        "Sistem Pembelajaran di Lestari Mengemudi menggunakan Sistem Privat dimana Satu Siswa Satu Mobil bukan Sistem Rombongan",
    },
    {
      pertanyaan: "Pendaftar kursus dapat dilakukan dimana ?",
      jawaban:
        "Pendaftaran bisa dilakukan dengan langsung datang langsung ke kantor Lestari Belajar.",
    },
    {
      pertanyaan: "Apa persyaratan untuk mendaftar ?",
      jawaban:`1. Menyerahkan pas foto 3x4 2 lembar, 2. Membawa KTP (Kartu Tanda Penduduk), 3. Umur minimal 17 tahun`
    },{
      pertanyaan: "Apakah instrukturnya galak ?",
      jawaban: `Kami pastikan instrukturnya profesional, sopan dan memiliki etika yang baik. Apabila pelayanan instruktur kami kurang memuaskan silakan berikan nilai dan komentar ada pada halaman quesioner dengan mengklik text`
    }
  ];

  const customTheme: CustomFlowbiteTheme = {
    accordion: {
      root: {
        base: "dark:divide-gray-700",
        flush: {
          off: "rounded-lg",
          on: "",
        },
      },
      content: {
        base: "p-5 first:rounded-t-lg text-black last:rounded-b-lg dark:bg-gray-900 bg-cuslor-4 dark:bg-cuslor-4",
      },
      title: {
        arrow: {
          base: "h-6 w-6 shrink-0",
          open: {
            off: "",
            on: "rotate-180",
          },
        },
        base: "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
        flush: {
          off: "bg-white hover:bg-gray-200 dark:hover:bg-gray-200",
          on: "",
        },
        heading: "",
        open: {
          off: "text-black dark:text-black",
          on: "bg-gray-200 text-black dark:bg-gray-200 dark:text-black",
        },
      },
    },
  };

  return (
    <section className="bg-cuslor-1 pt-6">
      <h1 className="text-white mb-8 text-3xl text-center lg:text-3xl font-semibold">
        FAQ
      </h1>
      <div className="w-[90%] md:w-[90%] mx-auto">
        <Flowbite theme={{ theme: customTheme }}>
          <Accordion>
            {pertanyaanPertanyaan.map((pertanyaan, index) => {
              return (
                <AccordionPanel key={index}>
                  <AccordionTitle>
                    <span>{pertanyaan.pertanyaan}</span>
                  </AccordionTitle>
                  <AccordionContent>{pertanyaan.jawaban} {pertanyaan.jawaban.includes("halaman")? <Link href="/quesioner" className="text-cuslor-1 hover:text-blue-500 font-semibold">ini</Link>: pertanyaan.jawaban }</AccordionContent>
                </AccordionPanel>
              );
            })}
          </Accordion>
        </Flowbite>
      </div>
    </section>
  );
}