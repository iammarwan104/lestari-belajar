import React from "react";
import { getAllQuesionerAnswer } from "../lib/action";
import { ScatterData } from "../lib/interface";
import AdminClient from "./components/AdminClient";

export default async function Page() {
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
      <AdminClient data={data} garisPerbatasan={garisPerbatasan}/>
    </div>
  );
}
