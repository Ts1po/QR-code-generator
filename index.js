/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

//ესენი არის იმისთის რათა დავაიმპორიტო npm package-ები
import inquirer from "inquirer";
import image from "qr-image";
import fs from "fs";

//ეს არის inquirer-ის სტრუქტურა
inquirer
  .prompt([
    {
        message : "Please enter your URL: ",
        name : "URL"
    },
    
  ])
  .then((answers) => {
    //ეს არის რათა გამოსახოს qr კოდი
    const url = answers.URL;
    var qr_svg = image.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));
    
    //ეს ჩვეულებრივად რო შეიქმნას ფაილი
    fs.writeFile("url.txt", url, (err) => {
        if(err) throw err;
        console.log("This file has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });




