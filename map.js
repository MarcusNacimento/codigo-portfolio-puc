// TDD - test Drivel Development
var novoMapa = new Map();

// Map sempre tem uma chave e um valor
// 11/11/2011 às 11 da noite;

class HistoryMap{

}

// Ele serve basicamente para não criar multiplas requisições quando o id for igual,
// Ele sobrescreve o último item que tiver no histórico com aquela URL e evita duplicata
// tmb pode chamar um dinâmicamente dependendo da regra da empresa;

novoMapa.set('11/11/11/2011 - 23:30 - URL', { title : 'Titulo do Site', url: ' URL Sozinha'});
// novoMapa.set('11/11/11/2011 - 23:30 - URL', {});
// novoMapa.set('11/11/11/2011 - 23:30 - URL', {});
// novoMapa.set('11/11/11/2011 - 23:30 - URL', {});
// novoMapa.set('11/11/11/2011 - 23:30 - URL', {});
// novoMapa.set('11/11/11/2011 - 23:30 - URL', {});
novoMapa.set('11/11/11/2011 - 23:31 - URL', {});

var resultado = novoMapa.get('11/11/11/2011 - 23:30 - URL');
console.log(resultado)
