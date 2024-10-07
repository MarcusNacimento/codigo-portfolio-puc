const MyFirstPromise = new Promise ((resolve, reject) =>{
    setTimeout(() => {
        resolve("Sucesso!");
    },2000 );
});

let IfSucceed = (sucessMessage) => {
    console.log(`Finalizado! ${sucessMessage}`)
}

MyFirstPromise.then(IfSucceed);

console.log("Fim do programa");