"use client";

import { Spinner } from "flowbite-react";
import { Suspense, useEffect } from "react";
import ScatterChart from "./ScatterChart";
import PelPal from "./PelPal";
import TableStudents from "./TableStudents";
import { loginAdmin } from "@/app/lib/action";
import { redirect } from "next/navigation";

export default function AdminClient({
  data,
  garisPerbatasan,
}: {
  data: any;
  garisPerbatasan: any;
}) {
  async function checkStatusAdmin(username: string, password: string) {
    const checkDataAdmin = await loginAdmin(username, password);
    console.log(checkDataAdmin);
  }
  useEffect(() => {
    const { username, password } = {
      username: JSON.parse(sessionStorage.getItem("username") as string),
      password: JSON.parse(sessionStorage.getItem("password") as string),
    };
    console.log(username, password, typeof username);
    if (username !== null && password !== null) {
      const result = checkStatusAdmin(username, password);
      console.log(result);
    } else {
      redirect("/signin-admin");
    }
  }, []);
  return (
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
  );
}
