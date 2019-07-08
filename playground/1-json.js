const fs = require('fs');

const jsonData = JSON.parse(fs.readFileSync('1-json.json').toString());
jsonData.name = 'Ivan';
jsonData.age = 24;

console.log(jsonData);

fs.writeFileSync('1-json.json', JSON.stringify(jsonData));
