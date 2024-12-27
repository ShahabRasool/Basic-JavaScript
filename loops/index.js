
// Question:
// Write a JavaScript program that checks whether a person is eligible to vote based on the following conditions:

// The person must be 18 years or older.
// The person must be a citizen of the country.
// The person must be registered to vote.
// If the person meets all the above criteria, display a message:
// "You are eligible to vote"

// Otherwise, display appropriate messages for each of the following cases:

// If the person is not registered, display: "You are not eligible due to registration."
// If the person is not a citizen, display: "You are not eligible due to citizenship."
// If the person's age is below 18, display: "You are not eligible to vote."
var age = 20
var citizen= true;
var isregister=true;
if(age >=18){
    if(citizen){
        if(isregister){
            console.log("you are eligible to vote");
        }else{
            console.log("you are not eligibale due to registeration");
        }
    }else{
        console.log("you are not eligibale due to citizen");
    }
  
}else{
    console.log("You are not eligibale to vote ")
}
// write a program to check a Number is even or old
var a =9;
if(a % 2 ==0){
    console.log("number is even");
}else{
    console.log("number is odd");
}
// write a program to check a number is positive or negative
var b = -9;
if(b > 0){
    console.log("number is positive");
    }else{
        console.log("number is negative");
        }
        