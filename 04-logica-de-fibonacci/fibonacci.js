// JavaScript source code
let numA = 0;
let numB = 1;
let numC = 0;

let fibonacci = "";

fibonacci += numA + " " + numB;

for( i=1; i<=15;i++ )
{
 numC = numA + numB;
 fibonacci += " " + numC
 numA = numB
 numB = numC
};

console.log(fibonacci);