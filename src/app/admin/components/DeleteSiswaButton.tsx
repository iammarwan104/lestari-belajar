'use client'
import { deleteSiswa } from "@/app/lib/action"
import { Button, Spinner } from "flowbite-react";
import { useState } from "react";

export default function DeleteSiswaButton({id}:{id:number}){
    const DeleteSiswaById = deleteSiswa.bind(null, id);
    const[loadingDelete,setLoadingDelete]= useState<boolean>(false)
return(
<form action={()=>{
    if(confirm("Apakah anda yakin untuk menghapusnya") === false) return
    setLoadingDelete(true)
    DeleteSiswaById()
}}>
    <Button type="submit"  className="bg-red-500 hover:bg-red-600">Delete</Button>
</form>
)
}