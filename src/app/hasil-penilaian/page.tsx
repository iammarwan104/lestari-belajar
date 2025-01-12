import { getAllQuesionerAnswer } from "../lib/action";
import { GarisPerbatasan, ScatterData } from "../lib/interface";
import DoughnutChart from "./components/Doughnut";

export default async function page() {
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
      komentars: kebersihanMobil.komentar,
    },
    {
      name: kelengkapanPerformaAlatMobil.nama,
      x: kelengkapanPerformaAlatMobil.kinerja,
      y: kelengkapanPerformaAlatMobil.kepentingan,
      komentars: kelengkapanPerformaAlatMobil.komentar,
    },
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

  function penentuanStatus(
    nilaiX: number,
    nilaiY: number,
    garisPerbatasan: GarisPerbatasan,
  ) {
    if (
      nilaiX <= garisPerbatasan.sumbuX === true &&
      nilaiY <= garisPerbatasan.sumbuY === false
    )
      return <div className={`h-2.5 w-8 mx-auto rounded-sm bg-[#fe0000]`}></div>
    if (
      nilaiX <= garisPerbatasan.sumbuX === false &&
      nilaiY <= garisPerbatasan.sumbuY === false
    )
    return <div className={`h-2.5 w-8 mx-auto rounded-sm bg-[#90ed90]`}></div>
    if (
      nilaiX <= garisPerbatasan.sumbuX === true &&
      nilaiY <= garisPerbatasan.sumbuY === true
    )
    return <div className={`h-2.5 w-8 mx-auto rounded-sm bg-[#ffcc57]`}></div>
    if (
      nilaiX <= garisPerbatasan.sumbuX === false &&
      nilaiY <= garisPerbatasan.sumbuY === true
    )
    return <div className={`h-2.5 w-8 mx-auto rounded-sm bg-[#36a2eb]`}></div>
  }

  return (
    <div className="px-6">
     <h1 className="text-white mb-8 pt-4 text-3xl text-center lg:text-3xl font-semibold">
        Hasil Penilaian
      </h1>
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-8 items-center justify-center">
        <div>
          <DoughnutChart datas={data} garisPerbatasan={garisPerbatasan}/>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex gap-4 mb-4 items-center">
            <span className="h-2.5 w-8 mx-auto rounded-sm bg-[#fe0000]"></span>
            <span className="font-semibold">Kepentingan tinggi kepuasan rendah</span>
          </div>
          <div className="flex gap-4 mb-4 items-center">
            <span className="h-2.5 w-8 mx-auto rounded-sm bg-[#90ed90]"></span>
            <span className="font-semibold">Kepentingan tinggi kepuasan tinggi</span>
          </div>
          <div className="flex gap-4 mb-4 items-center">
            <span className="h-2.5 w-8 mx-auto rounded-sm bg-[#ffcc57]"></span>
            <span className="font-semibold">Kepentingan rendah kepuasan rendah</span>
          </div>
          <div className="flex gap-4 mb-4 items-center">
            <span className="h-2.5 w-8 mx-auto rounded-sm bg-[#36a2eb]"></span>
            <span className="font-semibold">Kepentingan rendah kepuasan tinggi</span>
          </div>
        </div>
        <div className="h-[360px] overflow-y-scroll">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Layanan
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{penentuanStatus(item.x, item.y, garisPerbatasan)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
