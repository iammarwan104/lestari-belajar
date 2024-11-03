"use client";
import { updateDataSiswa } from "@/app/lib/action";
import { DataSiswa, tambahDataSiswaInterface } from "@/app/lib/interface";
import { Button, Label, Modal, Radio } from "flowbite-react";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export default function WelcomeModal() {
  const [openModal, setOpenModal] = useState(true);
  const [name, setName] = useState("");
  useEffect(() => {
    setName(String(sessionStorage.getItem("name")))
  }, []);
  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="fixed right-8 bottom-6 bg-yellow-400 hover:bg-yellow-500">
        Panduan
      </Button>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Panduan Quesioner</Modal.Header>
        <Modal.Body className="text-center text-black">
          <h1 className="mb-4 font-bold text-2xl">
            Hi, {name}
          </h1>
          <p className="text-justify">
            Selamat datang di Lestari Belajar Evaluation, tujuan dari quesioner
            ini untuk meningkatkan mutu Lestari Belajar dengan cara mengumpulkan
            informasi terkait sudut pandang siswa terhadap kepentingan dan
            kinerja suatu fasilitas dan layanan yang telah disediakan maka dari
            itu kami harap <strong>{name}</strong> dapat
            berterus terang dalam memberikan jawaban karana setiap penilaian dan
            komentar tidak akan diketahui oleh pihak manapun termasuk pihak
            Lestari Belajar. Senang bisa melihat anda meluangkan waktu untuk
            ikut andil dalam upaya ini :){" "}
          </p>
          <ul className="mb-2 text-justify">
            <h2>Berikut penjelasan singkat mengenai objek penilaian: </h2>
            <li className="mb-4 mt-2">
              <h3 className="font-semibold">Kebersihan Mobil</h3>
              <p>
                kebersihan dalam menciptakan lingkungan belajar yang nyaman dan
                aman bagi siswa.
              </p>
            </li>

            <li className="mb-4">
              <h3 className="font-semibold">Kelengkapan alat mobil</h3>
              <p>
                Ketersediaan dan kesiapan alat-alat keselamatan dan pengajaran
                yang dibutuhkan.
              </p>
            </li>

            <li className="mb-4">
              <h3 className="font-semibold">Kelengkapan alat mobil</h3>
              <p>
                Ketersediaan dan kesiapan alat-alat keselamatan dan pengajaran
                yang dibutuhkan.
              </p>
            </li>
            <li className="mb-4">
              <h3 className="font-semibold">Performa alat mobil</h3>
              <p>
                Kinerja dan kondisi alat yang digunakan dalam mobil, seperti
                rem, mesin, sistem kemudi dan lain sebagainya
              </p>
            </li>
            <li className="mb-4">
              <h3 className="font-semibold">Performa mobil</h3>
              <p>
                Aspek teknis dan kenyamanan mobil yang digunakan untuk
                pelatihan, erta pengaruhnya terhadap pengalaman belajar siswa.
              </p>
            </li>
            <li className="mb-4">
              <h3 className="font-semibold">Kebersihan kelas mengemudi</h3>
              <p>
                Peran kebersihan ruang kelas dalam menciptakan lingkungan
                belajar yang kondusif.
              </p>
            </li>
            <li className="mb-4">
              <h3 className="font-semibold">
                Kelengkapan alat kelas mengemudi
              </h3>
              <p>
                Ketersediaan peralatan pendukung pengajaran, seperti proyektor
                dan papan tulis.
              </p>
            </li>
            <li className="mb-4">
              <h3 className="font-semibold">Performa alat kelas mengemudi</h3>
              <p>
                Kualitas dan keandalan alat bantu pengajaran yang digunakan
                selama sesi kelas teori.
              </p>
            </li>
            <li className="mb-4">
              <h3 className="font-semibold">Kebersihan lembaga kursus</h3>
              <p>
                Standar kebersihan di area lembaga kursus, termasuk fasilitas
                umum seperti toilet dan ruang tunggu.
              </p>
            </li>
            <li className="mb-4">
              <h3 className="font-semibold">Kelengkapan alat lembaga kursus</h3>
              <p>
                Ketersediaan alat dan fasilitas kantor yang mendukung
                operasional sehari-hari.
              </p>
            </li>
            <li className="mb-4">
              <h3 className="font-semibold">Etika sopan santun staff</h3>
              <p>
                Sikap dan tata krama staf dalam berinteraksi dengan siswa dan
                bagaimana ini mempengaruhi persepsi kualitas layanan.
              </p>
            </li>
            <li className="mb-4">
              <h3 className="font-semibold">Pelayanan administrasi</h3>
              <p>
                Efektivitas dan kehandalan dalam penanganan administrasi,
                termasuk pengelolaan dokumen dan informasi.
              </p>
            </li>
            <li className="mb-4">
              <h3 className="font-semibold">Pelayanan jadwal belajar</h3>
              <p>
                Kemudahan dan fleksibilitas dalam penjadwalan dan perubahan
                jadwal kelas,
              </p>
            </li>
            <li className="mb-4">
              <h3 className="font-semibold">Etika sopan santun mentor</h3>
              <p>
                Profesionalisme dan pendekatan instruktur dalam pengajaran,
                serta pengaruhnya terhadap kenyamanan dan kepercayaan siswa.
              </p>
            </li>
            <li className="mb-4">
              <h3 className="font-semibold">Pembawaan materi belajar</h3>
              <p>
                Keterampilan instruktur dalam menyampaikan materi dan
                menyesuaikan metode pengajaran dengan kebutuhan siswa, serta
                dampaknya terhadap efektivitas pembelajaran.
              </p>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}
