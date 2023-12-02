-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT,
    "email" TEXT,
    "password" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "title" TEXT,
    "URL" TEXT,
    "author" TEXT,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
