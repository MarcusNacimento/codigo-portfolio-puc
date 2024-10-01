function FatorialRecursivo(n) {
    if (n < 0) {
        return "Fatorial não existe para números negativos";
    }
    if (n === 1 || n === 0) {
        return 1;
    }
    return n * FatorialRecursivo(n - 1);
}

console.log(FatorialRecursivo(4)); 