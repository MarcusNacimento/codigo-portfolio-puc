class validaCPF{
    static Validar(tamanho){
        if (tamanho == 11){
            return true;
        }
        return false;

    }
}

console.log(validaCPF.Validar('88484868464',11));