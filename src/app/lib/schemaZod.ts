import { z } from "zod";

export const quesionerValidation = z.object({
   // staff lembaga kursus start

   kepentingan_etika_sopan_santun: z.number({required_error: "Kepentingan is require", invalid_type_error: "Kepentingan must a number"}).lte(5).gte(1),
   kinerja_etika_sopan_santun: z.number({required_error: "Kinerja is require", invalid_type_error: "Kinerja must a number"}).lte(5).gte(1),
   komentar_etika_sopan_santun: z.string({invalid_type_error: "Kinerja must a string"}).optional(),

   kepentingan_pelayanan_administrasi: z.number({required_error: "Kepentingan is require", invalid_type_error: "Kepentingan must a number"}).lte(5).gte(1),
   kinerja_pelayanan_administrasi: z.number({required_error: "Kinerja is require", invalid_type_error: "Kinerja must a number"}).lte(5).gte(1),
   komentar_pelayanan_administrasi: z.string({invalid_type_error: "Kinerja must a string"}).optional(),

   kepentingan_pelayanan_jadwal_belajar: z.number({required_error: "Kepentingan is require", invalid_type_error: "Kepentingan must a number"}).lte(5).gte(1),
   kinerja_pelayanan_jadwal_belajar: z.number({required_error: "Kinerja is require", invalid_type_error: "Kinerja must a number"}).lte(5).gte(1),
   komentar_pelayanan_jadwal_belajar: z.string({invalid_type_error: "Kinerja must a string"}).optional(),

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
