"use client"
import { getKepentinganData, getKinerjaData } from "@/app/lib/action";
import { Gender } from "@prisma/client";
import { useEffect, useState } from "react";
import Papa from 'papaparse';

export default function DownloadDataQuesioner() {
  const [dataKinerjas, setDataKinerjas] = useState<any>([]);
  const [dataKepentingans, setDataKepentingans] = useState<any>([]);
  useEffect(() => {
    async function getdata() {
      let dataKepentingan = await getKepentinganData();
      let dataKinerja = await getKinerjaData();
      setDataKepentingans(dataKepentingan);
      setDataKinerjas(dataKinerja)
    }
    getdata();
  }, []);

  const handleDownloadDataKepentingan = () => {
    // Konversi data ke format CSV
    const csv = Papa.unparse(dataKepentingans);

    // Buat elemen anchor untuk mengunduh file
    const element = document.createElement('a');
    const file = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    element.href = URL.createObjectURL(file);
    element.download = 'Kepentingan.csv';
    document.body.appendChild(element);
    element.click();
  };

  const handleDownloadDataKinerja = () => {
    // Konversi data ke format CSV
    const csv = Papa.unparse(dataKinerjas);

    // Buat elemen anchor untuk mengunduh file
    const element = document.createElement('a');
    const file = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    element.href = URL.createObjectURL(file);
    element.download = 'kinerja.csv';
    document.body.appendChild(element);
    element.click();
  };
  
  return(
    <div className="w-[90vw] md:w-[30vw] mx-auto flex gap-4 mt-4">
      <button onClick={handleDownloadDataKepentingan} className={`w-full text-white bg-cuslor-4 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-400 font-semibold rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:hover:bg-yellow-400 focus:outline-none dark:focus:ring-yellow-400`}>Unduh Kepentingan</button>
      <button onClick={handleDownloadDataKinerja} className={`w-full text-white bg-cuslor-4 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-400 font-semibold rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:hover:bg-yellow-400 focus:outline-none dark:focus:ring-yellow-400`}>Unduh Kinerja</button>
    </div>
  )
}
