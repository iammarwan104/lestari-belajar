import Link from "next/link";

export default function page() {
  return (
<section>
    <div className="flex items-center py-8 px-4 mx-auto max-w-screen-xl h-[90vh] lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">Maaf</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl dark:text-white">Hasil Penilaian Tidak Tersedia.</p>
            <p className="mb-4 text-lg font-light text-gray-400">Maaf, Kami belum bisa menyediakan hasil penilaian untuk kursus ini karena data yang dibutuh belum tersedia. </p>
            <Link href="/" className="w-fit text-white text-base font-semibold bg-cuslor-4 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-full px-5 py-2.5 text-center me-2 mb-2 bg-color-400 ">Back to Dashboard</Link>
        </div>   
    </div>
</section>
  );
}