let nomecompleto = ['Pedro', 'Nascimento', ' da Silva'];

var [primeiroN, segundoN, terceiroN] = nomecompleto;

console.log("O primeiro nome é " + primeiroN)
console.log("O segundo nome é: " + segundoN)
console.log("O terceiro nome é: "+ terceiroN)

var [primeiroNome,...restante] = nomecompleto;

console.log("O primeiro nome é: " + primeiroNome)

console.log("O restante é : "+ restante.toString().replace(',',''))



var [soprimeiro , , soterceiro] = nomecompleto; //ignora dado que n foi atribuido

console.log(soprimeiro + soterceiro);