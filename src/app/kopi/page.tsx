"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { checkDataInputanAdmin } from "../lib/action";

export default function page() {
  const [success, setSuccess] = useState<boolean | null>(null);
  useEffect(() => {
    console.log(success);
  }, [success]);


  const handleSubmit = async (formData: FormData) => {
    const resultInput = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const status = await checkDataInputanAdmin(resultInput.username as string, resultInput.password as string)
      if (!status.valid) {
      console.log("salah");
      setSuccess(false);
      toast.error("Inputan anda salah");
    } else {
      console.log("benar");
      setSuccess(true);
    }
  };
  return (
    <>
      {success ? (
        <>
          <h1>Admin</h1>
        </>
      ) : (
        <>
      <Toaster position="top-center" toastOptions={{ duration: 3000, style: {marginTop: '1rem'} }} />
        <form action={(formData) => handleSubmit(formData)}>
          <label htmlFor="username">your username</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">your password</label>
          <input type="text" id="password" name="password" />
          <button type="submit">Sign in</button>
        </form>
        </>
      )}
    </>
  );
}
