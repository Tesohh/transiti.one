-- CreateTable
CREATE TABLE "Transition" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "song1" TEXT NOT NULL,
    "song2" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "dislikes" INTEGER NOT NULL
);
