# 导入数据库命令
1.mac利用python命令导入json
echo '[{"x": 1, "y": 2}, {"x": 3, "y": 4}]' | '/Library/Frameworks/Python.framework/Versions/3.11/bin/python3' -m sqlite_utils insert '/Users/xyz/Desktop/workspace/nest-demo/prisma/database/master-database.db' Task - < Task_2023-08-22_101234.json
2.window利用sqlite3导入命令
echo '[{"x": 1, "y": 2}, {"x": 3, "y": 4}]' | c:\Users\mhsf1\.vscode\extensions\yy0931.vscode-sqlite3-editor-1.0.108\bin\db-driver-win32-x64.exe import --database-filepath "c:\Users\mhsf1\Desktop\code\workspace\nest-demo\prisma\database\master-database.db" --format json --table-name "Rank_Five" --input-file "c:\Users\mhsf1\Desktop\code\workspace\nest-demo\prisma\database\out.json"
默认当前项目目录
# 导出命令
默认导出当前目录
# tools.js工具类文件
—— 1.转换不符合数据表结构的json
—— ...

# primas相关操作
## 更新客户端相关数据命令
npx prisma generate