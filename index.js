const fs = require("fs/promises");

//CREATING THE FILE IN THE SRC FOLDER
const myFileWriter = async (fileName, fileContent) => {
  return await fs.writeFile(fileName, fileContent);
};

//ABOVE FUNCTION RETURNS AN PROMISE SO WE CAN RE-SOLVING PROMISE BELOW
myFileWriter("file.txt", "Hello");

//BELOW FILE IS CREATED TO JUST DELETE THE FILE AND CHECK!!!
myFileWriter("delete.txt", "This file is created to check the delete file !!!");

//READ THE CONTENT IN THE FILE  AND BELOW FUNCTION RETURNS AN PROMISE
const myFileReader = async (fileName) => {
  return await fs.readFile(fileName);
};

//HERE, WE ARE RE-SOLVING THE PROMISE AND READING THE DATA IN SUCCESS.
myFileReader("file.txt")
  .then((res) => {
    console.log(res.toString());
  })
  .catch((err) => {
    console.log(err);
  });

//BELOW FUNCTION WILL UPDATE THE NEW-CONTENT IN THE SAME FILE OF THE FILE.TXT AND RETURNS AN PROMISE
const myFileUpdater = async (fileName, fileContent) => {
  return await fs.appendFile(fileName, fileContent);
};

//HERE, WE ARE RE-SOLVING THE PROMISE AND UPDATING THE CONTENT IN THE FILE.TXT FILE!
myFileUpdater("file.txt", " World!!");

//BELOW FUNCTION WILL DELETE THE FILE "delete.txt"!!!!
const myFileDeleter = async (fileName) => {
  return await fs.unlink(fileName);
};

// PLEASE , UNCOMMENT THE BELOW LINE TO DELETE THE FILE "delete.txt"!!!! ------->"DON'T FORGET TO UNCOMMENT BELOW LINE"
myFileDeleter("delete.txt");

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
