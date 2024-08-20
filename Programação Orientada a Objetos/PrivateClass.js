function Estagiario(numeroContratoParam, numEx){
let numeroContrato = numeroContratoParam; //não terá acesso
this.numEx = numEx; //terá acesso
}

const estagiario1 = new Estagiario(10,1);
console.log(estagiario1.numEx)