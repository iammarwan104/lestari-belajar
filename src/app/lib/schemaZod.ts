import { z } from "zod";

export const quesionerValidation = z.object({
   // mobil kursus start

   kepentingan_kebersihan_mobil: z.number({required_error: "Kepentingan kebersihan mobil kursus is require", invalid_type_error: "Penilaian kepentingan must a number"}).lte(5).gte(1),
   kinerja_kebersihan_mobil: z.number({required_error: "Kinerja kebersihan mobil kursus is require", invalid_type_error: "Penilaian Kinerja must a number"}).lte(5).gte(1),
   komentar_kebersihan_mobil: z.string({invalid_type_error: "Kinerja must a string"}).optional(),

  //  kepentingan_kelengkapan_performa_alat_mobil: z.number({required_error: "Kepentingan kelengkapan dan performa alat mobil kursus is require", invalid_type_error: "Penilaian kepentingan must a number"}).lte(5).gte(1),
  //  kinerja_kelengkapan_performa_alat_mobil: z.number({required_error: "Kinerja kelengkapan dan performa alat mobil kursus is require", invalid_type_error: "Penilaian Kinerja must a number"}).lte(5).gte(1),
  //  komentar_kelengkapan_performa_alat_mobil: z.string({invalid_type_error: "komentar kelengkapan dan performa alat musti string"}).optional(),
   
   kepentingan_performa_mobil: z.number({required_error: "Kepentingan performa mobil kursus is require", invalid_type_error: "Penilaian kepentingan must a number"}).lte(5).gte(1),
   kinerja_performa_mobil: z.number({required_error: "Kinerja performa mobil kursus is require", invalid_type_error: "Penilaian Kinerja must a number"}).lte(5).gte(1),
   komentar_performa_mobil: z.string({invalid_type_error: "Kinerja must a string"}).optional(),

   // mobil kursus end

   // mentor kursus mengemudi start

   kepentingan_etika_sopan_santun_mentor: z.number({required_error: "Kepentingan etika sopan santun mentor mengemudi kursus is require", invalid_type_error: "Penilaian kepentingan must a number"}).lte(5).gte(1),
   kinerja_etika_sopan_santun_mentor: z.number({required_error: "Kinerja etika sopan santun mentor mengemudi kursus is require", invalid_type_error: "Penilaian Kinerja must a number"}).lte(5).gte(1),
   komentar_etika_sopan_santun_mentor: z.string({invalid_type_error: "Kinerja must a string"}).optional(),
   
   kepentingan_skill_komunikasi_mentor: z.number({required_error: "Kepentingan skill komunikasi mentor is require", invalid_type_error: "Penilaian kepentingan must a number"}).lte(5).gte(1),
   kinerja_skill_komunikasi_mentor: z.number({required_error: "Kinerja skill komunikasi mentor is require", invalid_type_error: "Penilaian Kinerja must a number"}).lte(5).gte(1),
   komentar_skill_komunikasi_mentor: z.string({invalid_type_error: "komentar skill komunikasi mentor must a string"}).optional(),

   kepentingan_pembawaan_materi_belajar_mentor: z.number({required_error: "Kepentingan performa pembawaan materi belajar is require", invalid_type_error: "Penilaian kepentingan must a number"}).lte(5).gte(1),
   kinerja_pembawaan_materi_belajar_mentor: z.number({required_error: "Kinerja performa pembawaan materi belajar is require", invalid_type_error: "Penilaian Kinerja must a number"}).lte(5).gte(1),
   komentar_pembawaan_materi_belajar_mentor: z.string({invalid_type_error: "Kinerja must a string"}).optional(),

   kepentingan_pengawasan_penuh_mentor: z.number({required_error: "Kepentingan pengawasan penuh mentor is require", invalid_type_error: "Penilaian kepentingan must a number"}).lte(5).gte(1),
   kinerja_pengawasan_penuh_mentor: z.number({required_error: "Kinerja pengawasan penuh mentor is require", invalid_type_error: "Penilaian Kinerja must a number"}).lte(5).gte(1),
   komentar_pengawasan_penuh_mentor: z.string({invalid_type_error: "komentar pengawasan penuh must a string"}).optional(),

   // mentor kursus mengemudi end

   // staff lembaga kursus start

   kepentingan_etika_sopan_santun: z.number({required_error: "Kepentingan is require", invalid_type_error: "Kepentingan must a number"}).lte(5).gte(1),
   kinerja_etika_sopan_santun: z.number({required_error: "Kinerja is require", invalid_type_error: "Kinerja must a number"}).lte(5).gte(1),
   komentar_etika_sopan_santun: z.string({invalid_type_error: "Kinerja must a string"}).optional(),

  //  kepentingan_skill_komunikasi_staff: z.number({required_error: "Kepentingan skill komunikasi staff is require", invalid_type_error: "Penilaian kepentingan must a number"}).lte(5).gte(1),
  //  kinerja_skill_komunikasi_staff: z.number({required_error: "Kinerja skill komunikasi staff is require", invalid_type_error: "Penilaian Kinerja must a number"}).lte(5).gte(1),
  //  komentar_skill_komunikasi_staff: z.string({invalid_type_error: "komentar skill komunikasi staff must a string"}).optional(),


   kepentingan_pelayanan_informasi_jadwal_belajar: z.number({required_error: "Kepentingan pelayanan informasi jadwal belajar is require", invalid_type_error: "Kepentingan must a number"}).lte(5).gte(1),
   kinerja_pelayanan_informasi_jadwal_belajar: z.number({required_error: "Kinerja pelayanan informasi jadwal belajar is require", invalid_type_error: "Kinerja must a number"}).lte(5).gte(1),
   komentar_pelayanan_informasi_jadwal_belajar: z.string({invalid_type_error: "komentar pelayanan informasi jadwal belajar must a string"}).optional(),

   // staff lembaga kursus end
   id_siswa: z.number()
})

export const tambahDataSiswaSchema = z.object({
   nama : z.string().min(3, {message: "nama harus lebih dari 3 huruf!"}),
   gender: z.string(),
   phoneNumber: z.string()
}).required()

export const updateDataSiswaSchema = z.object({
 id: z.number(),
 nama : z.string().min(3, {message: "nama harus lebih dari 3 huruf!"}),
 gender: z.string(),
 phoneNumber: z.string()
}).required()

export const mySchema = z.object({
   username: z.string({
   required_error: "Username is required",
   invalid_type_error: "Username must be a string",
 }).min(3, {message: "Username harus lebih dari 3 huruf!"}),
   password: z.string({
   required_error: "Password is required",
   invalid_type_error: "Password must be a string",
 }).min(3, {message: "Password harus lebih dari 3 huruf!"})
 })

 export const checkPhoneNumberZod = z.object({
   phoneNumber: z.number({invalid_type_error: "Kami mengharapkan angka, tapi anda memasukkan huruf",required_error: "ok"}).gte(12, {message: "Inputan tidak boleh kosong atau kurang dari 12 angka, "})
 }).required()

 export const checkAdminZod = z.object({
  username: z.string(),
  password: z.string()
}).required()
