-- CreateTable
CREATE TABLE "ventas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "fecha" DATETIME NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "precio" DECIMAL NOT NULL
);
