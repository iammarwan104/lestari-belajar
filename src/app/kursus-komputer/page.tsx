import LandingPagePaketBelajar from "./components/LandingPagePaketBelajar";
import MateriKursus from "./components/MateriKursus";
import Mentors from "./components/Mentors";
import Pertanyaan from "./components/Pertanyaan";
import Testimoni from "./components/Testimoni";

export default function Page() {
  const jenisMobil = [
    {
      gambar: ["/image/word-logo.png", "/image/exel-logo.png", "/image/power-point-logo.webp"],
      nama: "Office Software",
      deskripsi: "Anda akan diajarkan menggunakan aplikasi yang sering digunakan didunia perkantoran,anda akan menerima materiyang berstandar nasional serta diajari oleh mentor mentor yang berpengalaman"
    },
    {
      gambar: ["/image/photoshop.png", "/image/coreldraw.png"],
      nama: "Garafigh Design",
      deskripsi: "Anda akan diajarkan menggunakan aplikasi yang sering digunakan didunia perkantoran,anda akan menerima materiyang berstandar nasional serta diajari oleh mentor mentor yang berpengalaman"
    },
  ];
  return (
    <>
      <section className="bg-cuslor-1 py-12 md:pt-10 h-fit md:h-fit lg:h-max px-4 lg:px-24 mx-auto">
        {jenisMobil.map((mobil, index) => {
          return <LandingPagePaketBelajar key={index} jenisMobil={mobil} />;
        })}
      </section>
      <Mentors />
      <Testimoni />
      <Pertanyaan />
    </>
  );
}
