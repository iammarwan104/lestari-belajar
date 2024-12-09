'use client'
import Image from "next/image";

export default function Testimoni() {
  const users = [
    {
      gambar: "/image/testimony-1.webp",
      nama: "Sofyan Alfian",
      komentar:
        "Saya sekarang bisa membedakan berbagai jenis acara dan memilih gaya bicara yang sesuai.",
    },
    {
      gambar: "/image/testimony-2.webp",
      nama: "Muh Ayyub Bari",
      komentar:
        "Teknik-teknik yang saya pelajari di kursus ini sangat membantu saya dalam mengelola acara keluarga dengan lebih lancar",
    },
    {
      gambar: "/image/testimony-3.webp",
      nama: "Suriadi Sulaiman",
      komentar:
        "Berkat kursus ini, saya berhasil mendapatkan pekerjaan sebagai MC di beberapa acara. Materi yang diajarkan sangat relevan dengan dunia kerja",
    },
    {
      gambar: "/image/testimony-1.webp",
      nama: "Suriadi Sulaiman",
      komentar:
        "Kursus ini membuka mata saya tentang pentingnya persiapan yang matang sebelum menjadi MC. Saya sekarang bisa menyusun rundown acara dengan lebih baik dan efektif",
    },
    {
      gambar: "/image/testimony-3.webp",
      nama: "Suriadi Sulaiman",
      komentar:
        "Setelah mengikuti kursus MC & Protokoler ini, saya merasa jauh lebih percaya diri dalam berbicara di depan umum. Teknik-teknik yang diajarkan sangat bermanfaat untuk meningkatkan kemampuan public speaking saya",
    },
  ];
  return (
    <section className="bg-cuslor-1">
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
            <div className="p-4 bg-white rounded-lg pt-14 mb-14 w-[20rem] mx-auto">
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
