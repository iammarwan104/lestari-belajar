"use client";
// import { updateDataSiswa } from "@/app/lib/action";
// import { DataSiswa, tambahDataSiswaInterface } from "@/app/lib/interface";
import { Button, Label, Modal, Radio } from "flowbite-react";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export default function WelcomeModal() {
  const [openModal, setOpenModal] = useState(true);
  const [name, setName] = useState("Wawan");
  // useEffect(() => {
  //   setName(String(sessionStorage.getItem("name")))
  // }, []);
  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="fixed z-50 right-8 bottom-6 bg-yellow-400 hover:bg-yellow-500">
        Panduan
      </Button>

      <Modal dismissible show={openModal} className="rounded-xl" onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-cuslor-4">Panduan Quesioner</Modal.Header>
        <Modal.Body className="text-center text-white bg-[#22436c]">
          <h1 className="mb-4 text-white font-bold text-2xl">
            Hi, {name}
          </h1>
          <div className="text-justify text-white">
            <p>Senang bisa melihat anda meluangkan waktu untuk
            ikut andil dalam upaya peningkatan kualitas pelayanan kami.</p>
            <p>Tujuan dari quesioner ini untuk mengumpulkan presepsi <strong>{name}</strong> terkait seberapa penting suatu fasilitas dan pelayanan diadakan dan seberapa puaskah <strong>{name}</strong> setelah menggunakan fasilitas dan mendapatkan pelayanan yang ada. </p>
            <p>Berikut demonstrasi cara menjawab quesioner :</p>
            <p className="text-red-400 text-center">Jika video ini tidak berfungsi, silahkan tutup jendela ini dan masuk kembali dengan tombol panduan</p>
            <video src="/image/demo.mp4" autoPlay loop ></video>
            <p>Jika <strong>{name}</strong> berkenan memberikan komentar, kami akan sangat menghargai komentar anda maka dari itu anda tidak perlu ragu dalam memberi komentar dan komentar yang telah tersimpan tidak akan diketahui siapa penulisnya oleh pihak Lestari Belajar.</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
