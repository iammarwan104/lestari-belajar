/*
  Warnings:

  - You are about to drop the column `komentar` on the `etika_SopanSantun` table. All the data in the column will be lost.
  - You are about to drop the column `komentar` on the `etika_sopan_santun_mentor` table. All the data in the column will be lost.
  - You are about to drop the column `komentar` on the `kebersihan_mobil` table. All the data in the column will be lost.
  - You are about to drop the column `komentar` on the `kelengkapan_alat_mobil` table. All the data in the column will be lost.
  - You are about to drop the column `komentar` on the `pelayanan_administrasi` table. All the data in the column will be lost.
  - You are about to drop the column `komentar` on the `pelayanan_jadwal_belajar` table. All the data in the column will be lost.
  - You are about to drop the column `komentar` on the `pembawaan_materi_belajar_mentor` table. All the data in the column will be lost.
  - You are about to drop the column `komentar` on the `pengawasan_penuh` table. All the data in the column will be lost.
  - You are about to drop the column `komentar` on the `performa_mobil` table. All the data in the column will be lost.
  - You are about to drop the column `komentar` on the `skill_komunikasi_baik` table. All the data in the column will be lost.
  - You are about to drop the column `komentar` on the `skill_komunikasi_baik_staff` table. All the data in the column will be lost.
  - You are about to drop the `Anggota` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Books` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pinjam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Publishers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `kebersihan_kelas_mengemudi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `kebersihan_lembaga_kursus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `kelengkapan_alat_kelas_mengemudi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `kelengkapan_alat_lembaga_kursus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `materi_mudah_dipahami` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `performa_alat_kelas_mengemudi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `performa_alat_lembaga_kursus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `performa_alat_mobil` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Books" DROP CONSTRAINT "Books_idCategory_fkey";

-- DropForeignKey
ALTER TABLE "Pinjam" DROP CONSTRAINT "Pinjam_idBook_fkey";

-- DropForeignKey
ALTER TABLE "Pinjam" DROP CONSTRAINT "Pinjam_nisAnggota_fkey";

-- AlterTable
ALTER TABLE "etika_SopanSantun" DROP COLUMN "komentar",
ADD COLUMN     "komentar_kepentingan" TEXT,
ADD COLUMN     "komentar_kinerja" TEXT;

-- AlterTable
ALTER TABLE "etika_sopan_santun_mentor" DROP COLUMN "komentar",
ADD COLUMN     "komentar_kepentingan" TEXT,
ADD COLUMN     "komentar_kinerja" TEXT;

-- AlterTable
ALTER TABLE "kebersihan_mobil" DROP COLUMN "komentar",
ADD COLUMN     "komentar_kepentingan" TEXT,
ADD COLUMN     "komentar_kinerja" TEXT;

-- AlterTable
ALTER TABLE "kelengkapan_alat_mobil" DROP COLUMN "komentar",
ADD COLUMN     "komentar_kepentingan" TEXT,
ADD COLUMN     "komentar_kinerja" TEXT;

-- AlterTable
ALTER TABLE "pelayanan_administrasi" DROP COLUMN "komentar",
ADD COLUMN     "komentar_kepentingan" TEXT,
ADD COLUMN     "komentar_kinerja" TEXT;

-- AlterTable
ALTER TABLE "pelayanan_jadwal_belajar" DROP COLUMN "komentar",
ADD COLUMN     "komentar_kepentingan" TEXT,
ADD COLUMN     "komentar_kinerja" TEXT;

-- AlterTable
ALTER TABLE "pembawaan_materi_belajar_mentor" DROP COLUMN "komentar",
ADD COLUMN     "komentar_kepentingan" TEXT,
ADD COLUMN     "komentar_kinerja" TEXT;

-- AlterTable
ALTER TABLE "pengawasan_penuh" DROP COLUMN "komentar",
ADD COLUMN     "komentar_kepentingan" TEXT,
ADD COLUMN     "komentar_kinerja" TEXT;

-- AlterTable
ALTER TABLE "performa_mobil" DROP COLUMN "komentar",
ADD COLUMN     "komentar_kepentingan" TEXT,
ADD COLUMN     "komentar_kinerja" TEXT;

-- AlterTable
ALTER TABLE "skill_komunikasi_baik" DROP COLUMN "komentar",
ADD COLUMN     "komentar_kepentingan" TEXT,
ADD COLUMN     "komentar_kinerja" TEXT;

-- AlterTable
ALTER TABLE "skill_komunikasi_baik_staff" DROP COLUMN "komentar",
ADD COLUMN     "komentar_kepentingan" TEXT,
ADD COLUMN     "komentar_kinerja" TEXT;

-- DropTable
DROP TABLE "Anggota";

-- DropTable
DROP TABLE "Author";

-- DropTable
DROP TABLE "Books";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Pinjam";

-- DropTable
DROP TABLE "Publishers";

-- DropTable
DROP TABLE "kebersihan_kelas_mengemudi";

-- DropTable
DROP TABLE "kebersihan_lembaga_kursus";

-- DropTable
DROP TABLE "kelengkapan_alat_kelas_mengemudi";

-- DropTable
DROP TABLE "kelengkapan_alat_lembaga_kursus";

-- DropTable
DROP TABLE "materi_mudah_dipahami";

-- DropTable
DROP TABLE "performa_alat_kelas_mengemudi";

-- DropTable
DROP TABLE "performa_alat_lembaga_kursus";

-- DropTable
DROP TABLE "performa_alat_mobil";
