const fs = require("fs");

// fs.writeFileSync('notes.txt',"This file was created by Node.js");

fs.writeFileSync("notes.txt", "My name is Pratik Ghadge.");

fs.appendFileSync("notes.txt","I live in Bangalore.");
//Challenge:Append a message to notes.txt

//1.Use appendFileSync to append to the file
//2.Run the script.
//3.Check your work by opening the file and viewing the append text.
