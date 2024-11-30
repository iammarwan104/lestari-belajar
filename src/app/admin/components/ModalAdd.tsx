import { tambahDataSiswa } from "@/app/lib/action";
import { tambahDataSiswaInterface } from "@/app/lib/interface";
import { Button, Label, Modal, Radio } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import toast, { Toaster } from "react-hot-toast";
import ButtonSubmit from "./ButtonSubmit";

export default function ModalAdd() {
  const initialState = {
    errors: {
      nama: "",
      gender: "",
      phoneNumber: "",
    },
  };

  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const [openModal, setOpenModal] = useState(false);
  const [state, action] = useFormState<tambahDataSiswaInterface, FormData>(
    tambahDataSiswa,
    initialState
  );

  useEffect(() => {
    if (state.success === true) {
      formRef.current?.reset();
      formRef.current?.focus();
    toast.success("Data berhasil ditambah");
    }
    if (state.success === false) {
      toast.error("Data gagal ditambah");
    }
  }, [state]);

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="bg-green-400 hover:bg-green-500 font-semibold">
        Tambah
      </Button>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Tambah Data Siswa</Modal.Header>
        <Modal.Body>
          <form
            ref={formRef}
            id="form"
            className="space-y-4 md:space-y-6"
            action={action}
            // onSubmit={(e:React.FormEvent<HTMLFormElement>) => {
            //   e.preventDefault()
            //   const formData = new FormData(e.currentTarget)
            //   action(formData)
            //   console.log(formData)
            // }}
            >
            <div>
              <label
                htmlFor="nama-siswa"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nama Siswa
              </label>
              <input
                ref={nameRef}
                type="text"
                name="nama-siswa"
                id="nama-siswa"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Rudi Rahmat"
                minLength={3}
                maxLength={50}
                autoFocus
                required
                aria-required
              />
            </div>
            <div>
              <fieldset className="flex max-w-md flex-col gap-4">
                <legend className="mb-4 text-white">Jenis Kelamin</legend>
                <div className="flex items-center gap-2">
                  <Radio id="pria" name="gender" value="Pria" defaultChecked />
                  <Label htmlFor="pria">Pria</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="wanita" name="gender" value="Wanita" />
                  <Label htmlFor="wanita">Wanita</Label>
                </div>
              </fieldset>
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nomor Hp
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="083374657182"
                minLength={12}
                maxLength={13}
                required
                aria-required
              />
            </div>
            <ButtonSubmit text={"Tambah"} />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
