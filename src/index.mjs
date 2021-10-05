import fs from 'fs';
import path from 'path';

const filePath = path.resolve(`text.txt`);

const readText = () => {
  console.log(`fs object properties(readText): `, Object.keys(fs).join(`, `));
  console.log(fs.readFileSync(filePath, `utf8`));
}

const writeText = () => {
  console.log(`fs object properties(writeText): `, Object.keys(fs).join(`, `));
  console.log(filePath);
  fs.writeFileSync(filePath, new Date().toISOString());
}

const run = () => {
  writeText();
  readText();
}

if (!process.argv[1].endsWith(`jest.js`)) {
  run();
}

export default {
  readText,
  writeText
}
