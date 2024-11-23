"use client";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import {
  checkPhoneNumberInQuesionerPage,
  quesionerSubmit,
} from "../lib/action";
import Quesioner from "./components/Quesioner";
import { redirect, useRouter } from "next/navigation";
import WelcomeModal from "./components/WelcomeModal";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const initialState = {
    success: false,
    message: "",
    redirect: false,
  };
  const [state, action] = useFormState(quesionerSubmit, initialState);
  const [handleClickBeriNilai, setHandleClickBeriNilai] = useState(true);
  const router = useRouter();
  console.log(state);
  useEffect(() => {
    if (state.success === false && state.redirect === false) {
      setHandleClickBeriNilai(true);
    }
    if (state.success === true && state.redirect === true) {
      setHandleClickBeriNilai(true);
    }
    if (
      state.success === false &&
      state.redirect === false &&
      state.message.length > 0
    ) {
      toast.error(state.message);
    }
    if (state.success === true && state.redirect === true) {
      toast.success(state.message);
    }
  }, [state]);
  if (state.redirect === true) {
    setTimeout(() => {
      router.push("/");
      sessionStorage.removeItem("id");
      sessionStorage.removeItem("phone-number");
      sessionStorage.removeItem("name");
    }, 1500);
  }

  const [status, setStatus] = useState<boolean | undefined>(false);
  const getSessionId = Number(sessionStorage.getItem("id"));
  const getSessionNumber = sessionStorage.getItem("phone-number");
  const getSessionName = sessionStorage.getItem("name");
  async function checkStatusByID(id: number) {
    const result = await checkPhoneNumberInQuesionerPage(id);
    setStatus(result?.status);
    return result;
  }
  useEffect(() => {
    checkStatusByID(getSessionId);
  }, []);
  console.log(status);
  if (!getSessionName || !getSessionNumber || !getSessionId) {
    redirect("/signin-quesioner");
  }

  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
      <WelcomeModal />
      <form
        className="grid grid-cols-1 gap-6"
        action={action}
        onSubmit={(prev) => setHandleClickBeriNilai(!prev)}>
        <input type="hidden" name="id-siswa" defaultValue={getSessionId} />
        {/* <div>
          <h1 className="text-xl font-semibold text-center mb-4">
            Fasilitas Mobil Kursus
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner name="kebersihan-mobil" />
            <Quesioner name="kelengkapan-alat-mobil" />
            <Quesioner name="performa-alat-mobil" />
            <Quesioner name="performa-mobil" />
        </div>
        </div> */}

        {/* <div>
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
        </div> */}

        <div>
          <h1 className="text-xl font-semibold text-center mb-4 text-white">
            Layanan Staff Lembaga kursus
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner
              name="etika-sopan-santun"
              kepentingan="Seberapa penting menurut anda staff kantor melayani siswa dengan penuh sopan santun"
              kepuasan="Seberapa baik sopan santun staff kantor dalam melayani anda"
            />
            <Quesioner
              name="pelayanan-administrasi"
              kepentingan="Seberapa penting bagi anda staff kantor memberi pelayanan administrasi yang baik"
              kepuasan="Seberapa baik staff kantor memberi pelayanan administrasi kepada anda"
            />
            <Quesioner
              name="pelayanan-jadwal-belajar"
              kepentingan="Seberapa penting menurut anda kemudahan dalam menghubungi staff kantor untuk memperoleh informasi terkait kursus mengemudi seperti jadwal belajar, konsultasi, dll"
              kepuasan="Seberapa mudah yang anda rasakan dalam menghubungi staff kantor untuk memperoleh informasi terkait kursus mengemudi"
            />
          </div>
        </div>

        {/* <div>
          <h1 className="text-xl font-semibold text-center mb-4">
            Layanan Mentor kursus Mengemudi
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner name="etika-sopan-santun-mentor-mengemudi" />
            <Quesioner name="pembawaan-materi-belajar-mentor-mengemudi" />
          </div>
        </div> */}
        <div>
          <button
            type="submit"
            disabled={!handleClickBeriNilai}
            className={`w-full text-white bg-cuslor-4 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:bg-yellow-400 focus:outline-none dark:focus:ring-yellow-400`}>
            {handleClickBeriNilai ? (
              "Kirim"
            ) : (
              <span>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </span>
            )}
          </button>
        </div>
      </form>
    </>
  );
}
