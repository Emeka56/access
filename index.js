// EMMA EMEKA CHUKWU – Node.js ASSIGNMENT

// Question 1:

let greet = "Hello".split("").reverse().join("");
console.log(greet);


// Question 2:

/*

A: A String is a primitive data type that represents a sequential collection of characters 
used to store and manipulate textual data. It can contain letters, numbers, symbols, or empty spaces wrapped inside single, double, or backtick quotation marks. Strings in JavaScript are immutable, meaning once a string is created, its individual characters cannot be changed directly. Example: .toUpperCase() , .replace() 

B: The Number data type represents numerical values, 
which can be computed mathematically with standard arithmetic operators. Example: .toString()

*/


// Question 3: 

let number = 85;
 if (number <0 || number > 100){
    console.log(`Invalid Score`)

}else if (number >= 70 && number <= 100){
console.log(` Excellent `)

}else if (number >= 60 && number <= 69){
console.log( ` Very Good `);

}else if  (number >= 50 && number <= 59){
console.log( ` Good `);

} else if (number >= 40 && number <= 49){
console.log( ` Poor `);


} else if  (number >= 0 && number <= 39){
console.log( ` Very Poor `);

} 