var a = []
a[0] = Math.random()
a[1] = Math.random()
a[9] = Math.random()

console.log(a.length)
console.log(" -for with in- ")
console.log("-=========-")

for (let val in a){
    console.log("=>" + val)
    console.log("-=-=-=-=-=-\n") // Lista somente valores armazenados
}

console.log(" -for with in- ")
console.log("-=========-")

for (let val of a){
    console.log("=>" + val)
    console.log("-=-=-=-=-=-\n") // Lista todos os valores dentro do loop, mesmo valores indefinidos
}

console.log(" -for with (;;))- ")
console.log("-=========-")
for(let i=0;i<a.length;i++){
    console.log(" -->"+i+": "+a[i] ) // Definindo valores no loop, ele lista igualmente indefinidos
}