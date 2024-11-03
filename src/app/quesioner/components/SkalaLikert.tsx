import { getAllQuesionerAnswer } from "@/app/lib/action";

export default async function SkalaLikert() {
  return (
    <form action={getAllQuesionerAnswer}>
      <div className="bg-cuslor-2 rounded-lg text-center p-2">
        <h2 className="text-lg font-semibold mb-2">Kebersihan</h2>
        <div className="grid grid-cols-2 items-center text-sm">
          <div className="">
            <h3>
              Kepentingan<span className="text-red-500">*</span>
            </h3>
            <div className="grid grid-cols-5 gap-2 lg:gap-0 mt-2 border-r-[1px] justify-center items-center">
              <div>
                <input
                  type="radio"
                  name="kepentingan"
                  id="radio-kepentingan-1"
                  className="peer/1 hidden"
                  value={1}
                />
                <label
                  htmlFor="radio-kepentingan-1"
                  className="peer-checked/1:text-yellow-300">
                  <svg
                    className="w-6 h-6 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="kepentingan"
                  id="radio-kepentingan-2"
                  className="peer/2 hidden"
                  value={2}
                />
                <label
                  htmlFor="radio-kepentingan-2"
                  className="peer-checked/2:text-yellow-300">
                  <svg
                    className="w-6 h-6 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="kepentingan"
                  id="radio-kepentingan-3"
                  className="peer/3 hidden"
                  value={3}
                />
                <label
                  htmlFor="radio-kepentingan-3"
                  className="peer-checked/3:text-yellow-300">
                  <svg
                    className="w-6 h-6 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="kepentingan"
                  id="radio-kepentingan-4"
                  className="peer/4 hidden"
                  value={4}
                />
                <label
                  htmlFor="radio-kepentingan-4"
                  className="peer-checked/4:text-yellow-300">
                  <svg
                    className="w-6 h-6 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="kepentingan"
                  id="radio-kepentingan-5"
                  className="peer/5 hidden"
                  value={5}
                />
                <label
                  htmlFor="radio-kepentingan-5"
                  className="peer-checked/5:text-yellow-300">
                  <svg
                    className="w-6 h-6 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </label>
              </div>
            </div>
          </div>
          <div>
            <h3>
              Kinerja<span className="text-red-500">*</span>
            </h3>
            <div className="grid grid-cols-5 gap-2 lg:gap-0 mt-2 border-[1px] border-red-400 justify-center items-center">
              <div>
                <input
                  type="radio"
                  name="kinerja"
                  id="radio-kinerja-1"
                  className="peer/1 hidden"
                  value={1}
                />
                <label
                  htmlFor="radio-kinerja-1"
                  className="peer-checked/1:text-yellow-300">
                  <svg
                    className="w-6 h-6 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="kinerja"
                  id="radio-kinerja-2"
                  className="peer/2 hidden"
                  value={2}
                />
                <label
                  htmlFor="radio-kinerja-2"
                  className="peer-checked/2:text-yellow-300">
                  <svg
                    className="w-6 h-6 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="kinerja"
                  id="radio-kinerja-3"
                  className="peer/3 hidden"
                  value={3}
                />
                <label
                  htmlFor="radio-kinerja-3"
                  className="peer-checked/3:text-yellow-300">
                  <svg
                    className="w-6 h-6 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="kinerja"
                  id="radio-kinerja-4"
                  className="peer/4 hidden"
                  value={4}
                />
                <label
                  htmlFor="radio-kinerja-4"
                  className="peer-checked/4:text-yellow-300">
                  <svg
                    className="w-6 h-6 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="kinerja"
                  id="radio-kinerja-5"
                  className="peer/5 hidden"
                  value={5}
                />
                <label
                  htmlFor="radio-kinerja-5"
                  className="peer-checked/5:text-yellow-300">
                  <svg
                    className="w-6 h-6 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <>
            <label
              htmlFor="comment"
              className="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white">
              Your comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-cuslor-1 focus:border-cusring-cuslor-1 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-cuslor-1 dark:focus:border-cusring-cuslor-1"
              placeholder="Ini boleh tidak di isi"
            />
          </>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Kirim
        </button>
      </div>
    </form>
  );
}
