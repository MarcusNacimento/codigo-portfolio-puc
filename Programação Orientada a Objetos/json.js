let player = {
    name: 'Kobe',
    age: 23,
    gender: 'male',
    isAdmin: false,
    course: ['html','css','php'],
    wife: null
}


let json = JSON.stringify(player); //Transforma em json

console.log(json)

let text = JSON.parse(json); // Destransorma do Json 

console.log(text)

console.log(text.course[4] ?? "Propiedade inexistente")
