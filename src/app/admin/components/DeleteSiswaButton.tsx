"use client";
import { deleteSiswa } from "@/app/lib/action";
import { Button } from "flowbite-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function DeleteSiswaButton({ id }: { id: number }) {
  const DeleteSiswaById = deleteSiswa.bind(null, id);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);
  return (
    <form
      action={() => {
        if (confirm("Apakah anda yakin untuk menghapusnya") === false) return;
        setLoadingDelete(true);
        const status = DeleteSiswaById();
        status.then((res) => {
          if (res.success) {
            toast.success("Data berhasil dihapus");
          } else {
            toast.error("Data gagal dihapus");
          }
        });
      }}>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <Button type="submit" className="bg-red-500 hover:bg-red-600">
        Delete
      </Button>
    </form>
  );
}
