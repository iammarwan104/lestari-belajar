"use client";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import Quesioner from "./Quesioner";
import { redirect, useRouter } from "next/navigation";
import WelcomeModal from "./WelcomeModal";
import toast, { Toaster } from "react-hot-toast";
import {
  checkPhoneNumberInQuesionerPage,
  quesionerSubmit,
} from "@/app/lib/action";
import ButtonSubmit from "./ButtonSubmit";

export default function PageQuesioner() {
  const initialState = {
    success: false,
    message: "",
    redirect: false,
  };
  const [state, formAction] = useFormState(quesionerSubmit, initialState);
  const [sessionId, setSessionId] = useState<number>();
  const [heRespondent, setheRespondent] = useState<boolean>(false);
  const router = useRouter();

  console.log(state, " state result");

  async function checkStatusByID(id: number) {
    const result = await checkPhoneNumberInQuesionerPage(id);
    if (result?.status) {
      sessionStorage.removeItem("id");
      sessionStorage.removeItem("phone-number");
      sessionStorage.removeItem("name");
      toast.success("Jawaban anda berhasil disimpan");
      router.push("/");
    }
  }

  useEffect(() => {
    const getSessionId = Number(sessionStorage.getItem("id"));
    const getSessionNumber = sessionStorage.getItem("phone-number");
    const getSessionName = sessionStorage.getItem("name");
    setSessionId(getSessionId);
    checkStatusByID(getSessionId);
    if (!getSessionName || !getSessionNumber || !getSessionId) {
      router.push("/signin-quesioner");
    } else {
      setheRespondent(true);
    }
  }, []);

  useEffect(() => {
    if (
      state.success === false &&
      state.redirect === false &&
      state.message.length > 0
    ) {
      toast.error(state.message);
    }
    if (state.success === true && state.redirect === true) {
      toast.success(state.message);
      setTimeout(() => {
        router.push("/");
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("phone-number");
        sessionStorage.removeItem("name");
      }, 1500);
    }
  }, [state]);

  return heRespondent ? (
    <>
      <Toaster
        position="top-center"
        toastOptions={{ duration: 3000, style: { marginTop: "1rem" } }}
      />
      <WelcomeModal />
      <form className="grid grid-cols-1 gap-6" action={formAction}>
        <input type="hidden" name="id-siswa" defaultValue={sessionId} />
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
        <ButtonSubmit />
      </form>
    </>
  ) : null;
}
