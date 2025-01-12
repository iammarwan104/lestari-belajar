import { deleteScheduleFinish } from "@/app/lib/action";
import { Trash2 } from "lucide-react";

export default function ListFinish({datas}:{datas:{
  id: number;
  nama: string;
  timeFinish: string;
}[] | undefined}) {
  function handleDelete(id:number){

    const deleteTask = async () => {
      await deleteScheduleFinish(id)
    }
    deleteTask()
  }

  return (
    <>
      <div className="w-[90%] md:w-1/2 mx-auto pt-6">
      <h1 className="text-center text-xl font-semibold mb-4">List Schedule Selesai</h1>
        <div className="relative min-h-fit max-h-[20rem] overflow-y-scroll overflow-x-auto rounded-xl">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Schedule
                </th>
                <th scope="col" className="px-6 py-3">
                  Waktu Selesai
                </th><th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {!datas ? (
                <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td colSpan={3} className="px-6 py-4 text-center">Tidak ada schedule</td>
                </tr>  
              ) : (
                datas?.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="w-[5rem] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.nama}
                    </th>
                    <td className="px-6 py-4">{item.timeFinish}</td>
                    <td className="px-6 py-4 flex gap-4 justify-end">
                      <span onClick={()=> handleDelete(item.id)} className="rounded-lg py-2.5 px-3 hover:bg-neutral-600 hover:text-red-500"><Trash2 /></span>
                    </td>
                  </tr>
                );
              }))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}