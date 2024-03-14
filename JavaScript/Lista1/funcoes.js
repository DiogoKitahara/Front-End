function somarExpressao() {
    var a = 5, b = 3, c = 10, d = "20";
    d = parseInt(d);
    document.write("1) a + b + c + d = ", a + b + c + d, "<br>");
}

function concatenar() {
    var nome = prompt("Digite seu nome: ");
    var sobrenome = prompt("Digite seu sobrenome: ");
    document.write("2) ", nome + sobrenome, "<br>");
}

function parOuImpar() {
    var boolean, numero = prompt("Digite um numero para verificar se é par ou ímpar ");
    document.write("3) É par? ");
    if (numero % 2 == 0) {
        boolean = true;
    }
    else {
        boolean = false;
    }
    document.write(boolean, "<br>");
}

function operacaoAritmetica() {
    var operacao = prompt("Digite a operação desejada[+ - * /]: ");
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
    document.write("4) ", resultado, "<br>");
}

function jogoDeAdvinhar() {
    var nome = prompt("Nome do jogador: ");
    var numero = Math.random() * 21;
    numero = parseInt(numero);
    var tentativa, contador = 6;
    while (contador > 0) {
        tentativa = prompt("Numero entre 1 e 20. Tentativas restantes " + contador);
        if (tentativa == numero) {
            document.write("5) Parabéns ", nome, " você acertou!!! <br>");
            return;
        }
        contador--;
    }
    document.write("5) Infelizmente acabaram as tentativas, o número era ", numero, "!<br>");
}