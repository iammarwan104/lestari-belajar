import React, { Suspense } from "react";
import { getAllQuesionerAnswer } from "../lib/action";
import ScatterChart from "./components/ScatterChart";
import PelPal from "./components/PelPal";
import TableStudents from "./components/TableStudents";
// import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { Spinner } from "flowbite-react";
import { ScatterData } from "../lib/interface";

export default async function Page() {
  // const session = await auth();
  // if (!session) {
  //   redirect("/api/auth/signin");
  // }

  const {
    // kebersihan,
    kebersihanKelasMengemudi,
    // sopanSantun,
    kebersihanMobil,
    garisPerbatasan,
    kelengkapanAlatMobil,
    kelengkapanAlatKelasMengemudi,
    performaAlatKelasMengemudi,
    performaAlatMobil,
    performaMobil,
    performaAlatLembagaKursus,
    kebersihanLembagaKursus,
    kelengkapanAlatLembagaKursus,
    etikaSopanSantun,
    pelayananAdministrasi,
    pelayananJadwalBelajar,
    etikaSopanSantunMentorMengemudi,
    pembawaanMateriBelajarMentorMengemudi,
  } = await getAllQuesionerAnswer();
  const data: ScatterData[] = [
    {
      name: kebersihanMobil.nama,
      x: kebersihanMobil.kinerja,
      y: kebersihanMobil.kepentingan,
      komentars: kebersihanMobil.komentar,
    },
    {
      name: kelengkapanAlatMobil.nama,
      x: kelengkapanAlatMobil.kinerja,
      y: kelengkapanAlatMobil.kepentingan,
      komentars: kelengkapanAlatMobil.komentar,
    },
    {
      name: kebersihanKelasMengemudi.nama,
      x: kebersihanKelasMengemudi.kinerja,
      y: kebersihanKelasMengemudi.kepentingan,
      komentars: kebersihanKelasMengemudi.komentar,
    },
    {
      name: kelengkapanAlatKelasMengemudi.nama,
      x: kelengkapanAlatKelasMengemudi.kinerja,
      y: kelengkapanAlatKelasMengemudi.kepentingan,
      komentars: kelengkapanAlatKelasMengemudi.komentar,
    },
    {
      name: performaAlatKelasMengemudi.nama,
      x: performaAlatKelasMengemudi.kinerja,
      y: performaAlatKelasMengemudi.kepentingan,
      komentars: performaAlatKelasMengemudi.komentar,
    },
    {
      name: kebersihanLembagaKursus.nama,
      x: kebersihanLembagaKursus.kinerja,
      y: kebersihanLembagaKursus.kepentingan,
      komentars: kebersihanLembagaKursus.komentar,
    },
    {
      name: kelengkapanAlatLembagaKursus.nama,
      x: kelengkapanAlatLembagaKursus.kinerja,
      y: kelengkapanAlatLembagaKursus.kepentingan,
      komentars: kelengkapanAlatLembagaKursus.komentar,
    },
    {
      name: performaAlatLembagaKursus.nama,
      x: performaAlatLembagaKursus.kinerja,
      y: performaAlatLembagaKursus.kepentingan,
      komentars: performaAlatLembagaKursus.komentar,
    },
    {
      name: performaAlatMobil.nama,
      x: performaAlatMobil.kinerja,
      y: performaAlatMobil.kepentingan,
      komentars: performaAlatMobil.komentar,
    },
    {
      name: performaMobil.nama,
      x: performaMobil.kinerja,
      y: performaMobil.kepentingan,
      komentars: performaMobil.komentar,
    },
    {
      name: etikaSopanSantun.nama,
      x: etikaSopanSantun.kinerja,
      y: etikaSopanSantun.kepentingan,
      komentars: etikaSopanSantun.komentar,
    },
    {
      name: pelayananAdministrasi.nama,
      x: pelayananAdministrasi.kinerja,
      y: pelayananAdministrasi.kepentingan,
      komentars: pelayananAdministrasi.komentar,
    },
    {
      name: pelayananJadwalBelajar.nama,
      x: pelayananJadwalBelajar.kinerja,
      y: pelayananJadwalBelajar.kepentingan,
      komentars: pelayananJadwalBelajar.komentar,
    },
    {
      name: etikaSopanSantunMentorMengemudi.nama,
      x: etikaSopanSantunMentorMengemudi.kinerja,
      y: etikaSopanSantunMentorMengemudi.kepentingan,
      komentars: etikaSopanSantunMentorMengemudi.komentar,
    },
    {
      name: pembawaanMateriBelajarMentorMengemudi.nama,
      x: pembawaanMateriBelajarMentorMengemudi.kinerja,
      y: pembawaanMateriBelajarMentorMengemudi.kepentingan,
      komentars: pembawaanMateriBelajarMentorMengemudi.komentar,
    },
    {
      name: "Kebersihan WC",
      x: 3.0,
      y: 3.5,
      komentars: [null, null, null, null, null],
    },
    {
      name: "Performa Koputer",
      x: 4.0,
      y: 5.0,
      komentars: [null, null, null, "kopi", ""],
    },
    {
      name: "Pelayanan",
      x: 5.0,
      y: 3.7,
      komentars: [
        "Pelayanan Kursus anda sangat buruk, saya menjadi malas untuk datang belajar, untuk itu saya menuntut uang saya kembali atau saya melapor ke kepolisian!!!",
        "Pelayanan Kursus anda sangat buruk, saya menjadi malas untuk datang belajar, untuk itu saya menuntut uang saya kembali atau saya melapor ke kepolisian!!!",
        "Pelayanan Kursus anda sangat buruk, saya menjadi malas untuk datang belajar, untuk itu saya menuntut uang saya kembali atau saya melapor ke kepolisian!!!",
        "Pelayanan Kursus anda sangat buruk, saya menjadi malas untuk datang belajar, untuk itu saya menuntut uang saya kembali atau saya melapor ke kepolisian!!!",
        "Pelayanan Kursus anda sangat buruk, saya menjadi malas untuk datang belajar, untuk itu saya menuntut uang saya kembali atau saya melapor ke kepolisian!!!",
      ],
    },
  ];

  return (
    <div className="bg-cuslor-1 text-center text-2xl font-semibold px-4 pt-12">
      <h1 className="mb-6">Admin</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        <Suspense
          fallback={
            <div className="w-screen h-[60vh] flex justify-center items-center">
              {" "}
              <div className="flex justify-center gap-4">
                <Spinner color={"warning"} /> <p className="mt-2">Load page.</p>
              </div>
            </div>
          }>
          {/* <ScatterChart datas={data} garisPerbatasan={garisPerbatasan} />
          <PelPal datas={data} garisPerbatasan={garisPerbatasan} /> */}
          <TableStudents />
        </Suspense>
      </div>
    </div>
  );
}
