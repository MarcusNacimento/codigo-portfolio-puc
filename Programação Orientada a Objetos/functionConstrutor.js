function Pessoa() {
    this.nome = 'Pedro';
    this.anoNascimento = 1999;
    this.profissao = 'Estudante';
    this.CalculaIdade = function(){
        return new Date().getFullYear() - this.anoNascimento;
    };
};

const pessoa1 = new Pessoa();

const pessoa2 = new Pessoa();
pessoa2.anoNascimento = 2006;

const pessoa3 = new Pessoa();
pessoa3.anoNascimento = 1990;

console.log (pessoa1.CalculaIdade() + " " +  pessoa2.CalculaIdade() + " " +  pessoa3.CalculaIdade());