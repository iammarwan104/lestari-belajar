"use client";
import { getTingkatKesesuaian } from "@/app/lib/action";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
interface Result {
  name: string;
  process: string;
  result: number;
}
export default function TingkatKesesuaian() {
  const [result, setResult] = useState<Result[]>([]);
  async function getData() {
    const result = await getTingkatKesesuaian();
    if (result?.length) {
      setResult(result);
      console.table(result);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full min-h-fit max-h-[20.6rem] overflow-y-scroll">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Layanan
            </th>
            <th scope="col" className="px-6 py-3">
              Proses
            </th>
            <th scope="col" className="px-6 py-3">
              Hasil
            </th>
          </tr>
        </thead>
        <tbody>
          {!result.length ? (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                <Spinner />
              </th>
              <td className="px-6 py-4">
                <Spinner />
              </td>
              <td className="px-6 py-4">
                <Spinner />
              </td>{" "}
            </tr>
          ) : (
            result.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.process}</td>
                <td className="px-6 py-4">{item.result}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
