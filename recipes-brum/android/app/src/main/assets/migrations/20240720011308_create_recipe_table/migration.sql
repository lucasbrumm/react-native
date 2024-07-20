-- CreateTable
CREATE TABLE "Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "directions" TEXT NOT NULL,
    "tested" BOOLEAN NOT NULL DEFAULT false
);
