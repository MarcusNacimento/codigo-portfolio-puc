function Pessoa (nome, anoNascimento ){
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.calculaIdade = function(){
        return new Date().getFullYear() - this.anoNascimento;
    }
};

const pessoa1 = new Pessoa('jorge', 2000);
const pessoa2 = new Pessoa('Pedro',1995);


console.log(pessoa1.calculaIdade() +" "+ pessoa2.calculaIdade());

Pessoa.prototype.Saudar = function (){
    return "Olá" ;
};

console.log(pessoa1.Saudar());
console.log(pessoa2.Saudar());
