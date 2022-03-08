/**
 * Collatz Conjecture
 * Functions below count the number of operations it'll take to reach one for any given positive integer. 
 * Big integers in the format 147573952589676410000n or 143 254 655 879 543 987 are not accounted for. 
 * Please do not leave spaces between numbers.
 */

//Set up global variable to keep track of count for recursion function
let countOps= 0;

// Method using recursion
function countOpsRecursion (num) {
    
    //Check if input is a number and if number is greater than 0.
    if (typeof(num) !== "number" || num < 0 ) return "Oops, seems we have a problem. Please use a NUMBER greater than 0";

    //Check if number is one.
    if (num === 1) return countOps;

    //Check if number is even   
    if(num % 2 === 0 ){
        //Increment count for operation.
        countOps++;
        countOpsRecursion (num / 2)        
    }

    //Check if number is odd
    if( num % 2 !== 0){
        //Increment count for operation
        countOps++;
        countOpsRecursion (num * 3 + 1)
        
    }    

    //Expected output: Number inserted and the number of operations it took to reach one.
    return `For ${num} it takes about ${countOps} operations to get to one.`
}

// Method using while loop
function countOpsWhileLoop (num) {
    let numberOfOps = 0
    let intialNumber = num;
    //Check if input is actually a number and if number is greater than 0.
    if (typeof(num) !== "number" || num < 0 ) return "Oops, seems we have a problem. Please use a NUMBER greater than 0";

    //Check if number is one.
    if (num === 1) return numberOfOps;
       
    while (num !== 1){
        //Check if number is even.
        if(num % 2 === 0 ){
            //Increment count for operation.
            numberOfOps++;

            num = num / 2;
        }
        //Check if number is odd.
        else
        if( num % 2 !== 0){
            //Increment count for operation
            numberOfOps++;
            num = num * 3 + 1;
            
        }
    }
    
    //Expected output: Number inserted and the number of operations it took to reach one.
    return `For ${intialNumber} it takes about ${numberOfOps} operations to get to one.`  
    
}

//Tests:

//Function using a recursive approach:

// console.log(countOpsRecursion(1));
//Expected output: For 1 it takes about 0 operations to get to one.

// console.log(countOpsRecursion(16));
//Expected output: For 16 it takes about 4 operations to get to one.

// console.log(countOpsRecursion(143254655879543987));
//Expected output: For 143254655879543987 it takes about 246 operations to get to one.

// console.log(countOpsRecursion("1223"));
//Expected output: Oops, seems we have a problem. Please use a NUMBER greater than 0

// console.log(countOpsRecursion(" "));
//Expected output: Oops, seems we have a problem. Please use a NUMBER greater than 0

// console.log(countOpsRecursion("abc"));
//Expected output: Oops, seems we have a problem. Please use a NUMBER greater than 0

//Function using a while loop:

// console.log(countOpsWhileLoop(1));
//Expected output: For 1 it takes about 0 operations to get to one.

console.log(countOpsWhileLoop(9));
//Expected output: For 16 it takes about 4 operations to get to one.

// console.log(countOpsWhileLoop(143254655879543987));
//Expected output: For 143254655879543987 it takes about 246 operations to get to one.

// console.log(countOpsWhileLoop("1223"));
//Expected output: Oops, seems we have a problem. Please use a NUMBER greater than 0

// console.log(countOpsWhileLoop(" "));
//Expected output: Oops, seems we have a problem. Please use a NUMBER greater than 0

// console.log(countOpsWhileLoop("abc"));
//Expected output: Oops, seems we have a problem. Please use a NUMBER greater than 0

