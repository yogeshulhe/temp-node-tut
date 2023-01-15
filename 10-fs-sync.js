const { readFileSync, writeFileSync } = require("fs");

//or
// const fs = require('fs');
// fs.readFileSync

console.log("start");

//reading the text from the file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
// console.log(first);
// console.log(second);

//If file is not present then it create the files and write down in that file
//If file is present then over-write in the existing file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);

//if we add flag object in obove declaration then we going to append the file

console.log("done with this task");
console.log("starting the next one");
