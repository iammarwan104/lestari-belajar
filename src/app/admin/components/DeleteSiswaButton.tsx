"use client";
import { deleteSiswa } from "@/app/lib/action";
import toast from "react-hot-toast";
import ButtonSubmit from "./ButtonSubmit";

export default function DeleteSiswaButton({ id }: { id: number }) {
  const DeleteSiswaById = deleteSiswa.bind(null, id);
  return (
    <form
      action={() => {
        if (confirm("Apakah anda yakin untuk menghapusnya") === false) return;
        const status = DeleteSiswaById();
        status.then((res) => {
          if (res.success) {
            toast.success("Data berhasil dihapus");
          } else {
            toast.error("Data gagal dihapus");
          }
        });
      }}>
      <ButtonSubmit text={"Hapus"} />
    </form>
  );
}
