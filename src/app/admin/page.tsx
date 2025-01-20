import React from "react";
import { getAllQuesionerAnswer } from "../lib/action";
import { ScatterData } from "../lib/interface";
import AdminClient from "./components/AdminClient";

export default async function Page() {
  const {
    kebersihanMobil,
    kelengkapanPerformaAlatMobil,
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
      komentar_kepentingan: kebersihanMobil.komentar_kepentingan,
      komentar_kinerja: kebersihanMobil.komentar_kinerja,
    },
    {
      name: kelengkapanPerformaAlatMobil.nama,
      x: kelengkapanPerformaAlatMobil.kinerja,
      y: kelengkapanPerformaAlatMobil.kepentingan,
      komentar_kepentingan: kelengkapanPerformaAlatMobil.komentar_kepentingan,
      komentar_kinerja: kelengkapanPerformaAlatMobil.komentar_kinerja,
    },
    {
      name: performaMobil.nama,
      x: performaMobil.kinerja,
      y: performaMobil.kepentingan,
      komentar_kepentingan: performaMobil.komentar_kepentingan,
      komentar_kinerja: performaMobil.komentar_kinerja,
    },
    {
      name: EtikaSopanSantunStaff.nama,
      x: EtikaSopanSantunStaff.kinerja,
      y: EtikaSopanSantunStaff.kepentingan,
      komentar_kepentingan: EtikaSopanSantunStaff.komentar_kepentingan,
      komentar_kinerja: EtikaSopanSantunStaff.komentar_kinerja,
    },
    {
      name: skillKomunikasiBaikStaff.nama,
      x: skillKomunikasiBaikStaff.kinerja,
      y: skillKomunikasiBaikStaff.kepentingan,
      komentar_kepentingan: skillKomunikasiBaikStaff.komentar_kepentingan,
      komentar_kinerja: skillKomunikasiBaikStaff.komentar_kinerja,
    },
    {
      name: pelayananInformasiJadwalBelajar.nama,
      x: pelayananInformasiJadwalBelajar.kinerja,
      y: pelayananInformasiJadwalBelajar.kepentingan,
      komentar_kepentingan: pelayananInformasiJadwalBelajar.komentar_kepentingan,
      komentar_kinerja: pelayananInformasiJadwalBelajar.komentar_kinerja,
    },
    {
      name: EtikaSopanSantunMentorMengemudi.nama,
      x: EtikaSopanSantunMentorMengemudi.kinerja,
      y: EtikaSopanSantunMentorMengemudi.kepentingan,
      komentar_kepentingan: EtikaSopanSantunMentorMengemudi.komentar_kepentingan,
      komentar_kinerja: EtikaSopanSantunMentorMengemudi.komentar_kinerja,
    },
    {
      name: skillKomunikasiBaikMentor.nama,
      x: skillKomunikasiBaikMentor.kinerja,
      y: skillKomunikasiBaikMentor.kepentingan,
      komentar_kepentingan: skillKomunikasiBaikMentor.komentar_kepentingan,
      komentar_kinerja: skillKomunikasiBaikMentor.komentar_kinerja,
    },
    {
      name: pengawasanPenuh.nama,
      x: pengawasanPenuh.kinerja,
      y: pengawasanPenuh.kepentingan,
      komentar_kepentingan: pengawasanPenuh.komentar_kepentingan,
      komentar_kinerja: pengawasanPenuh.komentar_kinerja,
    },
    {
      name: pembawaanMateriBelajarMentorMengemudi.nama,
      x: pembawaanMateriBelajarMentorMengemudi.kinerja,
      y: pembawaanMateriBelajarMentorMengemudi.kepentingan,
      komentar_kepentingan: pembawaanMateriBelajarMentorMengemudi.komentar_kepentingan,
      komentar_kinerja: pembawaanMateriBelajarMentorMengemudi.komentar_kinerja,
    }
  ];

  return (
    <div className="bg-cuslor-1 text-center text-2xl font-semibold px-4 pt-12">
      <AdminClient data={data} garisPerbatasan={garisPerbatasan}/>
    </div>
  );
}
