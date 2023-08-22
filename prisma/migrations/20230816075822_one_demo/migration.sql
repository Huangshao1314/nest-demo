-- Active: 1692238529460@@127.0.0.1@3306
-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lotteryDrawResult" TEXT NOT NULL,
    "lotteryDrawTime" TEXT,
    "lotteryGameNum" TEXT
);

-- DROP TABLE "Task"

SELECT * FROM 'Task'