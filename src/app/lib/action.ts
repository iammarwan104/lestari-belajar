"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prismaClient";
const bcrypt = require('bcrypt');
import { Gender } from '@prisma/client'
import { CheckNumberPhone, Item, Login, tambahDataSiswaInterface, TambahScheduleInterface, TaskFormat } from "./interface";
import { checkPhoneNumberZod, quesionerValidation, tambahDataSiswaSchema, updateDataSiswaSchema } from "./schemaZod";
import { redirect } from "next/navigation";

export async function quesionerSubmit(prevState: any, formData: FormData) {

  const answerQuesioner = quesionerValidation.safeParse({

           // mobil kursus start

           kepentingan_kebersihan_mobil: Number(formData.get('kepentingan-kebersihan-mobil')),
           kinerja_kebersihan_mobil : Number(formData.get('kinerja-kebersihan-mobil')),
           komentar_kepentingan_kebersihan_mobil : formData.get('komentar-kepentingan-kebersihan-mobil'),
           komentar_kinerja_kepentingan_kebersihan_mobil : formData.get('komentar-kinerja-kebersihan-mobil'),

           kepentingan_kelengkapan_performa_alat_mobil: Number(formData.get('kepentingan-kelengkapan-performa-alat-mobil')),
           kinerja_kelengkapan_performa_alat_mobil : Number(formData.get('kinerja-kelengkapan-performa-alat-mobil')),
           komentar_kepentingan_kelengkapan_performa_alat_mobil : formData.get('komentar-kepentingan-kelengkapan-performa-alat-mobil'),
           komentar_kinerja_kepentingan_kelengkapan_performa_alat_mobil : formData.get('komentar-kinerja-kelengkapan-performa-alat-mobil'),
 
           kepentingan_performa_mobil: Number(formData.get('kepentingan-performa-mobil')),
           kinerja_performa_mobil : Number(formData.get('kinerja-performa-mobil')),
           komentar_kepentingan_performa_mobil : formData.get('komentar-kepentingan-performa-mobil'),
           komentar_kinerja_kepentingan_performa_mobil : formData.get('komentar-kinerja-performa-mobil'),

           // mobil kursus end

           // staff lembaga kursus start

           kepentingan_etika_sopan_santun: Number(formData.get('kepentingan-etika-sopan-santun-staff')),
           kinerja_etika_sopan_santun : Number(formData.get('kinerja-etika-sopan-santun-staff')),
           komentar_kepentingan_etika_sopan_santun : formData.get('komentar-kepentingan-etika-sopan-santun-staff'),
           komentar_kinerja_kepentingan_etika_sopan_santun : formData.get('komentar-kinerja-etika-sopan-santun-staff'),
 
           kepentingan_pelayanan_informasi_jadwal_belajar: Number(formData.get('kepentingan-pelayanan-informasi-jadwal-belajar')),
           kinerja_pelayanan_informasi_jadwal_belajar : Number(formData.get('kinerja-pelayanan-informasi-jadwal-belajar')),
           komentar_kepentingan_pelayanan_informasi_jadwal_belajar : formData.get('komentar-kepentingan-pelayanan-informasi-jadwal-belajar'),
           komentar_kinerja_kepentingan_pelayanan_informasi_jadwal_belajar : formData.get('komentar-kinerja-pelayanan-informasi-jadwal-belajar'),
 
           kepentingan_skill_komunikasi_staff: Number(formData.get('kepentingan-skill-komunikasi-staff-kantor')),
           kinerja_skill_komunikasi_staff : Number(formData.get('kinerja-skill-komunikasi-staff-kantor')),
           komentar_kepentingan_skill_komunikasi_staff : formData.get('komentar-kepentingan-skill-komunikasi-staff-kantor'),
           komentar_kinerja_kepentingan_skill_komunikasi_staff : formData.get('komentar-kinerja-skill-komunikasi-staff-kantor'),
           
           // staff lembaga kursus end

           // mentor kursus start

           kepentingan_etika_sopan_santun_mentor: Number(formData.get('kepentingan-etika-sopan-santun-mentor-mengemudi')),
           kinerja_etika_sopan_santun_mentor : Number(formData.get('kinerja-etika-sopan-santun-mentor-mengemudi')),
           komentar_kepentingan_etika_sopan_santun_mentor : formData.get('komentar-kepentingan-etika-sopan-santun-mentor-mengemudi'),
           komentar_kinerja_kepentingan_etika_sopan_santun_mentor : formData.get('komentar-kinerja-etika-sopan-santun-mentor-mengemudi'),

           kepentingan_skill_komunikasi_mentor: Number(formData.get('kepentingan-skill-komunikasi-mentor-mengemudi')),
           kinerja_skill_komunikasi_mentor : Number(formData.get('kinerja-skill-komunikasi-mentor-mengemudi')),
           komentar_kepentingan_skill_komunikasi_mentor : formData.get('komentar-kepentingan-skill-komunikasi-mentor-mengemudi'),
           komentar_kinerja_kepentingan_skill_komunikasi_mentor : formData.get('komentar-kinerja-skill-komunikasi-mentor-mengemudi'),

           kepentingan_pengawasan_penuh_mentor: Number(formData.get('kepentingan-pengawasan-penuh-mentor-mengemudi')),
           kinerja_pengawasan_penuh_mentor : Number(formData.get('kinerja-pengawasan-penuh-mentor-mengemudi')),
           komentar_kepentingan_pengawasan_penuh_mentor : formData.get('komentar-kepentingan-pengawasan-penuh-mentor-mengemudi'),
           komentar_kinerja_kepentingan_pengawasan_penuh_mentor : formData.get('komentar-kinerja-pengawasan-penuh-mentor-mengemudi'),
           
           kepentingan_pembawaan_materi_belajar_mentor: Number(formData.get('kepentingan-pembawaan-materi-belajar-mentor-mengemudi')),
           kinerja_pembawaan_materi_belajar_mentor : Number(formData.get('kinerja-pembawaan-materi-belajar-mentor-mengemudi')),
           komentar_kepentingan_pembawaan_materi_belajar_mentor : formData.get('komentar-kepentingan-pembawaan-materi-belajar-mentor-mengemudi'),
           komentar_kinerja_kepentingan_pembawaan_materi_belajar_mentor : formData.get('komentar-kinerja-pembawaan-materi-belajar-mentor-mengemudi'),
           
           // staff lembaga kursus end

          id_siswa : Number(formData.get("id-siswa"))

  });

  if (!answerQuesioner.success) {
    return{
        success: false,
        errors: answerQuesioner.error.flatten().fieldErrors,
        message: 'Terdapat inputan yang belum diisi, pengiriman jawaban anda gagal',
        redirect: false
    }
}
// const scriptRegex = /(<script.*?>[\s\S]*?<\/script>|\b(eval|setTimeout|setInterval)\(.*?\)|data:image\/svg\+xml;.*?base64.*?>)/gi;
// const isInvalid = scriptRegex.test(answerQuesioner.data?.komentar_etika_sopan_santun as string) || scriptRegex.test(answerQuesioner.data?.komentar_pelayanan_informasi_jadwal_belajar as string) || scriptRegex.test(answerQuesioner.data?.komentar_skill_komunikasi_staff as string) || scriptRegex.test(answerQuesioner.data?.komentar_kebersihan_mobil as string) || scriptRegex.test(answerQuesioner.data?.komentar_performa_mobil as string)|| scriptRegex.test(answerQuesioner.data?.komentar_etika_sopan_santun_mentor as string) || scriptRegex.test(answerQuesioner.data?.komentar_kelengkapan_performa_alat_mobil as string) || scriptRegex.test(answerQuesioner.data?.komentar_pembawaan_materi_belajar_mentor as string) || scriptRegex.test(answerQuesioner.data?.komentar_pengawasan_penuh_mentor as string) || scriptRegex.test(answerQuesioner.data?.komentar_skill_komunikasi_mentor as string);

// if(isInvalid){
//     return{
//         success: false,
//         message : "Karakter tidak valid terdeteksi. Harap jangan berlebihan dalam memberikan tanda baca.",
//         redirect: false
//     }
// }
  try {
    const komentarKebersihanMobil = [answerQuesioner?.data.komentar_kepentingan_kebersihan_mobil, answerQuesioner?.data.komentar_kinerja_kebersihan_mobil];
    const komentarKelengkapanPerformaAlatMobil = [answerQuesioner?.data.komentar_kepentingan_kelengkapan_performa_alat_mobil, answerQuesioner?.data.komentar_kinerja_kelengkapan_performa_alat_mobil];
    const komentarPerformaMobil = [answerQuesioner?.data.komentar_kepentingan_performa_mobil, answerQuesioner?.data.komentar_kinerja_performa_mobil];
    const komentarEtikaSopanSantun = [answerQuesioner?.data.komentar_kepentingan_etika_sopan_santun, answerQuesioner?.data.komentar_kinerja_etika_sopan_santun];
    const komentarSkillKomunikasiStaff = [answerQuesioner?.data.komentar_kepentingan_skill_komunikasi_staff, answerQuesioner?.data.komentar_kinerja_skill_komunikasi_staff];
    const komentarPelayananInformasiJadwalBelajar = [answerQuesioner?.data.komentar_kepentingan_pelayanan_informasi_jadwal_belajar, answerQuesioner?.data.komentar_kinerja_pelayanan_informasi_jadwal_belajar];
    const komentarEtikaSopanSantunMentor = [answerQuesioner?.data.komentar_kepentingan_etika_sopan_santun_mentor, answerQuesioner?.data.komentar_kinerja_etika_sopan_santun_mentor];
    const komentarSkillKomunikasiMentor = [answerQuesioner?.data.komentar_kepentingan_skill_komunikasi_mentor, answerQuesioner?.data.komentar_kinerja_skill_komunikasi_mentor];
    const komentarPembawaanMateriBelajarMentor = [answerQuesioner?.data.komentar_kepentingan_pembawaan_materi_belajar_mentor, answerQuesioner?.data.komentar_kinerja_pembawaan_materi_belajar_mentor];
    const komentarPengawasanPenuhMentor = [answerQuesioner?.data.komentar_kepentingan_pengawasan_penuh_mentor, answerQuesioner?.data.komentar_kinerja_pengawasan_penuh_mentor];

    await prisma.kebersihan_mobil.create({
      data : {
        kepentingan: answerQuesioner.data.kepentingan_kebersihan_mobil,
        kinerja: answerQuesioner.data.kinerja_kebersihan_mobil,
        komentar_kepentingan: komentarKebersihanMobil[0] || null,
        komentar_kinerja: komentarKebersihanMobil[1] || null,
      }
    });

        await prisma.kelengkapan_alat_mobil.create({
      data : {
        kepentingan: answerQuesioner.data.kepentingan_kelengkapan_performa_alat_mobil,
        kinerja: answerQuesioner.data.kinerja_kelengkapan_performa_alat_mobil,
        komentar_kepentingan: komentarKelengkapanPerformaAlatMobil[0] || null,
        komentar_kinerja: komentarKelengkapanPerformaAlatMobil[1] || null,
      }
    });

    await prisma.performa_mobil.create({
      data : {
        kepentingan: answerQuesioner.data.kepentingan_performa_mobil,
        kinerja: answerQuesioner.data.kinerja_performa_mobil,
        komentar_kepentingan: komentarPerformaMobil[0] || null,
        komentar_kinerja: komentarPerformaMobil[1] || null,
      }
    });

    await prisma.etika_SopanSantun.create({
      data : {
        kepentingan: answerQuesioner.data.kepentingan_etika_sopan_santun,
        kinerja: answerQuesioner.data.kinerja_etika_sopan_santun,
        komentar_kepentingan: komentarEtikaSopanSantun[0] || null,
        komentar_kinerja: komentarEtikaSopanSantun[1] || null,
      }
    });

    await prisma.pelayanan_administrasi.create({
      data : {
        kepentingan: answerQuesioner.data.kepentingan_pelayanan_informasi_jadwal_belajar,
        kinerja: answerQuesioner.data.kinerja_pelayanan_informasi_jadwal_belajar,
        komentar_kepentingan: komentarPelayananInformasiJadwalBelajar[0] || null,
        komentar_kinerja: komentarPelayananInformasiJadwalBelajar[1] || null,
      }
    });

    await prisma.skill_komunikasi_baik_staff.create({
      data : {
        kepentingan: answerQuesioner.data.kepentingan_skill_komunikasi_staff,
        kinerja: answerQuesioner.data.kinerja_skill_komunikasi_staff,
        komentar_kepentingan: komentarSkillKomunikasiStaff[0] || null,
        komentar_kinerja: komentarSkillKomunikasiStaff[1] || null,
      }
    });

    await prisma.etika_sopan_santun_mentor.create({
      data : {
        kepentingan: answerQuesioner.data.kepentingan_etika_sopan_santun_mentor,
        kinerja: answerQuesioner.data.kinerja_etika_sopan_santun_mentor,
        komentar_kepentingan: komentarEtikaSopanSantunMentor[0] || null,
        komentar_kinerja: komentarEtikaSopanSantunMentor[1] || null,
      }
    });

    await prisma.skill_komunikasi_baik.create({
      data : {
        kepentingan: answerQuesioner.data.kepentingan_skill_komunikasi_mentor,
        kinerja: answerQuesioner.data.kinerja_skill_komunikasi_mentor,
        komentar_kepentingan: komentarSkillKomunikasiMentor[0] || null,
        komentar_kinerja: komentarSkillKomunikasiMentor[1] || null,
      }
    });

    await prisma.pengawasan_penuh.create({
      data : {
        kepentingan: answerQuesioner.data.kepentingan_pengawasan_penuh_mentor,
        kinerja: answerQuesioner.data.kinerja_pengawasan_penuh_mentor,
        komentar_kepentingan: komentarPengawasanPenuhMentor[0] || null,
        komentar_kinerja: komentarPengawasanPenuhMentor[1] || null,
      }
    });

    await prisma.pembawaan_materi_belajar_mentor.create({
      data : {
        kepentingan: answerQuesioner.data.kepentingan_pembawaan_materi_belajar_mentor,
        kinerja: answerQuesioner.data.kinerja_pembawaan_materi_belajar_mentor,
        komentar_kepentingan: komentarPembawaanMateriBelajarMentor[0] || null,
        komentar_kinerja: komentarPembawaanMateriBelajarMentor[1] || null,
      }
    });

    await prisma.siswaKursusMengemudi.update({
      where: {
        id: answerQuesioner.data.id_siswa,
      },
      data:{
        status: true
      }
    })

    return{
      message:"Jawaban anda berhasil disimpan",
      success: true,
      redirect:true
    }
  } catch (error) {
      return{
        message:"Inputan anda gagal tersimpan",
        success: false,
      redirect:false
      }
    
  }finally{
    revalidatePath("/")
  }
}

export async function getAllQuesionerAnswer(){
  function getAverangeValue(arr: Item[], name: string): {kepentingan: number, kinerja: number, nama: string, komentar_kepentingan: (string|null)[], komentar_kinerja: (string|null)[]}{
      const totalKepentingan = arr.reduce((sum: number, item) => sum + item.kepentingan, 0)
      const rataRataKepentingan = (totalKepentingan / arr.length).toFixed(2);
      const totalKinerja = arr.reduce((sum: number, item) => sum + item.kinerja, 0)
      const rataRataKinerja = (totalKinerja / arr.length).toFixed(2);
      
      let fiveKomentar_kepentingan: (string|null)[] = [];
      arr.map((data, index) => {
        index >= (arr.length - 171) ? fiveKomentar_kepentingan.push(data.komentar_kepentingan) : null
      })
      let fiveKomentar_kinerja: (string|null)[] = [];
      arr.map((data, index) => {
        index >= (arr.length - 171) ? fiveKomentar_kinerja.push(data.komentar_kinerja) : null
      })
      return {
          nama : name,
          kepentingan : Number(rataRataKepentingan),
          kinerja: Number(rataRataKinerja),
          komentar_kepentingan: fiveKomentar_kepentingan,
          komentar_kinerja: fiveKomentar_kinerja
      }
  }
  const kebersihan_mobil = await prisma.kebersihan_mobil.findMany();
  const kelengkapan_performa_alat_mobil = await prisma.kelengkapan_alat_mobil.findMany();
  const performa_mobil = await prisma.performa_mobil.findMany();
  const etika_sopan_santun_staff = await prisma.etika_SopanSantun.findMany();    
  const etika_sopan_santun_mentor_mengemudi = await prisma.etika_sopan_santun_mentor.findMany();    
  const skill_komunikasi_baik_staff = await prisma.skill_komunikasi_baik_staff.findMany();    
  const skill_komunikasi_baik_mentor = await prisma.skill_komunikasi_baik.findMany();    
  const pengawasan_penuh_mentor = await prisma.pengawasan_penuh.findMany();    
  const pembawaan_materi_belajar_mentor_mengemudi = await prisma.pembawaan_materi_belajar_mentor.findMany();    
  const pelayanan_informasi_jadwal_belajar = await prisma.pelayanan_administrasi.findMany();    

  const kordinatKebersihanMobil = getAverangeValue(kebersihan_mobil, "Kebersihan Mobil")
  const kordinatKelengkapanPerformaAlatMobil = getAverangeValue(kelengkapan_performa_alat_mobil, "Kelengkapan Performa Alat Mobil")
  const kordinatPerformaMobil = getAverangeValue(performa_mobil, "Performa Mobil")
  const kordinatEtikaSopanSantunStaff = getAverangeValue(etika_sopan_santun_staff, "Etika dan Sopan Santun")
  const kordinatPelayananInformasiJadwalBelajar = getAverangeValue(pelayanan_informasi_jadwal_belajar, "Pelayanan Informasi Jadwal Belajar")
  const kordinatSkillKomunikasiBaikStaff = getAverangeValue(skill_komunikasi_baik_staff, "Skill Komunikasi Staff")
  const kordinatEtikaSopanSantunMentorMengemudi = getAverangeValue(etika_sopan_santun_mentor_mengemudi, "Etika dan Sopan Santun Mentor Mengemudi")
  const kordinatSkillKomunikasiBaikMentor = getAverangeValue(skill_komunikasi_baik_mentor, "Skill Komunikasi Mentor")
  const kordinatPengawasanPenuhMentor = getAverangeValue(pengawasan_penuh_mentor, "Pengawasan Penuh Mentor")
  const kordinatPembawaanMateriBelajarMentorMengemudi = getAverangeValue(pembawaan_materi_belajar_mentor_mengemudi, "Kemudahan memahami materi")

  const sumbuY = [
    kordinatKebersihanMobil.kepentingan, 
    kordinatKelengkapanPerformaAlatMobil.kepentingan, 
    kordinatPerformaMobil.kepentingan, 
    kordinatEtikaSopanSantunStaff.kepentingan,
    kordinatSkillKomunikasiBaikStaff.kepentingan,
    kordinatPelayananInformasiJadwalBelajar.kepentingan,
    kordinatEtikaSopanSantunMentorMengemudi.kepentingan,
    kordinatSkillKomunikasiBaikMentor.kepentingan,
    kordinatPengawasanPenuhMentor.kepentingan,
    kordinatPembawaanMateriBelajarMentorMengemudi.kepentingan]

  const sumbux = [
    kordinatKebersihanMobil.kinerja, 
    kordinatKelengkapanPerformaAlatMobil.kinerja, 
    kordinatPerformaMobil.kinerja, 
    kordinatEtikaSopanSantunStaff.kinerja,
    kordinatSkillKomunikasiBaikStaff.kinerja,
    kordinatPelayananInformasiJadwalBelajar.kinerja,
    kordinatEtikaSopanSantunMentorMengemudi.kinerja,
    kordinatSkillKomunikasiBaikMentor.kinerja,
    kordinatPengawasanPenuhMentor.kinerja,
    kordinatPembawaanMateriBelajarMentorMengemudi.kinerja]

  function getSumbuYX(sumbuY: number[], sumbuX: number[]): {sumbuY : number, sumbuX: number}{
      const totalSumbuY = sumbuY.reduce((sum: number, item) => sum + item, 0)
      const rataRataSumbuY = (totalSumbuY / sumbuY.length).toFixed(2);
      const totalSumbuX = sumbuX.reduce((sum: number, item) => sum + item, 0)
      const rataRataSumbuX = (totalSumbuX / sumbuX.length).toFixed(2);
      return {
          sumbuY : Number(rataRataSumbuY),
          sumbuX: Number(rataRataSumbuX)
      }
  }

  const garisPerbatasan = getSumbuYX(sumbuY, sumbux);

  return{
    kebersihanMobil: kordinatKebersihanMobil, 
    kelengkapanPerformaAlatMobil: kordinatKelengkapanPerformaAlatMobil, 
    performaMobil: kordinatPerformaMobil, 
    EtikaSopanSantunStaff: kordinatEtikaSopanSantunStaff,
    skillKomunikasiBaikStaff: kordinatSkillKomunikasiBaikStaff,
    pelayananInformasiJadwalBelajar: kordinatPelayananInformasiJadwalBelajar,
    EtikaSopanSantunMentorMengemudi: kordinatEtikaSopanSantunMentorMengemudi,
    skillKomunikasiBaikMentor: kordinatSkillKomunikasiBaikMentor,
    pengawasanPenuh: kordinatPengawasanPenuhMentor,
    pembawaanMateriBelajarMentorMengemudi: kordinatPembawaanMateriBelajarMentorMengemudi,
    garisPerbatasan: garisPerbatasan
  }
}

export async function tambahDataSiswa(prevState: tambahDataSiswaInterface, formData: FormData): Promise<tambahDataSiswaInterface>{
  const siswa = {
    nama : formData.get("nama-siswa"),
    gender : formData.get("gender"),
    number : formData.get("phoneNumber"),
  }
  try{
  const dataSiswa = tambahDataSiswaSchema.safeParse({
    nama: siswa.nama as string,
    gender: siswa.gender as string,
    phoneNumber: siswa.number as string
  })

  if(dataSiswa.success === false){
    return {
      success: false,
      errors: dataSiswa.error.flatten().fieldErrors
    }
  } 

  await prisma.siswaKursusMengemudi.create({
    data: {
      name: dataSiswa.data.nama,
      gender: dataSiswa.data.gender as Gender,
      phoneNumber: String(dataSiswa.data.phoneNumber),
      status: false,
    }
  })
  return {
    success: true,
    data : {
    nama: siswa.nama as string,
    gender: siswa.gender as string,
    phoneNumber: Number(siswa.number)
    }
  }
}catch(error){
    if(error instanceof Error){
      return {
        success: false,
        error: error.message
      }
    }else{
      return {
        success: false,
        error: "Terjadi Kesalahan"
      }
    }
  }finally{
    revalidatePath('/admin')
  }
}

export async function updateDataSiswa( prevState: tambahDataSiswaInterface, formData: FormData): Promise<tambahDataSiswaInterface> {
  const siswa = {
    id : formData.get("id"),
    nama : formData.get("nama-siswa"),
    gender : formData.get("gender"),
    number : formData.get("phoneNumber"),
  }
  try{
  const dataSiswa = updateDataSiswaSchema.safeParse({
    id: Number(siswa.id),
    nama: siswa.nama as string,
    gender: siswa.gender as string,
    phoneNumber: siswa.number,
    
  })

  if(dataSiswa.success === false){
    return {
      success: false,
      errors: dataSiswa.error.flatten().fieldErrors
    }
  }

  await prisma.siswaKursusMengemudi.update({
    where:{
      id: dataSiswa.data.id
    },
    data: {
      name: dataSiswa.data.nama,
      gender: dataSiswa.data.gender as Gender,
      phoneNumber: String(dataSiswa.data.phoneNumber),
      status: false,
    }
  })

  return {
success: true,
data : {
 nama: siswa.nama as string,
 gender: siswa.gender as string,
 phoneNumber: Number(siswa.number)
}
}
  }catch(error){
    if(error instanceof Error){
      return {
        success: false,
        error: error.message
      }
    }else{
      return {
        success: false,
        error: "Terjadi Kesalahan"
    }
  }
}finally{
  revalidatePath('/admin')
}
}

export async function deleteSiswa(id: number){
  try {
    const data = await prisma.siswaKursusMengemudi.delete({
      where: {
        id: id
      }
    })
    return {
      success: true
    }
  } catch (error) {
    if(error instanceof Error){
      console.error(error)
      return {
        success: false
      }
    }else{
      return{
        success: false
      }
    }
  }finally{
    revalidatePath('/admin')
  }
}

export async function getDataSiswa(page: number){
  try {
    const totalData = await prisma.siswaKursusMengemudi.count()
    const take = 10
    const totalPage = Math.ceil(totalData/take)
    if(page < 1){
      throw new Error("Halaman tidak diketahui") 
    }
      if(page > totalPage){
      throw new Error("Halaman tidak diketahui") 
    }
    const skip = (page - 1)*take;
    const datas = await prisma.siswaKursusMengemudi.findMany({
      take: take,
      skip: skip
    })
    return {success: true, data: datas, totalSiswa: totalData,totalPages : totalPage}
  } catch (error) {
    if(error instanceof Error){
      return {success: false, message : error.message}
    }
  }
  }

  export async function getDataStudentsFilter(query: string, page: number){

    // logic data skip result 0, 5, 10, 15, ...
    let skipData;
    if(page >= 1){
        skipData = (page - 1) * 10;
    }

    // logic if input search is empty
    if(!query){
        const dataCount = await prisma.siswaKursusMengemudi.count()
        const getStudents = await prisma.siswaKursusMengemudi.findMany({
        skip: skipData,
        take: 10
        })
    
        if(!getStudents){
            return {
                success: false
            }
        }

        return{
            success: true,
            data: getStudents,
            totalSiswa: dataCount,
            totalPages : Math.ceil(dataCount/10)
        }
    }

    //logic if  query params isn't empty
    let dataCount;
    if(query){
    dataCount = await prisma.siswaKursusMengemudi.count({
        where : {
            name : {
                contains : query,
                mode: "insensitive"
            }
        }
    })}

    const getStudentsQuery = await prisma.siswaKursusMengemudi.findMany({
        where: {
            name: {
                contains: query,
                mode: "insensitive"
            }
        },
        skip: skipData,
        take: 10
    })

    if(!getStudentsQuery){
        return {
            success: false
        }
    }

    if(dataCount){
        return{
            success: true,
            data: getStudentsQuery,
            totalSiswa: dataCount,
            totalPages : Math.ceil(dataCount/10)
        }
    }else{
        return{
            success: true,
            data: getStudentsQuery,
            totalSiswa: dataCount,
            totalPages: 0
        }
    }
}

export async function getUserFromDb(username: string, password: string): Promise<Login>{
  try {
    const [result] = await prisma.admin.findMany({
    where: {
      username: username,
      password: password
    },
  })

  if(!result){
    throw Error('Username dan password anda salah')
  }
  return {
    success: true,
    data: {
      username: result.username,
    password: result.password
    }
  };
  } catch (error) {
    if(error instanceof Error){
      return {
        success: false,
        error: error.message
      };
    } else {
      return {
        success: false,
        error: 'An unknown error occurred',
      };
    }
  }
 }

export async function checkPhoneNumberSignIn(prevState: CheckNumberPhone, formData: FormData) : Promise<CheckNumberPhone>{
  const phoneNumber = await Number(formData.get("phone-number"));
  const resultCheckPhoneNumberZod = checkPhoneNumberZod.safeParse({
    phoneNumber: phoneNumber
  })
  if(resultCheckPhoneNumberZod.success === false){
    return {
      success: false,
      errorMessage: resultCheckPhoneNumberZod?.error.flatten().fieldErrors.phoneNumber
    }
  }
  const addZero = `${0}${resultCheckPhoneNumberZod.data.phoneNumber}`;
  const resultCheckDataByPrisma = await prisma.siswaKursusMengemudi.findFirst({
    where: {
      phoneNumber: addZero,
      status: false
    }
  })

  if(!resultCheckDataByPrisma){
    return {
      success: false,
      errorMessage: "Sepertinya nomor anda tidak terdaftar atau sudah pernah digunakan untuk mengisi quesioner, silahkan hubungi admin!"
    }
  }

  return {
    success: true,
    id: resultCheckDataByPrisma.id,
    name: resultCheckDataByPrisma.name,
    phoneNumber: String(resultCheckDataByPrisma.phoneNumber)
  }
}

export async function checkPhoneNumberInQuesionerPage(id: number){
  try{  
    const result = await prisma.siswaKursusMengemudi.findFirst({
      where: {
        id: id
      }
    })
    return result
  }catch(error){
      if(error instanceof Error){
        console.log(error)
      }
    }
  }

  export async function loginAdmin(username: string, password: string): Promise<Login>{  
      const hasil = await prisma.admin.findFirst({
        where: {
          username: username,
          password: password
        }
      })
      if(!hasil){
      return {
        success: false,
    }
    }else{
      try {
        return {
          success:true
        }
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            error: error.message
          }
        }
        return {
          error: "An unknown error occurred"
        }
      }
  }}

 export const checkDataInputanAdmin = async (username: string, password: string) => {
  const dataDariDatabase = await prisma.admin.findMany()

    if(dataDariDatabase[0]?.username !== username){
      return {
        valid: false,
        message: "Username anda salah"
      }
    }

  const match = await bcrypt.compare(password, dataDariDatabase[0]?.password);
    if (!match) {
      return {
        valid: false,
        message: "Password anda salah"
      }
    }else{
      await prisma.admin.update({
        where : {
          id: 1
        },
        data:{
          status: true
        }
      })
      return {
        valid: true,
        username: dataDariDatabase[0].username
      }
    }
}

export async function checkStatusAdminServer(username: string){
  const findAdmin = await prisma.admin.findFirst({
    where:{
      username: username,
      status: true
    }
  })

  if(findAdmin){
    return {active: true}
  }else{ 
    return{active: false}
  }
}

export async function signOutdmin(username: string){
  const findAdmin = await prisma.admin.findFirst({
    where:{
      username: username,
      status: true
    }
  })

  if(findAdmin){
    const changeStatus = await prisma.admin.update({
      where:{
        id: 1
      },
      data: {
        status: false
      }
    })
  }else{ 
    return{active: false}
  }
}


// bagian belajar

export async function tambahSchedule(prevState: any, formData: FormData):Promise<TambahScheduleInterface>{
const tangkapSchedule = {
    nama: formData.get("schedule"),
    waktu: formData.get("time"),
    tanggal: formData.get("date"),
}
try {
    await prisma.products.create({
        data:{
        nama: tangkapSchedule.nama as string,
        price: tangkapSchedule.waktu as string,
        image: tangkapSchedule.tanggal as string
    }
})
return{
    success: true,
    errorMessage: null
  }
} catch (error) {
    if(error instanceof Error){
        console.error(error);
        
        return {
            success: false,
            errorMessage: error.message
        }
    }else{
        return{
            success: false,
            errorMessage: "Error tidak diketahui"
        }
    }
}finally{
  revalidatePath("/todoList")
  redirect("/todoList")
}
}

export async function ubahSchedule(prevState: any, formData: FormData):Promise<TambahScheduleInterface>{
  const tangkapSchedule = {
      nama: formData.get("name"),
      waktu: formData.get("time"),
      tanggal: formData.get("date"),
      id: Number(formData.get("id")),
  }
  console.log(tangkapSchedule);
  
  try {
      await prisma.products.update({
        where: {
          id: tangkapSchedule.id
        },
          data:{
          nama: tangkapSchedule.nama as string,
          price: tangkapSchedule.waktu as string,
          image: tangkapSchedule.tanggal as string
      }
  })
  return{
      success: true,
      errorMessage: null
    }
  } catch (error) {
      if(error instanceof Error){
          console.error(error);
          
          return {
              success: false,
              errorMessage: error.message
          }
      }else{
          return{
              success: false,
              errorMessage: "Error tidak diketahui"
          }
      }
  }finally{
    revalidatePath("/todoList")
    redirect("/todoList")
  }
  }

export async function getSchedule():Promise<TaskFormat>{
  try {
    const datas = await prisma.products.findMany()
    return {
      data:datas,
      success: true
    }
  } catch (error) {
    if(error instanceof Error){
      console.error(error);
      
      return {
          success: false,
          errorMessage: error.message
      }
  }else{
      return{
          success: false,
          errorMessage: "Error tidak diketahui"
      }
  }
  }
}

export async function getTaskById(idTask: number){
  try {
    
  const data = await prisma.products.findUnique({
    where:{
      id: idTask
    }
  })
  return {
    data: data,
    success: true
  }
} catch (error) {
  if(error instanceof Error){
    console.error(error);
    
    return {
        success: false,
        errorMessage: error.message
    }
}else{
    return{
        success: false,
        errorMessage: "Error tidak diketahui"
    }
}
}
}

export async function deleteSchedule(id: number){
  try {
    await prisma.products.delete({
      where:{
        id:id
      }
    })
    revalidatePath("/todoList")
  } catch (error) {
    if(error instanceof Error){
      console.error(error);
      
      return {
          success: false,
          errorMessage: error.message
      }
  }else{
      return{
          success: false,
          errorMessage: "Error tidak diketahui"
      }
  }
  }
}

export async function deleteScheduleFinish(id: number){
  try {
    await prisma.taskFinish.delete({
      where:{
        id:id
      }
    })
    revalidatePath("/todoList")
  } catch (error) {
    if(error instanceof Error){
      console.error(error);
      
      return {
          success: false,
          errorMessage: error.message
      }
  }else{
      return{
          success: false,
          errorMessage: "Error tidak diketahui"
      }
  }
  }
}

export async function taskFinish(id: number, name:string, timeFinish:string){
  try {
    console.log(id, name, timeFinish);
    
    await prisma.products.delete({
      where:{
        id:id
      }
    })

    await prisma.taskFinish.create({
      data:{
        nama:name,
        timeFinish: timeFinish
      }
    })
    revalidatePath("/todoList")
  } catch (error) {
    if(error instanceof Error){
      console.error(error);
      
      return {
          success: false,
          errorMessage: error.message
      }
  }else{
      return{
          success: false,
          errorMessage: "Error tidak diketahui"
      }
  }
  }
}

export async function getTaskFinish(){
  try {
    const taskFinish = await prisma.taskFinish.findMany();
    return{
      data:taskFinish,
      success: true
    }
} catch (error) {
  if(error instanceof Error){
    console.error(error);
    return {
        success: false,
        errorMessage: error.message
    }
}else{
    return{
        success: false,
        errorMessage: "Error tidak diketahui"
    }
}
}
}

export async function getKepentinganData(){
  try {
    const [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10] = await Promise.all([
      prisma.kebersihan_mobil.findMany({
        select: {
          kepentingan: true,
        },
      }),
      prisma.kelengkapan_alat_mobil.findMany({
        select: {
          kepentingan: true,
        },
      }),
      prisma.performa_mobil.findMany({
        select: {
          kepentingan: true,
        },
      }),

      prisma.etika_SopanSantun.findMany({
        select: {
          kepentingan: true,
        },
      }),
      prisma.skill_komunikasi_baik_staff.findMany({
        select: {
          kepentingan: true,
        },
      }),

      prisma.pelayanan_administrasi.findMany({
        select: {
          kepentingan: true,
        },
      }),
      prisma.etika_sopan_santun_mentor.findMany({
        select: {
          kepentingan: true,
        },
      }),
      prisma.skill_komunikasi_baik_staff.findMany({
        select: {
          kepentingan: true,
        },
      }),
      prisma.pengawasan_penuh.findMany({
        select: {
          kepentingan: true,
        },
      }),
      prisma.pembawaan_materi_belajar_mentor.findMany({
        select: {
          kepentingan: true,
        },
      }),
    ]);
    const data1 = arr1.map((item) => item.kepentingan);
    const data2 = arr2.map((item) => item.kepentingan);
    const data3 = arr3.map((item) => item.kepentingan);
    const data4 = arr4.map((item) => item.kepentingan);
    const data5 = arr5.map((item) => item.kepentingan);
    const data6 = arr6.map((item) => item.kepentingan);
    const data7 = arr7.map((item) => item.kepentingan);
    const data8 = arr8.map((item) => item.kepentingan);
    const data9 = arr9.map((item) => item.kepentingan);
    const data10 = arr10.map((item) => item.kepentingan);
    
    // Menggabungkan hasil ke dalam format yang diinginkan
    const result = data1.map((kepentingan1, index) => ({
      kepentingan1,
      kepentingan2: data2[index],
      kepentingan3: data3[index],
      kepentingan4: data4[index],
      kepentingan5: data5[index],
      kepentingan6: data6[index],
      kepentingan7: data7[index],
      kepentingan8: data8[index],
      kepentingan9: data9[index],
      kepentingan10: data10[index],
    }));
    return result;
    
  } catch (error) {
    console.error(error);
    
  }
}

export async function getKinerjaData(){
  try {
    const [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10] = await Promise.all([
      prisma.kebersihan_mobil.findMany({
        select: {
          kinerja: true,
        },
      }),
      prisma.kelengkapan_alat_mobil.findMany({
        select: {
          kinerja: true,
        },
      }),
      prisma.performa_mobil.findMany({
        select: {
          kinerja: true,
        },
      }),

      prisma.etika_SopanSantun.findMany({
        select: {
          kinerja: true,
        },
      }),
      prisma.skill_komunikasi_baik_staff.findMany({
        select: {
          kinerja: true,
        },
      }),

      prisma.pelayanan_administrasi.findMany({
        select: {
          kinerja: true,
        },
      }),
      prisma.etika_sopan_santun_mentor.findMany({
        select: {
          kinerja: true,
        },
      }),
      prisma.skill_komunikasi_baik_staff.findMany({
        select: {
          kinerja: true,
        },
      }),
      prisma.pengawasan_penuh.findMany({
        select: {
          kinerja: true,
        },
      }),
      prisma.pembawaan_materi_belajar_mentor.findMany({
        select: {
          kinerja: true,
        },
      }),
    ]);
    const data1 = arr1.map((item) => item.kinerja);
    const data2 = arr2.map((item) => item.kinerja);
    const data3 = arr3.map((item) => item.kinerja);
    const data4 = arr4.map((item) => item.kinerja);
    const data5 = arr5.map((item) => item.kinerja);
    const data6 = arr6.map((item) => item.kinerja);
    const data7 = arr7.map((item) => item.kinerja);
    const data8 = arr8.map((item) => item.kinerja);
    const data9 = arr9.map((item) => item.kinerja);
    const data10 = arr10.map((item) => item.kinerja);
    
    // Menggabungkan hasil ke dalam format yang diinginkan
    const result = data1.map((kinerja1, index) => ({
      kinerja1,
      kinerja2: data2[index],
      kinerja3: data3[index],
      kinerja4: data4[index],
      kinerja5: data5[index],
      kinerja6: data6[index],
      kinerja7: data7[index],
      kinerja8: data8[index],
      kinerja9: data9[index],
      kinerja10: data10[index],
    }));
    return result;
    
  } catch (error) {
    console.error(error);
    
  }
}

export async function getData(){
  try {
    let data = await prisma.kebersihan_mobil.findMany({
      select:{
        kepentingan:true,
        kinerja:true
      }
    })
    return data;
    
  } catch (error) {
    console.error(error);
    
  }
}
