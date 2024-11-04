"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prismaClient";
import { redirect } from "next/navigation";

export async function quesionerSubmit(formData: FormData) {
  console.log(formData);
  const answerQuesioner = {
    // staff lembaga kursus start

    kepentingan_etika_sopan_santun: formData.get(
      "kepentingan-etika-sopan-santun"
    ),
    kinerja_etika_sopan_santun: formData.get("kinerja-etika-sopan-santun"),
    komentar_etika_sopan_santun: formData.get("komentar-etika-sopan-santun"),

    kepentingan_pelayanan_administrasi: formData.get(
      "kepentingan-pelayanan-administrasi"
    ),
    kinerja_pelayanan_administrasi: formData.get(
      "kinerja-pelayanan-administrasi"
    ),
    komentar_pelayanan_administrasi: formData.get(
      "komentar-pelayanan-administrasi"
    ),

    kepentingan_pelayanan_jadwal_belajar: formData.get(
      "kepentingan-pelayanan-jadwal-belajar"
    ),
    kinerja_pelayanan_jadwal_belajar: formData.get(
      "kinerja-pelayanan-jadwal-belajar"
    ),
    komentar_pelayanan_jadwal_belajar: formData.get(
      "komentar-pelayanan-jadwal-belajar"
    ),

    // staff lembaga kursus end
  };

  try {
    await prisma.etika_SopanSantun.create({
      data: {
        kepentingan: Number(answerQuesioner.kepentingan_etika_sopan_santun),
        kinerja: Number(answerQuesioner.kinerja_etika_sopan_santun),
        komentar: answerQuesioner.komentar_etika_sopan_santun as string,
      },
    });
    await prisma.pelayanan_administrasi.create({
      data: {
        kepentingan: Number(answerQuesioner.kepentingan_pelayanan_administrasi),
        kinerja: Number(answerQuesioner.kinerja_pelayanan_administrasi),
        komentar: answerQuesioner.komentar_pelayanan_administrasi as string,
      },
    });
    await prisma.pelayanan_jadwal_belajar.create({
      data: {
        kepentingan: Number(
          answerQuesioner.kepentingan_pelayanan_jadwal_belajar
        ),
        kinerja: Number(answerQuesioner.kinerja_pelayanan_jadwal_belajar),
        komentar: answerQuesioner.komentar_pelayanan_jadwal_belajar as string,
      },
    });
  } catch (error) {

  }finally{
    revalidatePath("/")
    redirect("/")
  }
}
