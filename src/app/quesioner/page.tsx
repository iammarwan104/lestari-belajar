import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { quesionerSubmit } from "../lib/action";
import Quesioner from "./components/Quesioner";

export default function Page() {
  return (
    <>
      quesioner page
      <form className="grid grid-cols-1 gap-6" action={quesionerSubmit}>
        {/* <div>
          <h1 className="text-xl font-semibold text-center mb-4">
            Fasilitas Mobil Kursus
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner name="kebersihan-mobil" />
            <Quesioner name="kelengkapan-alat-mobil" />
            <Quesioner name="performa-alat-mobil" />
            <Quesioner name="performa-mobil" />
        </div>
        </div> */}

          {/* <div>
          <h1 className="text-xl font-semibold text-center mb-4">
            Fasilitas Kelas Mengemudi
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner name="kebersihan-kelas-mengemudi" />
            <Quesioner name="kelengkapan-alat-kelas-mengemudi" />
            <Quesioner name="performa-alat-kelas-mengemudi" />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-center mb-4">
            Fasilitas Lembaga Kursus
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner name="kebersihan-lembaga-kursus" />
            <Quesioner name="kelengkapan-alat-lembaga-kursus" />
            <Quesioner name="performa-alat-lembaga-kursus" />
          </div>
        </div> */}

        <div>
          <h1 className="text-xl font-semibold text-center mb-4">
            Layanan Staff Lembaga kursus
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner name="etika-sopan-santun" />
            <Quesioner name="pelayanan-administrasi" />
            <Quesioner name="pelayanan-jadwal-belajar" />
          </div>
        </div>

        {/* <div>
          <h1 className="text-xl font-semibold text-center mb-4">
            Layanan Mentor kursus Mengemudi
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner name="etika-sopan-santun-mentor-mengemudi" />
            <Quesioner name="pembawaan-materi-belajar-mentor-mengemudi" />
          </div>
        </div> */}
        <div>
          <button
            type="submit"
            className={`w-full text-white bg-cuslor-4 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:bg-yellow-400 focus:outline-none dark:focus:ring-yellow-400`}>
            Kirim
          </button>
        </div>
      </form>
    </>
  );
}