"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prismaClient";
const bcrypt = require('bcrypt');
import { Gender } from '@prisma/client'
import { CheckAdminInterface, CheckNumberPhone, Item, Login, tambahDataSiswaInterface } from "./interface";
import { checkAdminZod, checkPhoneNumberZod, mySchema, quesionerValidation, tambahDataSiswaSchema, updateDataSiswaSchema } from "./schemaZod";

export async function quesionerSubmit(prevState: any, formData: FormData) {

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
const scriptRegex = /(<script.*?>[\s\S]*?<\/script>|\b(eval|setTimeout|setInterval)\(.*?\)|data:image\/svg\+xml;.*?base64.*?>)/gi;
const isInvalid = scriptRegex.test(answerQuesioner.data?.komentar_etika_sopan_santun as string) || scriptRegex.test(answerQuesioner.data?.komentar_pelayanan_administrasi as string) || scriptRegex.test(answerQuesioner.data?.komentar_pelayanan_jadwal_belajar as string);

if(isInvalid){
    return{
        success: false,
        message : "Karakter tidak valid terdeteksi. Harap jangan berlebihan dalam memberikan tanda baca.",
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
  function getAverangeValue(arr: Item[], name: string): {kepentingan: number, kinerja: number, nama: string, komentar: (string|null)[]}{
      const totalKepentingan = arr.reduce((sum: number, item) => sum + item.kepentingan, 0)
      const rataRataKepentingan = (totalKepentingan / arr.length).toFixed(1);
      const totalKinerja = arr.reduce((sum: number, item) => sum + item.kinerja, 0)
      const rataRataKinerja = (totalKinerja / arr.length).toFixed(1);
      let fiveKomentar: (string|null)[] = [];
      arr.map((data, index) => {
          index >= (arr.length - 5) ? fiveKomentar.push(data.komentar) : null
      })
      return {
          nama : name,
          kepentingan : Number(rataRataKepentingan),
          kinerja: Number(rataRataKinerja),
          komentar: fiveKomentar
      }
  }
  const kebersihan_mobil = await prisma.kebersihan_mobil.findMany();
  const kelengkapan_alat_mobil = await prisma.kelengkapan_alat_mobil.findMany();
  const kebersihan_kelas_mengemudi = await prisma.kebersihan_kelas_mengemudi.findMany();
  const kelengkapan_alat_kelas_mengemudi = await prisma.kelengkapan_alat_kelas_mengemudi.findMany();
  const performa_alat_kelas_mengemudi = await prisma.performa_alat_kelas_mengemudi.findMany();
  const kebersihan_lembaga_kursus = await prisma.kebersihan_lembaga_kursus.findMany();
  const kelengkapan_alat_lembaga_kursus = await prisma.kelengkapan_alat_lembaga_kursus.findMany();
  const performa_alat_lembaga_kursus = await prisma.performa_alat_lembaga_kursus.findMany();
  const performa_alat_mobil = await prisma.performa_alat_mobil.findMany();
  const performa_mobil = await prisma.performa_mobil.findMany();
  const etika_sopan_santun = await prisma.etika_SopanSantun.findMany();    
  const etika_sopan_santun_mentor_mengemudi = await prisma.etika_sopan_santun_mentor.findMany();    
  const pembawaan_materi_belajar_mentor_mengemudi = await prisma.pembawaan_materi_belajar_mentor.findMany();    
  const pelayanan_administrasi = await prisma.pelayanan_administrasi.findMany();    
  const pelayanan_jadwal_belajar = await prisma.pelayanan_jadwal_belajar.findMany();    


  const kordinatKebersihanMobil = getAverangeValue(kebersihan_mobil, "Kebersihan Mobil")
  const kordinatKelengkapanAlatMobil = getAverangeValue(kelengkapan_alat_mobil, "Kelengkapan Alat Mobil")
  const kordinatKebersihanKelasMengemudi = getAverangeValue(kebersihan_kelas_mengemudi, "Kebersihan Kelas Mengamudi")
  const kordinatKelengkapanAlatKelasMengemudi = getAverangeValue(kelengkapan_alat_kelas_mengemudi, "Kelengkapan Alat Kelas Mengemudi")
  const kordinatPerformaAlatKelasMengemudi = getAverangeValue(performa_alat_kelas_mengemudi, "Performa Alat Kelas Mengemudi")
  const kordinatKebersihanLembagaKursus = getAverangeValue(kebersihan_lembaga_kursus, "Kebersihan Lembaga Kursus")
  const kordinatKelengkapanAlatLembagaKursus = getAverangeValue(kelengkapan_alat_lembaga_kursus, "Kelengkapan Alat Lembaga Kursus")
  const kordinatPerformaAlatLembagaKursus = getAverangeValue(performa_alat_lembaga_kursus, "Performa Alat Lembaga Kursus")
  const kordinatPerformaAlatMobil = getAverangeValue(performa_alat_mobil, "Performa Alat Mobil")
  const kordinatPerformaMobil = getAverangeValue(performa_mobil, "Performa Mobil")
  const kordinatEtikaSopanSantun = getAverangeValue(etika_sopan_santun, "Etika dan Sopan Santun")
  const kordinatPelayananAdministrasi = getAverangeValue(pelayanan_administrasi, "Pelayanan Administrasi")
  const kordinatPelayananJadwalBelajar = getAverangeValue(pelayanan_jadwal_belajar, "Pelayanan Jadwal Belajar")
  const kordinatEtikaSopanSantunMentorMengemudi = getAverangeValue(etika_sopan_santun_mentor_mengemudi, "Etika dan Sopan Santun Mentor Mengemudi")
  const kordinatPembawaanMateriBelajarMentorMengemudi = getAverangeValue(pembawaan_materi_belajar_mentor_mengemudi, "Pembawaan Materi Belajar Mentor Megemudi")

  const sumbuY = [
    kordinatKebersihanMobil.kepentingan, 
    kordinatKelengkapanAlatMobil.kepentingan, 
    kordinatPerformaAlatMobil.kepentingan, 
    kordinatPerformaMobil.kepentingan, 
    kordinatKebersihanKelasMengemudi.kepentingan, 
    kordinatKelengkapanAlatKelasMengemudi.kepentingan, 
    kordinatPerformaAlatKelasMengemudi.kepentingan,
    kordinatKebersihanLembagaKursus.kepentingan, 
    kordinatKelengkapanAlatLembagaKursus.kepentingan, 
    kordinatPerformaAlatLembagaKursus.kepentingan,
    kordinatEtikaSopanSantun.kepentingan,
    kordinatPelayananAdministrasi.kepentingan,
    kordinatPelayananJadwalBelajar.kepentingan,
    kordinatEtikaSopanSantunMentorMengemudi.kepentingan,
    kordinatPembawaanMateriBelajarMentorMengemudi.kepentingan,
    3.5, 5, 4]


  const sumbux = [
    kordinatKebersihanMobil.kinerja, 
    kordinatKelengkapanAlatMobil.kinerja, 
    kordinatPerformaAlatMobil.kinerja, 
    kordinatPerformaMobil.kinerja, 
    kordinatKebersihanKelasMengemudi.kinerja, 
    kordinatKelengkapanAlatKelasMengemudi.kinerja, 
    kordinatPerformaAlatKelasMengemudi.kinerja,
    kordinatKebersihanLembagaKursus.kinerja, 
    kordinatKelengkapanAlatLembagaKursus.kinerja, 
    kordinatPerformaAlatLembagaKursus.kinerja,
    kordinatEtikaSopanSantun.kinerja,
    kordinatPelayananAdministrasi.kinerja,
    kordinatPelayananJadwalBelajar.kinerja,
    kordinatEtikaSopanSantunMentorMengemudi.kinerja,
    kordinatPembawaanMateriBelajarMentorMengemudi.kinerja,
    4, 4, 5]

  function getSumbuYX(sumbuY: number[], sumbuX: number[]): {sumbuY : number, sumbuX: number}{
      const totalSumbuY = sumbuY.reduce((sum: number, item) => sum + item, 0)
      const rataRataSumbuY = (totalSumbuY / sumbuY.length).toFixed(1);
      const totalSumbuX = sumbuX.reduce((sum: number, item) => sum + item, 0)
      const rataRataSumbuX = (totalSumbuX / sumbuX.length).toFixed(1);
      return {
          sumbuY : Number(rataRataSumbuY),
          sumbuX: Number(rataRataSumbuX)
      }
  }

  const garisPerbatasan = getSumbuYX(sumbuY, sumbux);

  return{
      kebersihanMobil: kordinatKebersihanMobil,
      kelengkapanAlatMobil: kordinatKelengkapanAlatMobil,
      kebersihanKelasMengemudi: kordinatKebersihanKelasMengemudi,
      kelengkapanAlatKelasMengemudi: kordinatKelengkapanAlatKelasMengemudi,
      performaAlatKelasMengemudi: kordinatPerformaAlatKelasMengemudi,
      kebersihanLembagaKursus: kordinatKebersihanLembagaKursus,
      kelengkapanAlatLembagaKursus: kordinatKelengkapanAlatLembagaKursus,
      performaAlatLembagaKursus: kordinatPerformaAlatLembagaKursus,
      performaAlatMobil: kordinatPerformaAlatMobil,
      performaMobil: kordinatPerformaMobil,
      etikaSopanSantun: kordinatEtikaSopanSantun,
      pelayananAdministrasi: kordinatPelayananAdministrasi,
      pelayananJadwalBelajar: kordinatPelayananJadwalBelajar,
      etikaSopanSantunMentorMengemudi: kordinatEtikaSopanSantunMentorMengemudi,
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
  console.log(siswa)
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
  console.log("debug 1")
  return {
    success: true,
    data : {
    nama: siswa.nama as string,
    gender: siswa.gender as string,
    phoneNumber: Number(siswa.number)
    }
  }
}catch(error){
  console.log("debug 2")
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
        skipData = (page - 1) * 5;
    }

    // logic if input search is empty
    if(!query){
        const dataCount = await prisma.siswaKursusMengemudi.count()
        const getStudents = await prisma.siswaKursusMengemudi.findMany({
        skip: skipData,
        take: 5
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
            totalPages : Math.ceil(dataCount/5)
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
        take: 5
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
            totalPages : Math.ceil(dataCount/5)
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
