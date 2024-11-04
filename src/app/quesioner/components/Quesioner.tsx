"use client"
import { useState } from "react";
import StarRating from "./StarRating";

export default function Quesioner({ name }: { name: string }) {
  const skeletonArray = Array.from({ length: 5 }, (_, i) => i);
  const [ratingKepentingan, setRatingKepentingan]=useState(0)
  const [ratingKinerja, setRatingKinerja]=useState(0)
  return (
    <div className="bg-cuslor-2 rounded-lg p-2 text-center">
      <h2 className="uppercase mb-2">{name.replace("-", " ")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 justify-center gap-3">
        <div className="md:px-10" >
          <h3 className="block mb-4 md:mb-6 text-sm font-medium text-gray-900 dark:text-white">Kepentingan<span className="text-red-500">*</span></h3>
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
        <div className="md:px-10" >
          <h3 className="block mb-4 md:mb-6 text-sm font-medium text-gray-900 dark:text-white">Kepuasan<span className="text-red-500">*</span></h3>
          <div className="grid grid-cols-5 mt-2 items-center">
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
          className="block mb-2 mt-6 md:mt-0 text-sm font-medium text-gray-900 dark:text-white">
          Komentar Anda
        </label>
        <textarea
          id={`komentar-${name}`}
          name={`komentar-${name}`}
          rows={4}
          minLength={3}
          maxLength={100}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-cuslor-1 focus:border-cusring-cuslor-1 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-cuslor-1 dark:focus:border-cusring-cuslor-1"
          placeholder="Ini boleh tidak di isi"
        />
      </div>
    </div>
    </div>
  );
}
