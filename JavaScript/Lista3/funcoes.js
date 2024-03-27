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
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    n3 = parseInt(n3);
    var numeros = [n1, n2, n3], aux;
    for(var i = 0; i < 3; i++){
        for(var j = i + 1; j < 3; j++){
            if(numeros[i] > numeros[j]){
                aux = numeros[i];
                numeros[i] = numeros[j];
                numeros[j] = aux;
            }
        }
    }
    numero_ordem.value = numeros;
}

//87 101 6