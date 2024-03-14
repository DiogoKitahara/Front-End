function removerVogais() {
    var palavra = prompt("Digite uma palavra: ");
    var palavra_sem_vogais = palavra.replace(/[aeiou]/gi, '');
    document.write(palavra_sem_vogais);
}

function inverterPalavra () {
    var palavra = prompt("Digite uma palavra: ");
    var palavra_final = palavra;
    for(var i = 1; i <= palavra.length; i++) {
        palavra_final[i -1] = palavra[palavra.length - i];
    }
    document.write(palavra_final);
}

function nascimento() {
    data = new Date();
    var nome = prompt("Nome: ");
    var idade = prompt("Idade: ");
    document.write(data);
}