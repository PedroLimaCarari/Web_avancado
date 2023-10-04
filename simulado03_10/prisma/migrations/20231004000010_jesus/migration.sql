/*
  Warnings:

  - You are about to drop the column `pacienteId` on the `Agenda` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Agenda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "nomePcente" TEXT NOT NULL
);
INSERT INTO "new_Agenda" ("data", "id", "nomePcente") SELECT "data", "id", "nomePcente" FROM "Agenda";
DROP TABLE "Agenda";
ALTER TABLE "new_Agenda" RENAME TO "Agenda";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
