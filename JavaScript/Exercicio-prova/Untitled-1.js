function validarSenha(senha) {
    var tamanho = senha.length;
    var minusculo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var maiusculo = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var numero = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var cmin = 0, cmai = 0, cnum = 0, esp = 0, cminn, cmaii, cnumm;
    for (var i = 0; i < tamanho; i++) {
        cminn = cmin;
        cmaii = cmai;
        cnumm = cnum;
        for (var j = 0; j < 26; j++) {
            if (senha[i] == minusculo[j]) {
                cmin++;
            }
        }
        for (var j = 0; j < 26; j++) {
            if (senha[i] == maiusculo[j]) {
                cmai++;
            }
        }
        for (var j = 0; j < 10; j++) {
            if (senha[i] == numero[j]) {
                cnum++;
            }
        }
        if (cminn == cmin && cmai == cmaii && cnum == cnumm) {
            esp++;
        }
    }
    if (cmin > 0 && cmai > 0 && esp > 0 && tamanho >= 8) {
        alert("V");
    }
    else {
        alert("F");
    }
}