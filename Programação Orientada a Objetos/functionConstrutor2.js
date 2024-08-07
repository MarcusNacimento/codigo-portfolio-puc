function Pessoa(nome,anoNascimento,profissao) {
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.profissao = profissao;
    this.CalculaIdade = function(){
        return new Date().getFullYear() - this.anoNascimento;
    };
};

const pessoa1 = new Pessoa('Marcelo',2000,'leitor');

console.log (pessoa1);