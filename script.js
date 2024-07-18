//Question 1: Generate a random number btw 1 and 100 and print it to console.//

const randomNum = Math.floor(Math.random() * 100) + 1 ;
console.log(randomNum);


//Question 2 :  Create a program that generate a random number btw two user-inputted numbers//

//Prompt enter for 2 numbers //
const minNumber = parseInt(prompt("Enter the first Number"));
const maxNumber = parseInt(prompt("Enter the second Number"));

// Check if the input are valid or not  using ! operator //
if(!isNaN(minNumber) && !isNaN(maxNumber)){

    // Determine the max and min values // 
    const min = Math.min(minNumber,maxNumber);
    const max= Math.max(minNumber,maxNumber);
 // Generating a random number btw min and max (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// Display a random number //
    alert(`Random number between ${min} and ${max}: ${randomNumber}`);

}else{
    alert(`Please enter valid numbers `);
}




//Question 3: Stimulate a coin toss by generating a random number (0 or 1) and print "Heads" or "Tail"//practical08.html

//generating a random number (0 or 1)//

const randomNumber = Math.floor(Math.random() * 2);
// Determine the result based on random number //
if(randomNumber === 0){
    console.log("Heads");
}else{
    console.log("Tails");

}



// Question 4 : RANDOM PASSWORD GENERATOR PROGRAM //

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcfghijklmnopqsrtuvwxyz123456789@#$%%^&&**()<>?"

    // you can change the lenght as needed //
    const passwordLength = 12;

    let password = ' ';
    
    for(let i = 0 ; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);

        password += characters[randomIndex]
    }

    console.log("Generated Password :" + password);
 




