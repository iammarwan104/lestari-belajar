-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Pria', 'Wanita');

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anggota" (
    "nis" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "class" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,

    CONSTRAINT "Anggota_pkey" PRIMARY KEY ("nis")
);

-- CreateTable
CREATE TABLE "Pinjam" (
    "id" SERIAL NOT NULL,
    "pickUpDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnDate" TIMESTAMP(3) NOT NULL,
    "idBook" INTEGER NOT NULL,
    "nisAnggota" TEXT NOT NULL,

    CONSTRAINT "Pinjam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Books" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "publicationYear" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "pages" INTEGER NOT NULL,
    "idCategory" INTEGER NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publishers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Publishers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kebersihan_kelas_mengemudi" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "kebersihan_kelas_mengemudi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kebersihan_mobil" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "kebersihan_mobil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kebersihan_lembaga_kursus" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "kebersihan_lembaga_kursus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kelengkapan_alat_lembaga_kursus" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "kelengkapan_alat_lembaga_kursus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "performa_alat_lembaga_kursus" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "performa_alat_lembaga_kursus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "performa_mobil" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "performa_mobil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "etika_SopanSantun" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "etika_SopanSantun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pelayanan_administrasi" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "pelayanan_administrasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "etika_sopan_santun_mentor" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "etika_sopan_santun_mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pembawaan_materi_belajar_mentor" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "pembawaan_materi_belajar_mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pelayanan_jadwal_belajar" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "pelayanan_jadwal_belajar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "performa_alat_mobil" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "performa_alat_mobil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kelengkapan_alat_mobil" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "kelengkapan_alat_mobil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kelengkapan_alat_kelas_mengemudi" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "kelengkapan_alat_kelas_mengemudi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "performa_alat_kelas_mengemudi" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "performa_alat_kelas_mengemudi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skor_kuesioners" (
    "id" SERIAL NOT NULL,
    "kuesioner" TEXT NOT NULL,
    "kepentingan" DOUBLE PRECISION NOT NULL,
    "kinerja" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "skor_kuesioners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sumbu" (
    "id" SERIAL NOT NULL,
    "sumbu" TEXT NOT NULL,
    "kordinat" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "sumbu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "score" (
    "id" SERIAL NOT NULL,
    "biru" INTEGER NOT NULL,
    "merah" INTEGER NOT NULL,

    CONSTRAINT "score_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "siswaKursusMengemudi" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "phoneNumber" VARCHAR(12) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "siswaKursusMengemudi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pinjam" ADD CONSTRAINT "Pinjam_idBook_fkey" FOREIGN KEY ("idBook") REFERENCES "Books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pinjam" ADD CONSTRAINT "Pinjam_nisAnggota_fkey" FOREIGN KEY ("nisAnggota") REFERENCES "Anggota"("nis") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "Books_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
