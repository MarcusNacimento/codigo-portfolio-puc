class Pessoa {
    constructor (nome, anoNascimento){
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    };
    ola(){
        return 'olá';
    };
    calculaIdade(){
        return new Date().getFullYear() - this.anoNascimento;
    };
};
const pessoa = new Pessoa('Pedro',2000);

console.log(pessoa.ola() + " " + pessoa.nome + " você nasceu em " + pessoa.anoNascimento + " e tem "+ pessoa.calculaIdade() + " anos ");