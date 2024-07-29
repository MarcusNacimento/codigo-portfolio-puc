const empregado = {
    SalarioFixo: 3000,
    QntHoras : 20,
    HorasExtras : 100,
    CalculaSalario: function(){
        return this.SalarioFixo + (this.QntHoras * this.HorasExtras);
    }
    };
    console.log(empregado.CalculaSalario());
