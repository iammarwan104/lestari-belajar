"use client"
import { useState } from "react";
import StarRating from "./StarRating";

export default function Quesioner({ name,kepentingan, kepuasan }: { name: string,kepentingan: string, kepuasan:string }) {
  const skeletonArray = Array.from({ length: 5 }, (_, i) => i);
  const [ratingKepentingan, setRatingKepentingan]=useState(0)
  const [ratingKinerja, setRatingKinerja]=useState(0)
  return (
    <div className="bg-cuslor-2 rounded-lg p-2 text-center">
      <h2 className="uppercase mb-2 text-white">{name.replace("-", " ")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="grid grid-cols-2 md:grid-cols-1 md:pb-5 md:grid-rows-2 justify-center gap-3 md:gap-6">
        <div className="md:px-2 lg:px-4" >
          <h3 className="block min-h-[5rem] max-h-[12rem] md:h-fit w-full mb-4 md:mb-6 text-sm font-medium text-white">{kepentingan}</h3>
          <div className="grid grid-cols-5 mt-2 items-center">
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
        <div className="md:px-2 lg:px-4" >
          <h3 className="min-h-[5rem] max-h-[12rem] md:h-fit md:min-h-fit block mb-4 md:mb-6 text-sm font-medium text-white">{kepuasan}</h3>
          <div className="grid grid-cols-5 items-center">
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
      <div>
        <label
          htmlFor={`komentar-${name}`}
          className="block mb-2 mt-6 md:mt-0 text-sm font-medium text-white">
          Komentar Anda
        </label>
        <textarea
          id={`komentar-${name}`}
          name={`komentar-${name}`}
          rows={4}
          minLength={3}
          maxLength={100}
          className="block p-2.5 w-full md:h-[86%] lg:h-[75%] xl:h-[80%] text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-cuslor-1 focus:border-cusring-cuslor-1 dark:border-gray-600 dark:focus:ring-cuslor-1 dark:focus:border-cusring-cuslor-1"
          placeholder="Ini boleh tidak di isi"
        />
      </div>
    </div>
    </div>
  );
}
