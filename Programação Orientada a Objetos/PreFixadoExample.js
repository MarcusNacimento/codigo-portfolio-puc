class Pessoa {
    constructor(nome, anoNascimento, profissao) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.profissao = profissao;
        this.calculaIdade = function () {
            return new Date().getFullYear() - this.anoNascimento;
        }
    };
    ola() {
        return 'olá ' + this.nome;
    };
};

class Estudante extends Pessoa {
    #matricula; // está privada por identificador
    constructor(nome, anoNascimento, profissao, matricula) {
        super(nome, anoNascimento, profissao);
        this.#matricula = matricula;
        this.#ola();
    };
    #ola(){ //está privada por identificador
        super.ola();
        return 'olá do aluno';
    }
};

const estudante1 = new Estudante('Jorge', 2000, 'Estudante', 15236)
console.log(estudante1);