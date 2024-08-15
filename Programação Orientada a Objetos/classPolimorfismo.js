class Pessoa {
    constructor (nome, anoNascimento, profissao){
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.profissao = profissao;
    };
    ola(){
        return 'Olá da ' + this.nome;
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
    ola(){
        super.ola();
        return 'Olá do aluno ';
    }
};  

const pessoa = new Pessoa('Carla',1958,'Professora');

const aluno = new Estudante('vitor',2003,1454477);

console.log(pessoa.ola());
console.log(aluno.ola());
