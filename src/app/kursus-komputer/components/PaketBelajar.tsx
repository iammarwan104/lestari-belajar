import Image from "next/image";

export default function PaketBelajar() {
  const paketBelajar = [
    {
      gambar:["/image/word-logo.webp"],
      name: "Microsoft Office Word",
      harga: "Rp. 450.000.00",
      materidanKeterangan: ["Materi Dasar hingga lanjutan", "Tips & trik", "10 X Pertemuan", "2 Jam Perhari", "Ruangan ber-AC", "Sertifikat (Syarat & ketentuan berlaku)"]
  },    {
    gambar:["/image/excel-logo.webp"],
    name: "Microsoft Office Excel",
    harga: "Rp. 450.000.00",
    materidanKeterangan: ["Materi Dasar hingga lanjutan", "Tips & trik", "10 X Pertemuan", "2 Jam Perhari", "Ruangan ber-AC", "Sertifikat (Syarat & ketentuan berlaku)"]
}
    ,{
      gambar:["/image/power-point-logo.webp"],
      name: "Microsoft Office Power Point",
      harga: "Rp. 450.000.00",
      materidanKeterangan: ["Materi Dasar hingga lanjutan", "Tips & trik", "10 X Pertemuan", "2 Jam Perhari", "Ruangan ber-AC", "Sertifikat (Syarat & ketentuan berlaku)"]
  }
    , {
      gambar:["/image/komplit.webp"],
      name: "Lengkap",
      harga: "Rp. 1.300.000.00",
      materidanKeterangan: ["Pengenalan OS Windows","Materi Dasar hingga lanjutan (MS Word, MS Excel, MS Power Point)", "Tips & trik", "24 X Pertemuan", "2 Jam Perhari", "Ruangan ber-AC", "Sertifikat (Syarat & ketentuan berlaku)"]
  }
  , {
    gambar:["/image/desain-grafis-logo.webp"],
    name: "Desain Grafis",
    harga: "Rp. 1.500.000.00",
    materidanKeterangan: ["Materi Dasar hingga lanjutan (Photoshop & Corel Draw)", "Tips & trik", "20 X Pertemuan", "2 Jam Perhari", "Ruangan ber-AC", "Sertifikat (Syarat & ketentuan berlaku)"]
}
]
  return (
    <section className="mt-16 mb-8">
     <h1 className="text-white mb-8 text-3xl text-center lg:text-3xl font-semibold">
        Paket Belajar
      </h1>
      <div className="flex gap-4 overflow-x-scroll hover:overflow-x-scroll w-[90%] md:w-[85%] lg:w-[90%] mx-auto rounded-xl">
        {
          paketBelajar.map((paket, index)=>{
            return(
                      <div className="xl:w-[18rem] bg-white rounded-xl" key={index}>
          <div className="w-full h-[12rem] text-center text-white bg-cuslor-4 py-3 rounded-t-xl">
            <div className="flex">
            {
              paket.gambar.map((gambar, index)=>{
                return(
                  <Image
                  className="mb-4 mx-auto"
                  width={gambar.includes("desain-grafis-logo")? 195: 100}
                  height={100}
                  src={gambar}
                  alt="Logo Microsoft Office word"
                  key={index}
                />
                )
              })
            }
            </div>
            <h2 className="text-xl font-semibold min-w-[18rem] max-w-[20rem]">{paket.name}</h2>
            <p className="text-xl font-semibold">{paket.harga}</p>
          </div>
          <div className="text-black text-left px-10 py-4 text-lg font-medium rounded-b-xl">
            <ul>
              {
                paket.materidanKeterangan.map((materi, index)=>{
                  return(
                    <li className="list-disc" key={index}>
                <span>{materi}</span>
              </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
            )
          })
        }

      </div>
    </section>
  );
}
