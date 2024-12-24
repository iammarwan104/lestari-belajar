-- CreateTable
CREATE TABLE "skill_komunikasi_baik" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "skill_komunikasi_baik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pengawasan_penuh" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "pengawasan_penuh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "materi_mudah_dipahami" (
    "id" SERIAL NOT NULL,
    "kepentingan" INTEGER NOT NULL,
    "kinerja" INTEGER NOT NULL,
    "komentar" TEXT,

    CONSTRAINT "materi_mudah_dipahami_pkey" PRIMARY KEY ("id")
);
