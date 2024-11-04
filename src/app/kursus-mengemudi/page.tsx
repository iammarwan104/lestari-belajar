import LandingPagePaketBelajar from "./components/LandingPagePaketBelajar";
import MateriKursus from "./components/MateriKursus";
import Mentors from "./components/Mentors";
import Pertanyaan from "./components/Pertanyaan";
import Testimoni from "./components/Testimoni";

export default function Page() {
  const jenisMobil = [
    {
      jenis: "Paket Manual",
      gambar: "/image/avanza.png",
      nama: "Toyota Avanza 1.3 G M/T",
      tempatDuduk: "Tempat duduk 7 kursi",
      mesin: "mesin 1329 cc",
      tenaga: "Tenaga 91 HP",
    },
    {
      jenis: "Paket Matic",
      gambar: "/image/rush.png",
      nama: "Toyota Rush G MT",
      tempatDuduk: "Tempat duduk 7 kursi",
      mesin: "mesin 1496 cc",
      tenaga: "Tenaga 103 HP",
    },
  ];
  return (
    <>
      <section className="bg-cuslor-1 py-12 md:pt-10 h-fit md:h-fit lg:h-max px-4 lg:px-24 mx-auto">
        {jenisMobil.map((mobil, index) => {
          return <LandingPagePaketBelajar key={index} jenisMobil={mobil} />;
        })}
      </section>
      <MateriKursus />
      <Mentors />
      <Testimoni />
      <Pertanyaan />
    </>
  );
}
