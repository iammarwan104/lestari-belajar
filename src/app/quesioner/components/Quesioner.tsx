"use client"
import { useState } from "react";
import StarRating from "./StarRating";

export default function Quesioner({ name,kepentingan, kepuasan }: { name: string,kepentingan: string, kepuasan:string }) {
  const skeletonArray = Array.from({ length: 5 }, (_, i) => i);
  const [ratingKepentingan, setRatingKepentingan]=useState(0)
  const [ratingKinerja, setRatingKinerja]=useState(0)
  return (
    <div className="bg-cuslor-2 rounded-lg px-2 py-4 h-fit text-center">
      <h2 className="uppercase mb-2 text-white">{name.replace("-", " ")}</h2>
      <div className="grid grid-cols-1">
      <div className="grid grid-cols-2 pb-5 justify-center gap-2 md:gap-1 lg:gap-4">
        <div className="flex flex-col justify-between lg:px-4 h-[8.2rem] sm:h-[6rem] md:h-[10rem] lg:h-[8.2rem] xl:h-[6.4rem]">
          <h3 className="w-full text-sm md:text-base font-medium text-white">{kepentingan}</h3>
          <div className="grid grid-cols-5 mt-2 px-2 sm:px-12 md:px-3 xl:px-12 items-center">
            {skeletonArray.map((star) => (
              <StarRating
                key={star}
                name={`kepentingan-${name}`}
                id={`kepentingan-${name}-${star + 1}`}
                value={star + 1}
                rating={ratingKepentingan}
                setRating={setRatingKepentingan}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between lg:px-4 h-[8.2rem] sm:h-[6rem]  md:h-[10rem] lg:h-[8.2rem] xl:h-[6.4rem]" >
          <h3 className="w-full text-sm md:text-base font-medium text-white">{kepuasan}</h3>
          <div className="grid grid-cols-5 px-2 sm:px-12 md:px-3 xl:px-12 items-center">
            {skeletonArray.map((star) => (
              <StarRating
                key={star}
                name={`kinerja-${name}`}
                id={`kinerja-${name}-${star + 1}`}
                value={star + 1}
                rating={ratingKinerja}
                setRating={setRatingKinerja}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-2 md:gap-1 lg:gap-4 md:mt-2 mb-4">
      <div className="w-full">
        <label
          htmlFor={`komentar-kepentingan-${name}`}
          className="block mb-2 mt-6 md:mt-0 text-sm font-medium text-white">
          Komentar kepentingan
        </label>
        <input
          type="text"
          id={`komentar-kepentingan-${name}`}
          name={`komentar-kepentingan-${name}`}
          minLength={3}
          maxLength={100}
          className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-cuslor-1 focus:border-cusring-cuslor-1 dark:border-gray-600 dark:focus:ring-cuslor-1 dark:focus:border-cusring-cuslor-1"
          placeholder="Optional"
        />
      </div>
      <div className="w-full">
        <label
          htmlFor={`komentar-kinerja-${name}`}
          className="block mb-2 mt-6 md:mt-0 text-sm font-medium text-white">
          Komentar kinerja
        </label>
        <input
          type="text"
          id={`komentar-kinerja-${name}`}
          name={`komentar-kinerja-${name}`}
          minLength={3}
          maxLength={100}
          className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-cuslor-1 focus:border-cusring-cuslor-1 dark:border-gray-600 dark:focus:ring-cuslor-1 dark:focus:border-cusring-cuslor-1"
          placeholder="Optional"
        />
      </div>
      </div>
    </div>
    </div>
  );
}
