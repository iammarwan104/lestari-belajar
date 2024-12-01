"use client";
import { useEffect, useState } from "react";
import { checkDataInputanAdmin } from "@/app/lib/action";
import toast from "react-hot-toast";

export default function SignInAdmin({
  success,
  setSuccess,
}: {
  success: any;
  setSuccess: any;
}) {
  const [loadingButton, setLoadingButton] = useState<boolean>(true);
  useEffect(() => {
    console.log(success);
  }, [success]);

  const handleSubmit = async (formData: FormData) => {
    const resultInput = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const status = await checkDataInputanAdmin(
      resultInput.username as string,
      resultInput.password as string
    );
    if (!status?.valid) {
      setSuccess(false);
      setLoadingButton(true);
      toast.error(status?.message as string);
    } else {
      const checkSession = sessionStorage.getItem("username");
      !checkSession && sessionStorage.setItem("username", `${status?.username}`)
      setSuccess(true);
      setLoadingButton(true);
    }
  };

  return (
    <section className="w-full h-screen bg-cuslor-1">
      {/* <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: { marginTop: "1rem", fontSize: "1rem" },
        }}
      /> */}
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-white">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Lestari Belajar
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Admin Signin
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(prev) => setLoadingButton(!prev)}
              action={(formData) => handleSubmit(formData)}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                  Your username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border text-base border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoFocus
                  required
                  aria-required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                  Your Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border text-base border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  aria-required
                />
              </div>
              <button
                type="submit"
                disabled={!loadingButton}
                className={`w-full text-black bg-cuslor-4 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:bg-yellow-400 focus:outline-none dark:focus:ring-yellow-400`}>
                {loadingButton ? (
                  "Sign in"
                ) : (
                  <span>
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 me-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Loading...
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
