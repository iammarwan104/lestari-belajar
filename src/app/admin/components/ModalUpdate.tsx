import { updateDataSiswa } from "@/app/lib/action";
import { DataSiswa, tambahDataSiswaInterface } from "@/app/lib/interface";
import { Button, Label, Modal, Radio } from "flowbite-react";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export default function ModalUpdate({dataSiswa} : {dataSiswa: DataSiswa}) {
  const initialState = {
    errors: {
      nama: "",
      gender: "",
      phoneNumber: "",
    },
  };
  const [openModal, setOpenModal] = useState(false);
  const [state, action] = useFormState<tambahDataSiswaInterface, FormData>(
    updateDataSiswa,
    initialState
  );
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);

  useEffect(() => {
    if (state.success === true) {
      setAlertSuccess(true);
      setTimeout(() => {
        setAlertSuccess(false);
        setOpenModal(false)
      }, 3000);
    } else {
      setAlertError(true);
      setTimeout(() => {
        setAlertError(false);
      }, 3000);
    }
  }, [state]);
  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="bg-yellow-400 hover:bg-yellow-500">
        Update
      </Button>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Update Data Siswa</Modal.Header>
        <Modal.Body>
        <div>
            <div
              className={`${
                alertSuccess ? "block" : "hidden"
              } py-2 px-4 bg-green-400 mb-4`}>
              Data berhasil terupdate
            </div>
            <div
              className={`${
                alertError ? "block" : "hidden"
              } py-2 px-4 bg-red-400 mb-4`}>
              Data gagal terupdate
            </div>
          </div>
          <form id="form" className="space-y-4 md:space-y-6" action={action}>
          <input type="hidden" name="id" value={dataSiswa.id} />
            <div>
              <label
                htmlFor="nama-siswa"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nama Siswa
              </label>
              <input
                type="text"
                name="nama-siswa"
                id="nama-siswa"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Rudi Rahmat"
                minLength={3}
                maxLength={50}
                defaultValue={dataSiswa.name}
                required
                aria-required
              />
            </div>
            <div>
              <fieldset className="flex max-w-md flex-col gap-4">
                <legend className="mb-4 text-black">Jenis Kelamin</legend>
                <div className="flex items-center gap-2">
                  <Radio id="pria" name="gender" value="Pria" defaultChecked={dataSiswa.gender === "Pria"? true : false} />
                  <Label htmlFor="pria">Pria</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio id="wanita" name="gender" value="Wanita" defaultChecked={dataSiswa.gender === "Wanita"? true : false} />
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
                maxLength={12}
                defaultValue={dataSiswa.phoneNumber}
                required
                aria-required
              />
            </div>
            <button
              type="submit"
              className="w-full text-black bg-cuslor-4 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Update
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
