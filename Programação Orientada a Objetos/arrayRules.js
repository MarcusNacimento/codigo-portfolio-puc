array = [0,2,3,5,6,7,8]

regraimpar = (item) => item%2 != 0


console.log("Há algum número impar? " ,  array.some(regraimpar));

console.log("Todos são impar? " ,  array.every(regraimpar));

console.log("Há algum número impar? " ,  array.filter(regraimpar));