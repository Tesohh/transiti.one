/*
  Warnings:

  - The primary key for the `Transition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Transition` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "song1" TEXT NOT NULL,
    "song2" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "dislikes" INTEGER NOT NULL
);
INSERT INTO "new_Transition" ("dislikes", "id", "likes", "song1", "song2") SELECT "dislikes", "id", "likes", "song1", "song2" FROM "Transition";
DROP TABLE "Transition";
ALTER TABLE "new_Transition" RENAME TO "Transition";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
