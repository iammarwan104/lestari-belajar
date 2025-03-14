import Image from "next/image";
import ButtonLandingPage from "./components/ButtonLandingPage";

export default function Home() {
  return (
    <>
      <div>
      <section className="py-12 md:py-0 h-fit md:h-fit lg:h-screen px-4 bg-cuslor-1 lg:px-24 mx-auto flex flex-col-reverse md:flex-row gap-8 justify-end md:justify-between items-end md:items-center ">
        <div className="text-white w-full text-center md:text-left flex justify-center md:justify-start items-center md:items-start flex-col gap-4 ">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            Lestari Belajar
          </h1>
          <p className="text-base lg:text-lg lg:w-[78%]">
            Investasikan waktumu untuk mempelajari skill baru. Itu adalah
            investasi terbaik yang bisa kamu lakukan untuk masa depanmu.
          </p>
        </div>
        <div className="w-full flex justify-center md:justify-end">
          <Image
            src={"/image/hero-dashboard.webp"}
            fetchPriority={"high"}
            width={417}
            height={440}
            priority
            alt={"Hero landing page"}
            className="block"
          />
        </div>
      </section>
      <section className="py-12 md:py-0 h-fit md:h-fit lg:h-screen px-4 bg-cuslor-1 lg:px-24 mx-auto flex flex-col-reverse md:flex-row-reverse gap-8 justify-end md:justify-between items-end md:items-center ">
        <div className="text-white w-full text-center md:text-left flex flex-col justify-center md:justify-start items-center md:items-start gap-4 ">
          <span className="text-sm font-semibold px-6 py-1 rounded-full bg-cuslor-4">
            Standar SKNI
          </span>
          <h1 className="text-3xl lg:text-5xl font-semibold">
            Kursus Mengemudi
          </h1>
          <p className="text-base lg:text-lg lg:w-[78%]">
            Investasikan waktumu untuk mempelajari skill baru. Itu adalah
            investasi terbaik yang bisa kamu lakukan untuk masa depanmu.
          </p>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 text-gray-300 me-1 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-1 text-base font-medium text-gray-500 dark:text-gray-400">
              4.95
            </p>
            <p className="ms-1 text-base font-medium text-gray-500 dark:text-gray-400">
              out of
            </p>
            <p className="ms-1 text-base font-medium text-gray-500 dark:text-gray-400">
              5
            </p>
          </div>
          <ButtonLandingPage
            lokasi={"/kursus-mengemudi"}
            penilaian={"/hasil-penilaian"}
          />
        </div>
        <div className="w-full flex justify-center md:justify-start">
          <Image
            src={"/image/hero-mengemudi.webp"}
            width={462}
            height={464}
            alt={"Hero landing page"}
            className="block"
          />
        </div>
      </section>
      <section className="py-12 md:py-0 h-fit md:h-fit lg:h-screen px-4 bg-cuslor-1 lg:px-24 mx-auto flex flex-col-reverse md:flex-row gap-8 justify-end md:justify-between items-end md:items-center ">
        <div className="text-white w-full text-center md:text-left flex justify-center md:justify-start items-center md:items-start flex-col gap-4 ">
          <span className="text-sm font-semibold px-6 py-1 rounded-full bg-cuslor-4">
            Standar SKNI
          </span>
          <h1 className="text-3xl lg:text-5xl font-semibold">
            Kursus Komputer
          </h1>
          <p className="text-base lg:text-lg lg:w-[78%]">
            Investasikan waktumu untuk mempelajari skill baru. Itu adalah
            investasi terbaik yang bisa kamu lakukan untuk masa depanmu.
          </p>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 text-gray-300 me-1 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-1 text-base font-medium text-gray-500 dark:text-gray-400">
              4.95
            </p>
            <p className="ms-1 text-base font-medium text-gray-500 dark:text-gray-400">
              out of
            </p>
            <p className="ms-1 text-base font-medium text-gray-500 dark:text-gray-400">
              5
            </p>
          </div>
          <ButtonLandingPage
            lokasi={"/kursus-komputer"}
            penilaian={"/belum-tersedia"}
          />
        </div>
        <div className="w-full flex justify-center md:justify-end">
          <Image
            src={"/image/hero-komputer.webp"}
            width={462}
            height={464}
            alt={"Hero landing page"}
            className="block"
          />
        </div>
      </section>
      <section className="py-12 md:py-0 h-fit md:h-fit lg:h-screen px-4 bg-cuslor-1 lg:px-24 mx-auto flex flex-col-reverse md:flex-row-reverse gap-8 justify-end md:justify-between items-end md:items-center ">
        <div className="text-white w-full text-center md:text-left flex flex-col justify-center md:justify-start items-center md:items-start gap-4 ">
          <span className="text-sm font-semibold px-6 py-1 rounded-full bg-cuslor-4">
            Standar SKNI
          </span>
          <h1 className="text-3xl lg:text-5xl font-semibold">
            Kursus MC & Protokol
          </h1>
          <p className="text-base lg:text-lg lg:w-[78%]">
            Investasikan waktumu untuk mempelajari skill baru. Itu adalah
            investasi terbaik yang bisa kamu lakukan untuk masa depanmu.
          </p>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-5 h-5 text-gray-300 me-1 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-1 text-base font-medium text-gray-500 dark:text-gray-400">
              4.95
            </p>
            <p className="ms-1 text-base font-medium text-gray-500 dark:text-gray-400">
              out of
            </p>
            <p className="ms-1 text-base font-medium text-gray-500 dark:text-gray-400">
              5
            </p>
          </div>

          <ButtonLandingPage
            lokasi={"/kursus-mc-protokoler"}
            penilaian={"/belum-tersedia"}
          />
        </div>
        <div className="w-full flex justify-center md:justify-start">
          <Image
            src={"/image/hero-mc-1.webp"}
            width={462}
            height={464}
            alt={"Hero landing page"}
            className="block"
          />
        </div>
      </section>
    </div>
    </>
  );
}
