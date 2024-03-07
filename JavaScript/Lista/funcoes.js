function somarExpressao() {
    var a = 5, b = 3, c = 10, d = "20";
    d = parseInt(d);
    document.write(a + b + c + d);
}

function concatenar() {
    var nome = prompt("Digite seu nome: ");
    var sobrenome = prompt("Digite seu sobrenome: ");
    document.write(nome + sobrenome);
}

function parOuImpar() {
    var boolean, numero = prompt("Digite um numero");
    document.write("É par? <br>");
    if (numero % 2 == 0) {
        boolean = true;
    }
    else {
        boolean = false;
    }
    document.write(boolean);
}

function operacaoAritmetica() {
    var operacao = prompt("Digite a operação desejada: ");
    var n1 = parseFloat(prompt("Digite o primeiro número: "));
    var n2 = parseFloat(prompt("Digite o segundo número: "));
    var resultado;
    if (operacao == '+') {
        resultado = n1 + n2;
    }
    else if (operacao == '-') {
        resultado = n1 - n2;
    }
    else if (operacao == '*') {
        resultado = n1 * n2;
    }
    else if (operacao == '/') {
        resultado = n1 / n2;
    }
    document.write(resultado);
}

function jogoDeAdvinhar() {
    var nome = prompt("Nome do jogador: ");
    var numero = Math.random() * 21;
    numero = parseInt(numero);
    var tentativa, contador = 0;
    while (contador < 6) {
        tentativa = prompt("Tente acertar o número gerado aleatoriamente entre 1 e 20");
        if (tentativa == numero) {
            document.write("Parabéns ", nome, " você acertou!!!");
            return;
        }
        contador++;
    }
    document.write("Infelizmente acabaram as tentativas, o número era ", numero, "!");
}