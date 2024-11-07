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
})

export const tambahDataSiswaSchema = z.object({
   nama : z.string().min(3, {message: "nama harus lebih dari 3 huruf!"}),
   gender: z.string(),
   phoneNumber: z.number().gte(12)
}).required()

export const updateDataSiswaSchema = z.object({
 id: z.number(),
 nama : z.string().min(3, {message: "nama harus lebih dari 3 huruf!"}),
 gender: z.string(),
 phoneNumber: z.number().gte(12)
}).required()
