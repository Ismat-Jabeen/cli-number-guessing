#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number - Done
// 2) user input for guessing number - Done
// 3) Compare user input with computer generated number and show result - Done
// ham jis number se randomNumber ko multiply karain result us number se kam hoga
const randomNumber = Math.floor(Math.random() * 6 + 1);
//const randomNumber = Math.floor(Math.random() * 10 + 1);
//console.log(randomNumber);
//const randomNumber = Math.random();
//console.log(randomNumber);
//const randomNumber = 13;
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        // message: "please guess a number:",
        //message: "please guess a number between 1-10:",
        message: "please guess a number between 1-6:"
    },
]);
// if(agar ye condition true hay) {to is mein jo msg hay us ko run karay ga}
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
