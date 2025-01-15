"use client";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import Quesioner from "./Quesioner";
import { useRouter } from "next/navigation";
import WelcomeModal from "./WelcomeModal";
import toast, { Toaster } from "react-hot-toast";
import {
  checkPhoneNumberInQuesionerPage,
  quesionerSubmit,
} from "@/app/lib/action";
import ButtonSubmit from "./ButtonSubmit";
import { Spinner } from "flowbite-react";

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
      }, 3000);
    }
  }, [state]);

  return heRespondent ? (
    <>
      <Toaster
        position="top-center"
        toastOptions={{ duration: 3000, style: { marginTop: "1rem" } }}
      />
      <WelcomeModal />
      <form className="grid grid-cols-1 gap-6 px-4 xl:px-8" action={formAction}>
        <input type="hidden" name="id-siswa" defaultValue={sessionId} />
        <div>
          <h1 className="text-xl font-semibold text-center mb-4">
            Fasilitas Mobil Kursus
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner name="kebersihan-mobil"
              kepentingan="Seberapa penting menurut anda akan kebersihan mobil kursus"
              kepuasan="Seberapa bersih mobil kursus yang anda lihat dan rasakan" />
            <Quesioner name="kelengkapan-performa-alat-mobil"
              kepentingan="Seberapa penting menurut anda akan kelengkapan dan performa alat pada mobil kursus"
              kepuasan="Seberapa lengkap dan baik performa alat mobil kursus menurut anda" />
            <Quesioner name="performa-mobil"
              kepentingan="Seberapa penting menurut anda akan performa mobil kursus"
              kepuasan="Seberapa baik performa mobil kursus menurut anda" />
        </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-center mb-4 text-white">
            Layanan Staff Lembaga kursus
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner
              name="etika-sopan-santun-staff"
              kepentingan="Seberapa penting menurut anda staff kantor melayani siswa dengan penuh sopan santun dan etika yang baik"
              kepuasan="Seberapa baik etika dan sopan santun staff kantor dalam melayani anda"
            />
            <Quesioner name="skill-komunikasi-staff-kantor"
              kepentingan="Seberapa penting menurut anda staff kantor memiliki skill komunikasi yang baik"
              kepuasan="Seberapa baik skill komunikasi staff kantor menurut anda" />
            <Quesioner
              name="pelayanan-informasi-jadwal-belajar"
              kepentingan="Seberapa penting menurut anda kemudahan dalam meperoleh informasi terkait kursus dan jadwal belajar"
              kepuasan="Seberapa mudah menurut anda dalam memperoleh informasi terkait kursus dan jadwal belajar"
            />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-center mb-4">
            Layanan Mentor kursus Mengemudi
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Quesioner name="etika-sopan-santun-mentor-mengemudi"
              kepentingan="Seberapa penting menurut anda mentor mengajari siswa dengan penuh sopan santun dan etika yang baik"
              kepuasan="Seberapa baik etika & sopan santun mentor yang telah mengajari anda" />
            <Quesioner name="skill-komunikasi-mentor-mengemudi"
              kepentingan="Seberapa penting menurut anda mentor memiliki skill komunikasi yang baik"
              kepuasan="Seberapa baik skill komunikasi mentor menurut anda" />
            <Quesioner name="pengawasan-penuh-mentor-mengemudi"
              kepentingan="Seberapa penting menurut anda mentor memberi pengawasan penuh kepada siswa saat proses belajar mengajar"
              kepuasan="Seberapa penuh pengawasan mentor saat mengajari anda" />
            <Quesioner name="pembawaan-materi-belajar-mentor-mengemudi"
              kepentingan="Seberapa penting menurut anda mentor mampu memberi pemahaman yang mudah terkait materi belajar"
              kepuasan="Seberapa mudah kah yang anda rasakan dalam memahami materi belajar yang diajarkan oleh mentor" />
          </div>
        </div>
        <ButtonSubmit />
      </form>
    </>
  ) : (
    <div className="w-screen h-screen flex items-center justify-center">
    <div className="flex items-center justify-center gap-4 text-center mt-4">
      <Spinner color={"warning"} size="xl" />
    </div>
  </div>
  )
}
