// Assignment no 04

// Table 
let table = parseInt(prompt("Choose One Number"))
for ( let i = 1; i<=10  ; i++ ){
    let result = table*i
    console.log(`${table} X ${i} = ${result}`);
}

// Factorial of 5
 let number1 = 5;
let factorial = 1;

while (number1 > 0) {
  factorial *= number1;
  number1--;
}

console.log( "Fctorial of 5 =" ,factorial);
