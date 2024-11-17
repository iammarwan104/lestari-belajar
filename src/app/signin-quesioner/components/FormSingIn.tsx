"use client";
import { useFormState } from "react-dom";
import { CheckNumberPhone } from "@/app/lib/interface";
import { checkPhoneNumberSignIn } from "@/app/lib/action";
import { redirect } from "next/navigation";

export default function FormSignIn() {
  const [state, action] = useFormState<CheckNumberPhone, FormData>(
    checkPhoneNumberSignIn,
    { success: null, phoneNumber: null, errorMessage: "" }
  );
  console.log(state);
  const alert = () => {
    if (state?.success === null) {
      return;
    }
    if (state?.success === false) {
      return (
        <div
          className={`flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400`}
          role="alert">
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Danger alert!</span>{" "}
            {state?.errorMessage}
          </div>
        </div>
      );
    } else {
      sessionStorage.setItem("id", JSON.stringify(state.id));
      sessionStorage.setItem("phone-number", JSON.stringify(state.phoneNumber));
      sessionStorage.setItem("name", JSON.stringify(state.name));
      redirect("/quesioner");
    }
  };

  return (
    <section className="fixed w-screen h-screen bg-cuslor-1 overflow-y-scroll">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
              Quesioner Login
            </h1>
            <form className="space-y-4 md:space-y-6" action={action}>
              {alert()}
              <div>
                <label
                  htmlFor="phone-number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your phone number
                </label>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="082347823981"
                  minLength={12}
                  maxLength={12}
                  autoFocus
                  required
                  aria-required
                />
              </div>
              <button
                type="submit"
                className="w-full text-black bg-cuslor-4 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
