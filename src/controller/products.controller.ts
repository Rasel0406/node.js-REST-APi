
import fs from "fs";
import path from "path";
export const filePath = path.join (process.cwd(), './src/database/data.json');
export const productsRead = () => {
    const readFile = fs.readFileSync(filePath, "utf-8");
    console.log(readFile);
    return JSON.parse(readFile);
}
