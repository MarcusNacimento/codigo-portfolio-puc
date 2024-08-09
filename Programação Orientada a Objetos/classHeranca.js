class Pessoa {
    constructor (nome, anoNascimento, profissao){
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.profissao = profissao;
    };
    ola(){
        return 'Olá ' + this.nome;
    };
    calculaIdade(){
        return new Date().getFullYear() - this.anoNascimento;
    };
};

class Estudante extends Pessoa {
    constructor(nome, anoNascimento, matricula){
        super(nome, anoNascimento, 'Estudante');
        this.matricula = matricula;
    };
};

class Professor extends Pessoa {
    constructor(nome,anoNascimento, titulacao){
        super(nome, anoNascimento, 'Professor')
        this.titulacao = titulacao;
    }
}

const prof = new Professor(['Paula'], 1980, 'Doutora');

const aluno = new Estudante(['Alex da Silva'], 2000, 202490);

console.log(aluno);

console.log(prof);

console.log(aluno.ola() + " Você tem: " + aluno.calculaIdade() + " anos de idade");