"use client";
import { useFormState, useFormStatus } from "react-dom";
import Quesioner from "./Quesioner";
import SkalaLikert from "./SkalaLikert";
import {
  checkPhoneNumberInQuesionerPage,
  createQuesionerAnswer,
} from "@/app/lib/action";
import { State } from "../../lib/interface";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

const initialState = {
  success: null,
  message: null,
  errors: {},
  phoneNumber: null,
};
export default function PageQuesioner() {
  const [state, formAction] = useFormState<State, FormData>(
    createQuesionerAnswer,
    initialState
  );
  const { pending } = useFormStatus();
  if (state?.errors) {
    console.log(Object.values(state?.errors)[0]);
  }
  const alert = () => {
    if (state?.success === null) {
      return;
    }
    if (state?.success === false) {
      return (
        <div
          className={`flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400`}
          role="alert">
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Danger alert!</span>{" "}
            {state?.errors ? Object.values(state?.errors)[0] : state?.message}
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={`flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800`}
          role="alert">
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Success alert!</span> {state?.message}
          </div>
        </div>
      );
    }
  };
  const[status, setStatus] = useState<boolean | undefined>(false)
  const getSessionId = Number(sessionStorage.getItem("id"));
  const getSessionNumber = sessionStorage.getItem("phone-number");
  const getSessionName = sessionStorage.getItem("name");
  async function checkStatusByID(id: number) {
    const result = await checkPhoneNumberInQuesionerPage(id);
    setStatus(result?.status)
    return result
  }
  useEffect(() => {
    checkStatusByID(getSessionId)
  }, []);
  console.log(status)
  if (!getSessionName || !getSessionNumber || !getSessionId) {
    redirect("/signin-quesioner");
  }


  return (
    <div className="bg-cuslor-1 pt-14">
      <h1 className="text-white text-2xl font-semibold text-center mb-10">
        Lestari Belajar Evaluation
      </h1>
      {alert()}
      <form className="grid grid-cols-1 gap-6" action={formAction}>
        <input type="hidden" name="id-siswa" defaultValue={getSessionId} />
        <div>
          <h1 className="text-xl font-semibold text-center mb-4">
            Fasilitas Mobil Kursus
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner name="kebersihan-mobil" />
            <Quesioner name="kelengkapan-alat-mobil" />
            <Quesioner name="performa-alat-mobil" />
            <Quesioner name="performa-mobil" />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-center mb-4">
            Fasilitas Kelas Mengemudi
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner name="kebersihan-kelas-mengemudi" />
            <Quesioner name="kelengkapan-alat-kelas-mengemudi" />
            <Quesioner name="performa-alat-kelas-mengemudi" />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-center mb-4">
            Fasilitas Lembaga Kursus
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner name="kebersihan-lembaga-kursus" />
            <Quesioner name="kelengkapan-alat-lembaga-kursus" />
            <Quesioner name="performa-alat-lembaga-kursus" />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-center mb-4">
            Layanan Staff Lembaga kursus
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner name="etika-sopan-santun" />
            <Quesioner name="pelayanan-administrasi" />
            <Quesioner name="pelayanan-jadwal-belajar" />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-center mb-4">
            Layanan Mentor kursus Mengemudi
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner name="etika-sopan-santun-mentor-mengemudi" />
            <Quesioner name="pembawaan-materi-belajar-mentor-mengemudi" />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className={`w-full text-white bg-cuslor-4 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${
              pending ? "bg-red-500" : "dark:bg-cuslor-4"
            } dark:hover:bg-yellow-400 focus:outline-none dark:focus:ring-yellow-400`}>
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
}
