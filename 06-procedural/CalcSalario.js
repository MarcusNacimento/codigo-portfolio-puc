let horaExtra = 100;
let QntHoras = 20;
let SalarioFixo = 3000;

function CalculaSalario(QntHoras, horaExtra){
    return SalarioFixo +(QntHoras * horaExtra);
}
let total = CalculaSalario(QntHoras,horaExtra);

console.log(total);