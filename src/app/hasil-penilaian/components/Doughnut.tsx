"use client";
// Pastikan komponen ini dijalankan di sisi klien

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { GarisPerbatasan, ScatterData } from "@/app/lib/interface";
import { useEffect, useState } from "react";

// Register elemen yang diperlukan dari Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({datas, garisPerbatasan}:{datas:ScatterData[], garisPerbatasan: {
  sumbuY: number;
  sumbuX: number;
}}) {
  const[merah, setMerah] = useState(0)
  const[hijau, setHijau] = useState(0)
  const[kuning, setKuning] = useState(0)
  const[biru, setBiru] = useState(0)

  useEffect(() => {
    let merahCount = 0;
    let hijauCount = 0;
    let kuningCount = 0;
    let biruCount = 0;
  
    datas.forEach((index) => {
      if (
        index.x <= garisPerbatasan.sumbuX &&
        index.y > garisPerbatasan.sumbuY
      ) {
        merahCount++;
      } else if (
        index.x > garisPerbatasan.sumbuX &&
        index.y > garisPerbatasan.sumbuY
      ) {
        hijauCount++;
      } else if (
        index.x <= garisPerbatasan.sumbuX &&
        index.y <= garisPerbatasan.sumbuY
      ) {
        kuningCount++;
      } else if (
        index.x > garisPerbatasan.sumbuX &&
        index.y <= garisPerbatasan.sumbuY
      ) {
        biruCount++;
      }
    });
  
    setMerah(merahCount);
    setHijau(hijauCount);
    setKuning(kuningCount);
    setBiru(biruCount);
  }, [datas, garisPerbatasan]);

  const data = {
    datasets: [
      {
        label: "Jumlah layanan",
        data: [merah, hijau, kuning, biru],
        backgroundColor: [
          "rgb(255, 0, 0)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(144, 238, 144)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="w-fit mx-auto">
      <Doughnut
        data={data}
        width={300}
        height={300}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}
