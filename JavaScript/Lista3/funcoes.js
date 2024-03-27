function calcularMedia(p1, p2) {
    var media = ((p1 * 4) + (p2 * 6)) / 10;
    media_aluno.value = media;
}

function calcularSituacao(p1, p2, falta) { 
    var m = ((p1 * 4) + (p2 * 6)) / 10;
    if (m >= 6.0 && falta <= 16) {
        situacao_aluno.value = "Aprovado";
    }
    else {
        situacao_aluno.value = "Reprovado";
    }
}

function carros(custo) {
    custo = parseFloat(custo);
    valor_final.value = custo + (custo * 0.3);
}

function ordenar(n1, n2, n3) {
    var numeros = [n1, n2, n3], aux;
    if (numeros[0] > numeros[2]) {
        aux = numeros[2];
        numeros[2] = numeros[0];
        numeros[0] = aux;
    }
    if (numeros[0] > numeros[1]) {
        aux = numeros[1];
        numeros[1] = numeros[0];
        numeros[0] = aux;
    }
    if (numeros[1] > numeros[2]) {
        aux = numeros[2];
        numeros[2] = numeros[1];
        numeros[1] = aux;
    }
    numero_ordem.value = numeros;
}