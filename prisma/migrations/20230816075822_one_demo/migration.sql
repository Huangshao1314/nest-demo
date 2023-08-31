-- database: /Users/xyz/Desktop/workspace/nest-demo/prisma/database/master-database.db

-- Active: 1692238529460@@127.0.0.1@3306
-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lotteryDrawResult" TEXT NOT NULL,
    "lotteryDrawTime" TEXT,
    "lotteryGameNum" TEXT
);

SELECT * FROM 'Task';

-- blue red test
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "red" TEXT NOT NULL,
    "blue" TEXT,
    "date" TEXT
);

-- DROP TABLE "Task"

SELECT * FROM 'Project';