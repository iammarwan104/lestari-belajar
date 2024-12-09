'use client'
import Image from "next/image";

export default function Testimoni() {
  const users = [
    {
      gambar: "/image/testimony-1.webp",
      nama: "Sofyan Alfian",
      komentar:
        "Awalnya saya sangat gugup belajar mengemudi. Tapi berkat instruktur yang sabar dan metode pembelajaran yang menyenangkan, saya jadi cepat menguasai. Sekarang saya bisa mengemudi dengan percaya diri",
    },
    {
      gambar: "/image/testimony-2.webp",
      nama: "Muh Ayyub Bari",
      komentar:
        "Saya sangat puas dengan kursus mengemudi ini. Instrukturnya sangat profesional dan sabar. Berkat kursus ini, saya tidak hanya bisa mengemudi dengan baik, tapi juga lebih paham tentang peraturan lalu lintas",
    },
    {
      gambar: "/image/testimony-3.webp",
      nama: "Suriadi Sulaiman",
      komentar:
        "Fasilitas mobil latihan yang nyaman dan terbaru membuat proses belajar menjadi lebih menyenangkan. Instruktur juga selalu memberikan tips-tips berkendara yang berguna",
    },
    {
      gambar: "/image/testimony-1.webp",
      nama: "Suriadi Sulaiman",
      komentar:
        "Instruktur di sini benar-benar luar biasa! Beliau tidak hanya mengajarkan saya cara mengemudi, tapi juga memberikan tips-tips tentang keselamatan berkendara. Saya merasa sangat beruntung bisa belajar dari beliau",
    },
    {
      gambar: "/image/testimony-3.webp",
      nama: "Suriadi Sulaiman",
      komentar:
        "Metode pengajaran di sini sangat efektif. Saya langsung paham dengan materi yang disampaikan. Selain itu, banyak praktek langsung di jalan sehingga saya bisa langsung mengaplikasikannya",
    },
  ];
  return (
    <section className="bg-cuslor-1 pt-28">
    <h1 className="text-white mb-4 text-3xl text-center lg:text-3xl font-semibold">
      Testimoni
    </h1>
    <div className="w-[90%] mx-auto flex gap-4 pt-16 overflow-x-hidden hover:overflow-x-scroll">
      {users.map((user, index) => {
        return (
          <div className="relative" key={index}>
            <Image
              src={user.gambar}
              width={100}
              height={100}
              alt="user"
              className="absolute left-1/2 -translate-x-1/2 -top-[3.6rem]"
            />
            <div className="p-4 bg-white rounded-lg pt-14 mb-14 w-[20rem] h-[15rem] mx-auto">
              <h4 className="text-black  text-center font-semibold mb-2">
                {user.nama}
              </h4>
              <p className="text-black  text-center">{user.komentar}</p>
            </div>
          </div>
        );
      })}
    </div>
    </section>
  );
}
