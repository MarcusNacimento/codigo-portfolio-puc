function calculaSalario (salarioBase, valorHoraExtra, qntHoraExtra){
    return {
    salarioBase,
    valorHoraExtra,
    qntHoraExtra,
    calculaExtra : function(){
            return this.salarioBase + (this.valorHoraExtra * this.qntHoraExtra)
        }
};
};
const funcionario1 = calculaSalario(5000, 100,30);

const funcionario2 = calculaSalario(10000, 100, 5);

const funcionario3 = calculaSalario(2500, 70 , 10);


console.log("Funcionário 1 tem o salário de: " + funcionario1.calculaExtra() + ", Funcionário 2 de: " +
funcionario2.calculaExtra()+ " e funcionário 3 de: " + funcionario3.calculaExtra());