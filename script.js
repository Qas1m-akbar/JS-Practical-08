 // NOTE : sir mere Exam is 25 start ho rahe hai to or jo bakii hai o me kar longa //


//Question 1: Generate a random number btw 1 and 100 and print it to console.//

const randomNum = Math.floor(Math.random() * 100) + 1 ;
console.log(randomNum);



//Question 3: Stimulate a coin toss by generating a random number (0 or 1) and print "Heads" or "Tail"//practical08.html

//generating a random number (0 or 1)//

const randomNumber = Math.floor(Math.random() * 2);
// Determine the result based on random number //
if(randomNumber === 0){
    console.log("Heads");
}else{
    console.log("Tails");

}



//Question 4 : RANDOM PASSWORD GENERATOR PROGRAM //

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcfghijklmnopqsrtuvwxyz123456789@#$%%^&&**()<>?"

    // you can change the lenght as needed //
    const passwordLength = 12;

    let password = ' ';
    
    for(let i = 0 ; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);

        password = password + characters[randomIndex]
    }

    console.log("Generated Password :" + password);
 



//--> Question no 5 ----  Convert the string "123" to integer and print its values//


 let stringValue = "123";
 let integerValue = parseInt(stringValue);
 console.log(stringValue);


//--> Question no 5 ----> Convert the string "123.45" to decimal and print its values//

 let stringValue = "123.45";
 let decimalValue = parseFloat(stringValue);
 console.log(decimalValue);



//--> Question no 7 ----  write a  program that take a string input and converts it to an integer or decimal (depending on the input) //

 let input = prompt("Enter the number you want ");

 let integerConversion = parseInt(input);

 let decimaConversion = parseFloat(input);
  // both are same to find but if check condition which uses modulus operator is more approachible//
 if(decimaConversion % 1 === 0 ){
    
    // if(integerConversion == decimaConversion)


    alert(integerConversion);

 }else {
    
    alert(decimaConversion);
 }



//--> Question no 8---- Convert the string "123" to a number and print its values//


 let stringValue = "123";
 let integerValue = parseInt(stringValue);
 console.log(stringValue);
 

 
// --> Question no 9---- Convert the string 123 to a string and print its values//

 let numberValue = 123;
 let stringValue = numberValue.toString();
 console.log(stringValue);


 //--> Question no 10---- convert number and string on take input and convert //
 
 
 let input = prompt("Enter the number");

 //(!(input) --> check the if the input can be converted into number)//
 //input.trim() --->ensure the input just not a whitespaces// 
 //if both the condition is true it mean it a number in a string and print in number and if its a string it will print as string using tostring() Method //
 
 if(!(input) && input.trim() !== ""){

    //if input is a number in string form, convert to number //
     let numberValue = parseFloat(input);
     alert(numberValue);
     
    }else {

        // if input is a string so print as a string //
        let stringValue = input.toString();
        alert(stringValue);
    }
    
    
    
 //   --> Question no 11----> controlling the length of decimal using toFixed method//

let numberValue = 123.4546;
let fixedNum = numberValue.toFixed(2);
console.log(fixedNum);



// --> Question no 12---- write a program that takes a number as a input and formats it to a specified number if decimal places using toFixed()//


 let input = prompt("enter a number");

 let decimalPlaces = prompt("enter the number of decimal Places");

 let number = parseFloat(input);
 let formattedNumber = number.toFixed(decimalPlaces);

 alert(formattedNumber);



// --> Question no 13---->  Getting the Current time and Date//

 let currentDate1 = new Date();
 console.log(currentDate);



//Question 14--> print current date and time in specific format //

let currentDate2 = new Date();
let formattedDate = currentDate2.toString().slice(0,24);

console.log(formattedDate);


//Qusetion 15---> give current time and date as a string //

let currentDate2 = new Date();
let stringDate = currentDate2.toString().slice(0,24);
console.log(stringDate);


// Question ----> AGE CALCULATOR BY BIRTHDAY //

let birthday = new Date('2004-07-31');
let today = new Date();

let age = today.getFullYear()-birthday.getFullYear();
let monthDifference = today.getMonth()-birthday.getMonth();

if(monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate())){
    age--;
}
console.log(age);





// //Question 2 having Confusion :  Create a program that generate a random number btw two user-inputted numbers//

// //Prompt enter for 2 numbers //
// const minNumber = parseInt(prompt("Enter the first Number"));
// const maxNumber = parseInt(prompt("Enter the second Number"));

// // Check if the input are valid or not  using ! operator //
// if(!isNaN(minNumber) && !isNaN(maxNumber)){

//     // Determine the max and min values // 
//     const min = Math.min(minNumber,maxNumber);
//     const max= Math.max(minNumber,maxNumber);
//  // Generating a random number btw min and max (inclusive)
//     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// // Display a random number //
//     alert(`Random number between ${min} and ${max}: ${randomNumber}`);

// }else{
//     alert(`Please enter valid numbers `);
// }




 // sir mere Exam is 25 start ho rahe hai to or jo bakii hai o me kar longa //







