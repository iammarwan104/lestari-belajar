"use client";
import { useFormState } from "react-dom";
import ButtonSubmit from "../components/ButtonSubmit";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { TambahScheduleInterface } from "@/app/lib/interface";
import { tambahSchedule } from "@/app/lib/action";
const initialState = {
  success: null,
  errorMessage: null,
};
export default function page() {
  const router = useRouter();
  const [state, action] = useFormState<TambahScheduleInterface, FormData>(
    tambahSchedule,
    initialState
  );
  function generateTanggalBesok() {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const tomorrow = today.toISOString().slice(0, 10);
    return tomorrow;
  }

  return (
    <>
      <h1 className="text-center font-semibold text-xl mb-4">Buat Schedule</h1>
      <form
        id="form"
        className="w-1/3 mx-auto space-y-4 md:space-y-6"
        action={action}>
        <div>
          <label
            htmlFor="schedule"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Schedule
          </label>
          <input
            // ref={nameRef}
            type="text"
            name="schedule"
            id="schedule"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Mandi pagi"
            minLength={3}
            maxLength={50}
            autoFocus
            required
            aria-required
          />
        </div>
        <label
          htmlFor="time"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select time:
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="time"
            id="time"
            name="time"
            className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <input
            type="date"
            hidden
            aria-hidden
            name="date"
            id="date"
            defaultValue={generateTanggalBesok()}
          />
        </div>
        <ButtonSubmit text={"Buat"} />
      </form>
    </>
  );
}
