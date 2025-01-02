-- CreateTable
CREATE TABLE "TaskFinish" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "timeFinish" TEXT NOT NULL,

    CONSTRAINT "TaskFinish_pkey" PRIMARY KEY ("id")
);
