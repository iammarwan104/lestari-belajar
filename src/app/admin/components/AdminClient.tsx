"use client";

import { Spinner } from "flowbite-react";
import { Suspense, useState } from "react";
import ScatterChart from "./ScatterChart";
import PelPal from "./PelPal";
import TableStudents from "./TableStudents";
import { useRouter } from "next/navigation";
import SignInAdmin from "./SignInAdmin";

export default function AdminClient({
  data,
  garisPerbatasan,
}: {
  data: any;
  garisPerbatasan: any;
}) {
  const [success, setSuccess] = useState<boolean | null>(null);
  const router = useRouter();
  function handleSignOut() {
    if (confirm("Apakah anda yakin untuk keluar") === false) return;
    router.push("/");
  }
  return (
    <>
    {
      success ? (
        <>
      <h1 className="mb-6">Admin</h1>
        <button
          className="bg-cuslor-4 px-6 py-2 rounded-full mb-4 text-base font-semibold"
          onClick={handleSignOut}>
          Sign Out
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
          <Suspense
            fallback={
              <div className="w-screen h-[60vh] flex justify-center items-center">
                {" "}
                <div className="flex justify-center gap-4">
                  <Spinner color={"warning"} /> <p className="mt-2">Load page.</p>
                </div>
              </div>
            }>
            <ScatterChart datas={data} garisPerbatasan={garisPerbatasan} />
            <PelPal datas={data} garisPerbatasan={garisPerbatasan} />
            <TableStudents />
          </Suspense>
        </div>
        </>
      ):
      (
        <>
        <SignInAdmin success={success} setSuccess={setSuccess}/>
        </>
      )
    }
    </>
  );
}
