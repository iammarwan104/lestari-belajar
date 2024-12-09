'use client'
import Image from "next/image";

export default function Testimoni() {
  const users = [
    {
      gambar: "/image/testimony-1.webp",
      nama: "Sofyan Alfian",
      komentar:
        "Kursus Microsoft Office di Lestari Belajar sangat membantu saya meningkatkan produktivitas kerja. Materinya jelas dan praktis.",
    },
    {
      gambar: "/image/testimony-2.webp",
      nama: "Muh Ayyub Bari",
      komentar:
        "Saya sangat puas dengan kursus Excel. Sekarang saya bisa membuat analisis data dengan lebih cepat dan akurat.",
    },
    {
      gambar: "/image/testimony-3.webp",
      nama: "Suriadi Sulaiman",
      komentar:
        "Berkat kursus Photoshop dan Corel Draw, saya bisa mewujudkan ide-ide desain saya menjadi kenyataan.",
    },
    {
      gambar: "/image/testimony-1.webp",
      nama: "Suriadi Sulaiman",
      komentar:
        "Instruktur desain grafisnya sangat kreatif dan inspiratif. Saya banyak belajar teknik-teknik baru",
    },
    {
      gambar: "/image/testimony-3.webp",
      nama: "Suriadi Sulaiman",
      komentar:
        "Kombinasi kursus Microsoft Office dan desain grafis sangat bermanfaat. Saya bisa membuat presentasi yang menarik dengan visual yang profesional.",
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
            <div className="p-4 bg-white rounded-lg pt-14 mb-14 w-[20rem] h-[13rem] mx-auto">
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
