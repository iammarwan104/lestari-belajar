-- CreateTable
CREATE TABLE "skill_komunikasi_baik_staff" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "skill_komunikasi_baik_staff_pkey" PRIMARY KEY ("id")
);
