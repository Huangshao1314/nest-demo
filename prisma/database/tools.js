const fs = require('fs');

// 读取本地 JSON 文件的路径
const inputJsonFilePath =
  '/Users/xyz/Desktop/workspace/nest-demo/prisma/database/test3000.json';

// 读取 JSON 文件
fs.readFile(inputJsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading input JSON file: ${err}`);
    return;
  }

  try {
    // 尝试解析 JSON 数据
    const jsonData = JSON.parse(data);
    const jsonFrom = [];

    // 在这里进行任何数据转换或处理
    // 例如，删除 "ttets" 列
    for (let i = 0; i < jsonData.length; i++) {
      jsonFrom.push({
        blue: jsonData[i].blue,
        red: jsonData[i].red,
        date: jsonData[i].date,
      });
    }

    // 转换后的 JSON 数据
    const transformedJsonData = JSON.stringify(jsonFrom, null, 2);

    // 写入转换后的数据到新的 JSON 文件
    // const outputJsonFilePath = 'path/to/your/output.json';
    fs.writeFile(inputJsonFilePath, transformedJsonData, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error(`Error writing output JSON file: ${writeErr}`);
      } else {
        console.log(`Data has been written to ${inputJsonFilePath}`);
      }
    });
  } catch (parseError) {
    console.error(`Error parsing input JSON: ${parseError}`);
  }
});
