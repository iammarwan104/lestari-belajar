import React from "react";
import { getAllQuesionerAnswer } from "../lib/action";
import { ScatterData } from "../lib/interface";
import AdminClient from "./components/AdminClient";

export default async function Page() {
  const {
    kebersihanMobil,
    // kelengkapanPerformaAlatMobil,
    performaMobil,
    EtikaSopanSantunStaff,
    skillKomunikasiBaikStaff,
    pelayananInformasiJadwalBelajar,
    EtikaSopanSantunMentorMengemudi,
    skillKomunikasiBaikMentor,
    pengawasanPenuh,
    pembawaanMateriBelajarMentorMengemudi,
    garisPerbatasan,
  } = await getAllQuesionerAnswer();
  const data: ScatterData[] = [
    {
      name: kebersihanMobil.nama,
      x: kebersihanMobil.kinerja,
      y: kebersihanMobil.kepentingan,
      komentars: kebersihanMobil.komentar,
    },
    // {
    //   name: kelengkapanPerformaAlatMobil.nama,
    //   x: kelengkapanPerformaAlatMobil.kinerja,
    //   y: kelengkapanPerformaAlatMobil.kepentingan,
    //   komentars: kelengkapanPerformaAlatMobil.komentar,
    // },
    {
      name: performaMobil.nama,
      x: performaMobil.kinerja,
      y: performaMobil.kepentingan,
      komentars: performaMobil.komentar,
    },
    {
      name: EtikaSopanSantunStaff.nama,
      x: EtikaSopanSantunStaff.kinerja,
      y: EtikaSopanSantunStaff.kepentingan,
      komentars: EtikaSopanSantunStaff.komentar,
    },
    {
      name: skillKomunikasiBaikStaff.nama,
      x: skillKomunikasiBaikStaff.kinerja,
      y: skillKomunikasiBaikStaff.kepentingan,
      komentars: skillKomunikasiBaikStaff.komentar,
    },
    {
      name: pelayananInformasiJadwalBelajar.nama,
      x: pelayananInformasiJadwalBelajar.kinerja,
      y: pelayananInformasiJadwalBelajar.kepentingan,
      komentars: pelayananInformasiJadwalBelajar.komentar,
    },
    {
      name: EtikaSopanSantunMentorMengemudi.nama,
      x: EtikaSopanSantunMentorMengemudi.kinerja,
      y: EtikaSopanSantunMentorMengemudi.kepentingan,
      komentars: EtikaSopanSantunMentorMengemudi.komentar,
    },
    {
      name: skillKomunikasiBaikMentor.nama,
      x: skillKomunikasiBaikMentor.kinerja,
      y: skillKomunikasiBaikMentor.kepentingan,
      komentars: skillKomunikasiBaikMentor.komentar,
    },
    {
      name: pengawasanPenuh.nama,
      x: pengawasanPenuh.kinerja,
      y: pengawasanPenuh.kepentingan,
      komentars: pengawasanPenuh.komentar,
    },
    {
      name: pembawaanMateriBelajarMentorMengemudi.nama,
      x: pembawaanMateriBelajarMentorMengemudi.kinerja,
      y: pembawaanMateriBelajarMentorMengemudi.kepentingan,
      komentars: pembawaanMateriBelajarMentorMengemudi.komentar,
    }
  ];

  return (
    <div className="bg-cuslor-1 text-center text-2xl font-semibold px-4 pt-12">
      <AdminClient data={data} garisPerbatasan={garisPerbatasan}/>
    </div>
  );
}
