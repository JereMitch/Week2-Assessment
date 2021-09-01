
const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

    reader.question("Welcome to the Password Validator! Please enter a password that is at least 10 characters: ", function(input){
        class Validator{
            constructor(input){
                this.input = input,
            this.length = false
        }
         password(){
             if(this.input.length < 10){
                 console.log("I'm sorry please enter a password with at least 10 characters")
             } else{
                 this.length = true
                 console.log("Valid Password!")
             }
         }
    }
    let isItValid = new Validator(input)
         isItValid.password()

         reader.close
 })