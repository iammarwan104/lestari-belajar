"use client";

import { Spinner } from "flowbite-react";
import { Suspense, useEffect, useState } from "react";
import ScatterChart from "./ScatterChart";
import PelPal from "./PelPal";
import TableStudents from "./TableStudents";
import { useRouter } from "next/navigation";
import SignInAdmin from "./SignInAdmin";
import { checkStatusAdminServer } from "@/app/lib/action";
import TableAnalysis from "./TableAnalysis";
import DownloadDataQuesioner from "./DownloadDataQuesioner";
import TingkatKesesuaian from "./TingkatKesesuaian";

export default function AdminClient({
  data,
  garisPerbatasan,
}: {
  data: any;
  garisPerbatasan: any;
}) {
  const [success, setSuccess] = useState<boolean | null>(null);
  const [usernameSession, setUsernameSession] = useState("");
  const [viewResultAnalyst, setViewResultAnalyst] = useState<string>("left");
  const router = useRouter();
  function handleSignOut() {
    if (confirm("Apakah anda yakin untuk keluar") === false) return;
    sessionStorage.removeItem("username");
    router.push("/");
  }

  async function checkStatusAdmin(username: string) {
    const result = await checkStatusAdminServer(username);
    if (result) setSuccess(true);
  }
  useEffect(() => {
    const getUsernameSession = sessionStorage.getItem("username");
    if (getUsernameSession) {
      setUsernameSession(getUsernameSession);
      checkStatusAdmin(getUsernameSession);
    }
  }, []);

  return (
    <>
      {success || usernameSession ? (
        <>
          <h1 className="mb-6 text-white">Admin</h1>
          <button
            className="bg-cuslor-4 px-6 py-2 text-white rounded-full mb-4 text-base font-semibold"
            onClick={handleSignOut}>
            Sign Out
          </button>
          <div className="flex justify-center items-center">
            <button
              className={`${
                viewResultAnalyst === "right"
                  ? "bg-none border-2 border-cuslor-4 hover:text-cuslor-4"
                  : "bg-cuslor-4  border-2 border-cuslor-4"
              } px-6 py-2 text-white rounded-l-full mb-4 text-base font-semibold`}
              onClick={() => setViewResultAnalyst("left")}>
              Kuadran Kartesius
            </button>
            <button
              className={`${
                viewResultAnalyst === "left"
                  ? "bg-non border-2 border-cuslor-4  hover:text-cuslor-4"
                  : "bg-cuslor-4 border-2 border-cuslor-4 "
              } px-6 py-2 text-white rounded-r-full mb-4 text-base font-semibold`}
              onClick={() => setViewResultAnalyst("right")}>
              Tingkat Kesesuaian
            </button>
          </div>
          <div className="">
            <Suspense
              fallback={
                <div className="w-screen h-[60vh]">
                  {" "}
                  <div className="flex justify-center gap-4">
                    <Spinner color={"warning"} />{" "}
                    <p className="mt-2">Load page.</p>
                  </div>
                </div>
              }>
              <div className="flex flex-col md:flex-row overflow-x-scroll justify-center items-center gap-4 pb-4">
                {viewResultAnalyst === "left" ? (
                  <>
                    <ScatterChart
                      datas={data}
                      garisPerbatasan={garisPerbatasan}
                    />
                    <TableAnalysis
                      datas={data}
                      garisPerbatasan={garisPerbatasan}
                    />
                  </>
                ) : (
                  <TingkatKesesuaian />
                )}
              </div>
              <PelPal datas={data} garisPerbatasan={garisPerbatasan} />
            <TableStudents />
            <DownloadDataQuesioner />
            </Suspense>
          </div>
        </>
      ) : (
        <>
          <SignInAdmin success={success} setSuccess={setSuccess} />
        </>
      )}
    </>
  );
}
