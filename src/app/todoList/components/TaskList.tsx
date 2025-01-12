"use client";

import { deleteSchedule, taskFinish } from "@/app/lib/action";
import { Check, Plus, SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";

export default function TaskList({
  datas,
}: {
  datas:
    | { id: number; image: string | null; nama: string; price: string }[]
    | undefined;
}) {
  function handleDelete(id:number){

    const deleteTask = async () => {
      await deleteSchedule(id)
    }
    deleteTask()
  }

  function handleFinish(id:number, nama:string){
    if (confirm(`Apakah anda yakin telah menyesesaikan ${nama}`) === false) return;
    const jam = new Date().getHours().toString()
    const menit = new Date().getMinutes().toString()
    const timeFinish = `${jam}:${menit}`
    const saveTask = async () => await taskFinish(id, nama, timeFinish);
    saveTask()    
  }
  return (
    <>
      <div className="w-[90%] md:w-1/2 mx-auto">
        <h1 className="text-center text-xl font-semibold mb-2">
          List Schedule
        </h1>
        <div className="w-full flex gap-4 items-center">
          <Link
            href={"todoList/add"}
            className="flex gap-2 items-center mb-4 font-semibold py-2.5 px-3 bg-green-500 hover:bg-green-400 rounded-lg">
            <Plus />
            <span>Tambah Schedule</span>
          </Link>
        </div>
        <div className="relative min-h-fit max-h-[20rem] overflow-y-scroll overflow-x-auto rounded-xl mb-2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Schedule
                </th>
                <th scope="col" className="px-6 py-3">
                  Waktu
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {!datas ? (
                <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td colSpan={3} className="px-6 py-4 text-center">Tidak ada schedule</td>
                </tr>  
              ) : (
                datas?.map((item) => {
                  return (
                    <tr
                      key={item.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="w-[5rem] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.nama}
                      </th>
                      <td className="px-6 py-4">{item.price}</td>
                      <td className="px-6 py-4 flex gap-4 justify-end">
                        <span onClick={()=> handleFinish(item.id, item.nama)} className="rounded-lg py-2.5 px-3 hover:bg-neutral-600 hover:text-green-500">
                          <Check />
                        </span>
                        <Link
                          href={`todoList/update?id=${item.id}`}
                          className="rounded-lg py-2.5 px-3 hover:bg-neutral-600 hover:text-cuslor-4">
                          <SquarePen />
                        </Link>
                        <span onClick={()=> handleDelete(item.id)} className="rounded-lg py-2.5 px-3 hover:bg-neutral-600 hover:text-red-500">
                          <Trash2 />
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        {/* <div className="flex justify-center">
        <ComponentPagination totalPages={totalPages} />
        </div>
        <p className="mt-2 text-white font-semibold text-center">{totalSiswa} siswa terdaftar</p> */}
      </div>
    </>
  );
}
