function removerVogais() {
    var palavra = prompt("Digite uma palavra: ");
    var palavra_sem_vogais = palavra.replace(/[aeiou]/gi, '');
    document.write(palavra_sem_vogais);
}

function inverterPalavra () {
    var palavra = prompt("Digite uma palavra: ");
    var palavra_final = [];
    for(var i = 1; i <= palavra.length; i++) {
        palavra_final[i -1] = palavra[palavra.length - i];
    }
    document.write(palavra_final.join(""));
}

function inverterFrase() {
    var frase = prompt("Digite uma frase: ");
    // Divide a frase em palavras usando o espaço como delimitador
    const palavras = frase.split(" ");
    // Inverte a ordem das palavras
    const palavrasInvertidas = palavras.reverse();
    // Junta as palavras invertidas para formar a nova frase
    const fraseInvertida = palavrasInvertidas.join(" ");
    document.write(fraseInvertida);
}

function nascimento() {
    data = new Date();
    var nome = prompt("Nome: ");
    var idade = prompt("Idade: ");
    var ano_nascimento = data.getFullYear() - idade;
    document.write(nome, " nasceu no ano ", ano_nascimento);
}

function armazenarNumeros() {
    // Criar vetor
    var vetor = [], igual = 0;
    // Loop para verificar se o numero ja existe
    while(igual == 0) {
        var numero = parseInt(prompt("Digite um número: "));
        for(var i = 0; i < vetor.length; i++) {
            // Se existir avisar o usuario e nao fazer a insercao
            if (numero == vetor[i]) {
                document.write("Este numero já está no vetor.");
                igual = 1;
            }
        }
        if (igual != 1) {
            vetor.length++;
            vetor[vetor.length -1] = numero;
        }
    }
    for (var i = 0; i < vetor.length; i++ ){
        document.write("<br>", vetor[i], " ");
    }
}

function salarioLiquido() {
    var salario_bruto = parseFloat(prompt("Salário bruto: "));
    var desconto1 = 0, salario_liquido;
    var desconto2 = inss(salario_bruto);
    if(salario_bruto <= 2259.20) {
        desconto1 = 0;
    }
    else if ( salario_bruto > 2259.20 && salario_bruto <= 2826.65) {
        desconto1 = salario_bruto * 0.075 + 169.44;
    }
    else if (salario_bruto <= 3751.05) {
        desconto1 = salario_bruto * 0.15 + 381.44;
    }
    else if (salario_bruto <= 4664.68) {
        desconto1 = salario_bruto * 0.225 + 662.77;
    }    
    else {
        desconto1 = salario_bruto * 0.275 + 896.00;
    }
    salario_liquido = salario_bruto - desconto1 - desconto2;
    document.write("Salário líquido: ", salario_liquido);
}

function inss(salario_bruto) {
    var desconto;
    if(salario_bruto > 0 && salario_bruto <= 1412.00) {
        desconto = salario_bruto * 0.075;
    }
    else if (salario_bruto <= 2666.68) {
        desconto = salario_bruto * 0.09 + 21.18;
    }
    else if (salario_bruto <= 4000.03) {
        desconto = salario_bruto * 0.12 + 101.18;
    }
    else {
        desconto = salario_bruto * 0.14 + 181.18;
    }
    return desconto;
}