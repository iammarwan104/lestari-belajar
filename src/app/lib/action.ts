"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prismaClient";
import { redirect } from "next/navigation";
import { quesionerValidation } from "./schemaZod";

export async function quesionerSubmit(prevState: any, formData: FormData) {
  console.log(formData);
  const answerQuesioner = quesionerValidation.safeParse({
           // staff lembaga kursus start

           kepentingan_etika_sopan_santun: Number(formData.get('kepentingan-etika-sopan-santun')),
           kinerja_etika_sopan_santun : Number(formData.get('kinerja-etika-sopan-santun')),
           komentar_etika_sopan_santun : formData.get('komentar-etika-sopan-santun'),
 
           kepentingan_pelayanan_administrasi: Number(formData.get('kepentingan-pelayanan-administrasi')),
           kinerja_pelayanan_administrasi : Number(formData.get('kinerja-pelayanan-administrasi')),
           komentar_pelayanan_administrasi : formData.get('komentar-pelayanan-administrasi'),
 
           kepentingan_pelayanan_jadwal_belajar: Number(formData.get('kepentingan-pelayanan-jadwal-belajar')),
           kinerja_pelayanan_jadwal_belajar : Number(formData.get('kinerja-pelayanan-jadwal-belajar')),
           komentar_pelayanan_jadwal_belajar : formData.get('komentar-pelayanan-jadwal-belajar'),
           
           // staff lembaga kursus end
  });

  if (!answerQuesioner.success) {
    return{
        success: false,
        errors: answerQuesioner.error.flatten().fieldErrors,
        message: 'Missing fields or someting wrong with your input, failed to send your answers',
        redirect: false
    }
}

const scriptRegex = /(<script.*?>[\s\S]*?<\/script>|\b(eval|setTimeout|setInterval)\(.*?\)|data:image\/svg\+xml;.*?base64.*?>)/gi;
const isInvalid = scriptRegex.test(answerQuesioner.data?.komentar_etika_sopan_santun as string) || scriptRegex.test(answerQuesioner.data?.komentar_pelayanan_administrasi as string) || scriptRegex.test(answerQuesioner.data?.komentar_pelayanan_jadwal_belajar as string);


if(isInvalid){
    return{
        success: false,
        message : "Invalid characters detected. Please enter only allowed characters.",
        redirect: false
    }
}

  try {

    const komentarEtikaSopanSantun= answerQuesioner?.data.komentar_etika_sopan_santun;
    const komentarPelayananJadwalBelajar= answerQuesioner?.data.komentar_pelayanan_jadwal_belajar;
    const komentarPelayananAdministrasi= answerQuesioner?.data.komentar_pelayanan_administrasi;


    await prisma.etika_SopanSantun.create({
      data : {
        kepentingan: answerQuesioner.data.kepentingan_etika_sopan_santun,
        kinerja: answerQuesioner.data.kinerja_etika_sopan_santun,
        komentar: komentarEtikaSopanSantun || null,
      }
    });
    await prisma.pelayanan_administrasi.create({
      data : {
        kepentingan: answerQuesioner.data.kepentingan_pelayanan_administrasi,
        kinerja: answerQuesioner.data.kinerja_pelayanan_administrasi,
        komentar: komentarPelayananAdministrasi || null,
      }
    });
    await prisma.pelayanan_jadwal_belajar.create({
      data : {
        kepentingan: answerQuesioner.data.kepentingan_pelayanan_jadwal_belajar,
        kinerja: answerQuesioner.data.kinerja_pelayanan_jadwal_belajar,
        komentar: komentarPelayananJadwalBelajar || null,
      }
    });
    revalidatePath("/")
    return{
      message:"Input success",
      success: true,
      redirect:true
    }
    redirect("/")
  } catch (error) {
      return{
        message:"Input gagal",
        success: false,
      redirect:false
      }
    
  }
}
