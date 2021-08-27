
console.log("Welcome to the password validator tool!")

function passwordValid (str){
    if(str.length > 10){
        return `Success!`
    } else {
        return `I'm sorry your password needs to be at least 10 characters long.`
    }
}


isMyPassVal = passwordValid(`Jeremyiscool`)
console.log(isMyPassVal)



