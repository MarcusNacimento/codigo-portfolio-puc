class Pessoa {
    constructor(nome, anoNascimento, profissao) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.profissao = profissao;
    };
    ola() {
        return 'Olá' + this.nome;
    };
    calculaIdade() {
        return new Date().getFullYear - this.anoNascimento;
    };

};

class Estudante extends Pessoa {
    nota = [];
    constructor(nome, anoNascimento, matricula) {
        super(nome, anoNascimento, 'Estudante');
        this.matricula = matricula;
    };
};

class Nota {
    #grau;
    constructor(disciplina, grau) {
        this.disciplina = disciplina;
        this.#grau = grau;
    };
    setGrau(valor) {
        this.#grau = valor;
    };
    getGrau() {
        return this.#grau;
    }
};


const aluno1 = new Estudante('Pedro', 1999, 151515);
const aluno2 = new Estudante('Alice', 2000, 484894);

aluno1.nota = [new Nota('Matemática', 9), new Nota('Português', 6), new Nota('Física', 8)];
aluno2.nota = [new Nota('Matemática', 8), new Nota('Português', 9), new Nota('Física', 5)];

aluno2.nota[0].setGrau(1);
aluno2.nota[0].getGrau();

console.log(aluno1);
console.log(aluno2);