import { $Enums } from "@prisma/client";

interface quesionerSubmitInitial{
    success: boolean,
    errors: {
        message: "Sedang ada error"
      }
}

export interface Item {
  id: number,
  kepentingan: number,
  kinerja: number,
  komentar_kepentingan: string | null
  komentar_kinerja: string | null
}

export interface DataSiswa {
  id: number;
  name: string;
  gender: $Enums.Gender;
  phoneNumber: string;
  status: boolean;
  createdAt: Date
}

export interface SWRFetchData {
  totalPages : number,
  totalSiswa : number,
  success: boolean
  data?: DataSiswa[],
  message?:string
}

export interface tambahDataSiswaInterface{
  errors?: {
         nama?: string[] | string;
         gender?: string[] | string;
         phoneNumber?: string[] | string;
     };
   success?: boolean | string
   data? : {
    nama: string,
    gender: string,
    phoneNumber: number
   };
   error?: string;
 }
 
 export interface ScatterData {
  name: string;
  x: number;
  y: number;
  komentar_kepentingan?: (string|null)[];
  komentar_kinerja?: (string|null)[];
}

export interface GarisPerbatasan {
  sumbuY : number;
  sumbuX: number;
}

export interface Login{
  errors?: {
         username?: string[] | string;
         password?: string[] | string;
     };
   success?: boolean
   data? : {
     username: string;
     password: string;
   };
   error?: string;
 }

 export interface CheckNumberPhone{
  success: boolean | null
  id?: number| null
  phoneNumber?: string | null
  name?: string | null 
  errorMessage? : string[] | string
}

export interface CheckAdminInterface{
  success: boolean | null
  username?: string | null
  password?: string | null 
  errorMessage? : string[] | string
}

export interface ScatterData {
  name: string;
  x: number;
  y: number;
}

// area belajar
export interface TambahScheduleInterface{
  success: boolean|null
  errorMessage?: string|null
}

export interface TaskFormat {
  data?: { id: number; image: string | null; nama: string; price: string }[];
  success: boolean;
  errorMessage?: string;
}