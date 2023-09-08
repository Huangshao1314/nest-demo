-- Active: 1692238529460@@127.0.0.1@3306
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

CREATE TABLE "Measure" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "same1" TEXT NOT NULL,
    "same2" TEXT,
    "same3" TEXT,
    "same4" TEXT,
    "same5" TEXT,
    "same6" TEXT,
    "same7" TEXT,
    "same8" TEXT,
    "same9" TEXT,
    "same10" TEXT
);

SELECT from "Measure"
-- DROP TABLE "Task"

SELECT * FROM 'Project';