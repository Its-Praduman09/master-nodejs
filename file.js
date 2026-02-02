const fs = require("fs");
// Synchronously write data to a file
// fs.writeFileSync("./Test.txt", "Welcome Software Engineer");

// Asynchronously write data to a file
// fs.writeFile("./Test.txt", "Welcome To Software Engineer", (err) => {
//   if (err) {
//     console.error("Error writing to file", err);
//   } else {
//     console.log("File written successfully");
//   }
// });

// const result = fs.readFileSync("./Contacts.txt", "utf-8"); // it return buffer data

// console.log(result);

// Asynchronously read data from a file

// fs.readFile("./Contacts.txt", "utf-8", (err, result) => {
//   // it not return buffer data
//   if (err) {
//     console.log("Error reading file", err);
//   } else {
//     console.log(result);
//   }
// });

// fs.appendFileSync("./Test.txt", "\n Have a great day!");

// fs.appendFileSync("./Test.txt", "\n date: " + new Date().toLocaleString());

// fs.cpSync("./Test.txt", "./Backup/Test.txt"); // copy file from one location to another

// fs.unlinkSync("./Test.txt"); // delete file
