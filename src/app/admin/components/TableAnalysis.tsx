import { GarisPerbatasan, ScatterData } from "@/app/lib/interface";

export default function TableAnalysis({
  datas,
  garisPerbatasan,
}: {
  datas: ScatterData[];
  garisPerbatasan: GarisPerbatasan;
}) {
  const statusQuadrants = [
    {
      status: "Concentrate Here",
      message: "Layanan ini kepentingannya tinggi namun kepuasannya rendah",
    },{
      status: "Keep up the good work",
      message: "Layanan ini kepentingan dan kepuasannya tinggi",
    }, {
      status: "Low Priority",
      message: "Layanan ini kepentingan dan kepuasannya rendah",
    }, {
      status: "Possible Overkill",
      message: "Layanan ini kepentingannya rendah namun kepuasannya tinggi",
    },
];

  function penentuanStatus(
    nilaiX: number,
    nilaiY: number,
    garisPerbatasan: GarisPerbatasan,
    quadrants: {status: string, message: string}[]
  ) {
    if (
      nilaiX <= garisPerbatasan.sumbuX === true &&
      nilaiY <= garisPerbatasan.sumbuY === false
    )
      return (
        <>
          <td className="px-6 py-4 whitespace-nowrap">{quadrants[0]?.status}</td>
          <td className="px-6 py-4 whitespace-nowrap">{quadrants[0]?.message}</td>
        </>
      );
    if (
      nilaiX <= garisPerbatasan.sumbuX === false &&
      nilaiY <= garisPerbatasan.sumbuY === false
    )
    return (
        <>
          <td className="px-6 py-4 whitespace-nowrap">{quadrants[1]?.status}</td>
          <td className="px-6 py-4 whitespace-nowrap">{quadrants[1]?.message}</td>
        </>
      );
    if (
      nilaiX <= garisPerbatasan.sumbuX === true &&
      nilaiY <= garisPerbatasan.sumbuY === true
    )
    return (
        <>
          <td className="px-6 py-4 whitespace-nowrap">{quadrants[2]?.status}</td>
          <td className="px-6 py-4 whitespace-nowrap">{quadrants[2]?.message}</td>
        </>
      );
    if (
      nilaiX <= garisPerbatasan.sumbuX === false &&
      nilaiY <= garisPerbatasan.sumbuY === true
    )
    return (
        <>
          <td className="px-6 py-4 whitespace-nowrap">{quadrants[3]?.status}</td>
          <td className="px-6 py-4 whitespace-nowrap">{quadrants[3]?.message}</td>
        </>
      );
  }
  return (
      <div className="min-h-fit max-h-[20rem] overflow-y-scroll md:col-start-1 md:col-end-3 overflow-x-auto rounded-xl mb-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Layanan
              </th>
              <th scope="col" className="px-6 py-3">
                Kepentingan (Y)
              </th>
              <th scope="col" className="px-6 py-3">
                Kepuasan (X)
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody>
            {datas?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.y}</td>
                  <td className="px-6 py-4">{item.x}</td>
                  {
                    penentuanStatus(item.x, item.y, garisPerbatasan, statusQuadrants)
                  }
                </tr>
              );
            })}
            <tr className="bg-cuslor-4 font-semibold text-white">
              <th scope="row" className="px-6 py-4 whitespace-nowrap">
                Garis Vertikal dan Horizontal
              </th>
              <td className="px-6 py-4">{garisPerbatasan.sumbuY}</td>
              <td className="px-6 py-4">{garisPerbatasan.sumbuX}</td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}
