"use client";
import { getDataSiswa } from "@/app/lib/action";
import { Gender } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Latihan() {
  const params = useSearchParams();
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState<
    {
      id: number;
      name: string;
      gender: Gender;
      phoneNumber: string;
      status: boolean;
      createdAt: Date;
    }[]
  >();

  // useEffect(()=>{
  //   const getPage = Number(params.get("page"));
  //   console.log(getPage);
  //   // setPage(getPage)
  // },[])

  const getPageParam = Number(params.get("page"));
  const getDataStudents = useCallback(async () => {
    try {
      setLoading(true);
      console.log(getPageParam);
      if(getPageParam === 0){
        const dataSiswa = await getDataSiswa(1);
        if (dataSiswa && dataSiswa.data) {
          setDatas(dataSiswa?.data);
          setPage(1)
        }
      }else{
        const dataSiswa = await getDataSiswa(getPageParam);
        if (dataSiswa && dataSiswa.data) {
          setDatas(dataSiswa?.data);
          setPage(getPageParam)
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Data gagal diambil");
      }
    } finally {
      setLoading(false);
    }
  }, [getPageParam]);
  useEffect(() => {
    getDataStudents();
  }, [getDataStudents]);

  const kopi = getPageParam === 0 ? 1 : getPageParam;
  const handlingReduction = () => {
    setPage(() => {
    const newPage = Math.max(kopi - 1, 1);
    router.push(`/todoList?page=${newPage}`);
      return newPage;
    });
  };

  const handlingAddiction = () => {
    setPage(() => {
      const newPage = kopi + 1;
      router.push(`/todoList?page=${newPage}`);
      return newPage;
    });
  };

  return (
    <div className="w-fit mx-auto text-center">
      <h1>Pagination</h1>
      {loading ? (
        <div className="flex items-center justify-center h-[240px] w-[151.7px]">
          Loading...
        </div>
      ) : (
        <ul>
          {datas?.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>
      )}
      <div className="flex gap-2 items-center justify-center pl-8">
        <button className="py-2 px-3" onClick={handlingReduction}>
          -
        </button>
        <span className="py-2 px-3">{page}</span>
        <button className="py-2 px-3" onClick={handlingAddiction}>
          +
        </button>
      </div>
    </div>
  );
}
