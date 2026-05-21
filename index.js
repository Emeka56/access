// Question 1: A function to accept a 2 dimentional array and return a flatten array


const myArray = [[1,2,3], [4, 5], [6,7,8,9]];


function flatArray (arr) {
    let flat = [];

    for (let a = 0; a < arr.length; a++){
    for (let b = 0; b < arr[a].length; b++){

        flat.push(arr[a][b]);
    }
    }

    return flat;
}

console.log(flatArray(myArray))



//Question 2: a function that accepts 3 arrays and returns an array of elements that are found/shared between the three arrays.

const oneOfEach = [1, 2, 3, 4]
const twoOfEach = [3, 4, 5]
const threeOfEach = [3, 4, 5, 6]

function sharedArray (a, b, c){

  return a.filter(e => b.includes(e) && c.includes(e));
}

// sharedArray(oneOfEach)

console.log(sharedArray(oneOfEach, twoOfEach, threeOfEach));


// Question 3:  function that accepts an array of elements and returns a list of unique elements.

const uniArray = [1, 3, 2, 3, 4, 5, 4, 2, 5, 6];

function uniqueArray(arr){
    let flat = [];
    
    for (let i = 0; i < arr.length; i++){
        
     if (!flat.includes(arr[i])) {
      flat.push(arr[i]);
    }
    }
        return flat;
}

uniqueArray(uniArray)

console.log(uniqueArray(uniArray))


// Question 4: Write a JavaScript that accepts a string in kabeb case and returns the string in camel case.

// let word = "hello-there"

function toCamel (a){
   return a.split('-').map((word, i) => {
    if (i === 0){
        return word;
    }

    return word[0].toUpperCase() + word.slice(1);
   }).join('');
    
}

console.log(toCamel('hello-there'));