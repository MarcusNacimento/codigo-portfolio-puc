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
    getMatricula(){ // método para pegar a matricula que está privada
        return  this.#matricula;
    }
};

const estudante1 = new Estudante('Jorge', 2000, 'Estudante', {numero: 1212121, modalidade : 'Regular'})
let pegamatricula = estudante1.getMatricula();
pegamatricula.modalidade = 'nova'; //a privação somente é na hora da visualização
console.log(pegamatricula);
console.log(estudante1);