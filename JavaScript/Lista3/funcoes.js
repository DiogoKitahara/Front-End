function calcularMedia(p1, p2) {
    var media = ((p1 * 4) + (p2 * 6)) / 10;
    media_aluno.value = media;
    return media;
}

function calcularSituacao(p1, p2, falta) {
    var m = calcularMedia(p1, p2);
    if (m >= 6.0 && falta <= 16) {
        situacao_aluno.value = 1;
    }
    else {
        situacao_aluno.value = 2;
    }
}

function carros(custo) {
    valor_final.value = custo + (custo * 0.3);
}

function ordenar(n1, n2, n3) {

}