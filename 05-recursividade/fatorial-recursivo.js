function fatorialrecursivo(n){
    if(n ===1 || n ===0)
        return 1;
    return n * fatorialrecursivo(n-1);

}

console.log(fatorialrecursivo(5));