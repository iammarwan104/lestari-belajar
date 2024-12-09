"use client";
import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import { GarisPerbatasan } from "@/app/lib/interface";
Chart.register(annotationPlugin);

interface ScatterData {
  name: string;
  x: number;
  y: number;
}

interface Option {
  scales: {
    x: { type: string; position: string };
    y: { type: string; position: string };
  };
}

const ScatterChart = ({
  datas,
  garisPerbatasan,
}: {
  datas: ScatterData[];
  garisPerbatasan: GarisPerbatasan;
}) => {
  const [shimmer, setShimmer] = useState(true);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartId = useRef<string | null>(null);

  function penentuanStatus(
    nilaiX: number,
    nilaiY: number,
    garisPerbatasan: GarisPerbatasan
  ) {
    if (
      nilaiX <= garisPerbatasan.sumbuX === true &&
      nilaiY <= garisPerbatasan.sumbuY === false
    ) return "#f05252"
    if (
        nilaiX <= garisPerbatasan.sumbuX === false &&
        nilaiY <= garisPerbatasan.sumbuY === false
      ) return "#31c48d"
      if (
        nilaiX <= garisPerbatasan.sumbuX === true &&
        nilaiY <= garisPerbatasan.sumbuY === true
      ) return "#faca15"
      if (
        nilaiX <= garisPerbatasan.sumbuX === false &&
        nilaiY <= garisPerbatasan.sumbuY === true
      ) return "#3f83f8"
  }


  useEffect(() => {
    setShimmer(false);
    if (chartId.current !== null) {
      return;
    }
    const data = {
      datasets: [
        {
          label: String([datas[0].name]),
          data: [datas[0]],
          backgroundColor: penentuanStatus(datas[0].x, datas[0].y, garisPerbatasan),
          radius: 6,
        },
        {
          label: String([datas[1].name]),
          data: [datas[1]],
          backgroundColor: penentuanStatus(datas[1].x, datas[1].y, garisPerbatasan),
          radius: 6,
        },
        {
          label: String([datas[2].name]),
          data: [datas[2]],
          backgroundColor: penentuanStatus(datas[2].x, datas[2].y, garisPerbatasan),
          radius: 6,
        },
        {
          label: String([datas[3].name]),
          data: [datas[3]],
          backgroundColor: penentuanStatus(datas[3].x, datas[3].y, garisPerbatasan),
          radius: 6,
        },
        {
          label: String([datas[4].name]),
          data: [datas[4]],
          backgroundColor: penentuanStatus(datas[4].x, datas[4].y, garisPerbatasan),
          radius: 6,
        },
        {
          label: String([datas[5].name]),
          data: [datas[5]],
          backgroundColor: penentuanStatus(datas[5].x, datas[5].y, garisPerbatasan),
          radius: 6,
        },
        {
          label: String([datas[6].name]),
          data: [datas[6]],
          backgroundColor: penentuanStatus(datas[6].x, datas[6].y, garisPerbatasan),
          radius: 6,
        },
        // {
        //   label: String([datas[7].name]),
        //   data: [datas[7]],
        //   backgroundColor: penentuanStatus(datas[7].x, datas[7].y, garisPerbatasan),
        //   radius: 6,
        // },
        // {
        //   label: String([datas[8].name]),
        //   data: [datas[8]],
        //   backgroundColor: penentuanStatus(datas[8].x, datas[8].y, garisPerbatasan),
        //   radius: 6,
        // },
        // {
        //   label: String([datas[9].name]),
        //   data: [datas[9]],
        //   backgroundColor: penentuanStatus(datas[9].x, datas[9].y, garisPerbatasan),
        //   radius: 6,
        // },
        // {
        //   label: String([datas[10].name]),
        //   data: [datas[10]],
        //   backgroundColor: penentuanStatus(datas[10].x, datas[10].y, garisPerbatasan),
        //   radius: 6,
        // },
        // {
        //   label: String([datas[11].name]),
        //   data: [datas[11]],
        //   backgroundColor: penentuanStatus(datas[11].x, datas[11].y, garisPerbatasan),
        //   radius: 6,
        // },
        // {
        //   label: String([datas[12].name]),
        //   data: [datas[12]],
        //   backgroundColor: penentuanStatus(datas[12].x, datas[12].y, garisPerbatasan),
        //   radius: 6,
        // },        
        // {
        //   label: String([datas[13].name]),
        //   data: [datas[13]],
        //   backgroundColor: penentuanStatus(datas[13].x, datas[13].y, garisPerbatasan),
        //   radius: 6,
        // },        
        // {
        //   label: String([datas[14].name]),
        //   data: [datas[14]],
        //   backgroundColor: penentuanStatus(datas[14].x, datas[14].y, garisPerbatasan),
        //   radius: 6,
        // },
        // {
        //   label: String([datas[15].name]),
        //   data: [datas[15]],
        //   backgroundColor: penentuanStatus(datas[15].x, datas[15].y, garisPerbatasan),
        //   radius: 6,
        // },
        // {
        //   label: String([datas[16].name]),
        //   data: [datas[16]],
        //   backgroundColor: penentuanStatus(datas[16].x, datas[16].y, garisPerbatasan),
        //   radius: 6,
        // },
        // {
        //   label: String([datas[17].name]),
        //   data: [datas[17]],
        //   backgroundColor: penentuanStatus(datas[17].x, datas[17].y, garisPerbatasan),
        //   radius: 6,
        // },
        // {
        //   label: String([datas[18].name]),
        //   data: [datas[18]],
        //   backgroundColor: penentuanStatus(datas[18].x, datas[18].y, garisPerbatasan),
        //   radius: 6,
        // },
        // {
        //   label: String([datas[19].name]),
        //   data: [datas[19]],
        //   backgroundColor: penentuanStatus(datas[19].x, datas[19].y, garisPerbatasan),
        //   radius: 6,
        // },
      ],
    };

    const options: any = {
      responsive: true,
      plugins: {
        annotation: {
          annotations: {
            yLine: {
              type: "line",
              scaleID: "y",
              value: garisPerbatasan.sumbuY,
              borderColor: "blue",
              borderWidth: 2,
              label: {
                content: "Average Y",
                enabled: true,
                position: "start",
              },
            },
            xLine: {
              type: "line",
              scaleID: "x",
              value: garisPerbatasan.sumbuX,
              borderColor: "gray",
              borderWidth: 2,
              label: {
                content: "Average X",
                enabled: true,
                position: "start",
              },
            },
          },
        },
      },
      scales: {
        x: {
          beginAtZero: false,
          min: 3,
          max: 6,
        },
        y: {
          beginAtZero: false,
          min: 3,
          max: 6,
        },
      },
    };

    if (!chartRef.current) {
      console.error("ada yang salah");
    } else {
      const chart = new Chart(chartRef.current, {
        type: "scatter",
        data: data,
        options: options,
      });
      chartId.current = chart.id;
    }
  }, [datas]);

  return (
    <div className="relative w-full h-full">
      {shimmer ? (
        <div
          className={`w-full h-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-gray-400 animate-pulse rounded-xl`}></div>
      ) : null}
      <canvas
        ref={chartRef}
        width={"full"}
        height={"full"}
        className={`${
          shimmer ? "opacity-0" : ""
        } h-full w-full rounded-xl bg-gray-800 shadow-xl dark:shadow-none`}
      />
    </div>
  );
};

export default ScatterChart;
