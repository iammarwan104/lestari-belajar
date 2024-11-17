"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

enum Error {
  Configuration = "Configuration",
  AccessDenied = "AccessDenied",
  Verification = "Verification",
  CredentialsSignin = "CredentialsSignin"
}

const errorMap = {
  [Error.Configuration]: "There is a problem with the server configuration.",
  [Error.AccessDenied]: "Access denied.",
  [Error.Verification]: "The token has expired or has already been used.",
  [Error.CredentialsSignin]: "Username & Password anda salah",
};
export default function Page() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error") as Error;
  return (
    <section className="fixed w-screen h-screen flex items-center justify-center bg-cuslor-1">
    <div className="w-[80%] md:w-[35%] lg:w-[25%] bg-white p-4 rounded-xl text-black text-center">
      <h1>Terjadi Kesalahan!</h1>
      <p className="text-2xl font-semibold mt-4 mb-6 text-red-500">{errorMap[error] ?? "An unknown error occurred."}</p>
      <Link 
      href={"/api/auth/signin"}
      className="text-black bg-cuslor-4 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center"
      >Coba lagi!</Link>
    </div>
    </section>
  );
}
