import LandingPagePaketBelajar from "./components/LandingPagePaketBelajar";
import MateriKursus from "./components/MateriKursus";
import Mentors from "./components/Mentors";
import Pertanyaan from "./components/Pertanyaan";
import Testimoni from "./components/Testimoni";

export default function Page() {
  const jenisMobil = [
    {
      gambar: "/image/kursus-mengemudi-hero.webp",
      nama: "Mobil Matic & Manual",
      tempatDuduk: "Belajar Setiap Hari (Pagi, Siang atau Sore)",
      mesin: "Sertifikat (Tambah biaya admin)",
      tenaga: "syarat & ketentuan berlaku",
    }
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
