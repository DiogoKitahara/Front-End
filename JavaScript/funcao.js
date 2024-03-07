function tabuada() {
    do {
    var numero = prompt("Digite um número de 1 a 10");
    } while (numero < 1 || numero > 10);
    document.write("<table>");
    for (var i = 0; i <= 10; i++) {
        document.write("<tr><td>", numero, "</td><td> x </td><td>", i, "</td><td> = </td><td>", i * numero, "</td></tr>");
    }
    document.write("</table");
}