/* Esses dados quando estiverem trabalhando de forma profissional nunca irá usar SQL na parte Front-end, sempre será alguma estrutura genérica, tipo: JSON, XML,CSV, TXT...
 */

// vetor de objetos
let alunos = [
    {ra:123, nome:'Bruno', curso:'BSI'},
    {ra:456, nome:'Gabriel', curso:'ADS'},
    {ra:789, nome:'Daniel', curso:'BCC'},
    {ra:321, nome:'Maria Júlia', curso:'ADS'},
    {ra:654, nome:'Ellen', curso:'ADS'},
]

// Vai carregar os dados do vetor de objetos e criar a tabela HTML
function carregarTabela(dados){
    //vincular uma variável JS ao objeto tabela do HTML
    let tabela = document.querySelector('#tabela');

    //criar a linha do cabeçalho da tabela
    let trCabecalho = document.createElement('tr');
    // criar as colunas da linha do cabeçalho
    let thRA = document.createElement('th');
    let thNome = document.createElement('th');
    let thCurso = document.createElement('th');
    // colocar texto dentro de cada coluna do cabeçalho
    thRA.innerHTML = 'RA';
    thNome.innerHTML = 'Nome do Aluno';
    thCurso.innerHTML = 'Curso do Aluno';
    // adiciona as colunas criadas no elemento da linha
    trCabecalho.appendChild(thRA);
    trCabecalho.appendChild(thNome);
    trCabecalho.appendChild(thCurso);
    // adicinar a linha na tabela
    tabela.appendChild(trCabecalho);

    //percorrer o vetor com dados dos alunos e carregar nas linhas da tabela
    for(let i=0; i<dados.length; i++){
        //criar a linha da tabela
        let trCorpo = document.createElement('tr');
        // criar as colunas da linha
        let tdRA = document.createElement('td');
        let tdNome = document.createElement('td');
        let tdCurso = document.createElement('td');
        // carregar os dados do vetor nas colunas
        tdRA.innerHTML = dados[i].ra;
        tdNome.innerHTML = dados[i].nome;
        tdCurso.innerHTML = dados[i].curso;
        // adicionar as colunas na linha
        trCorpo.appendChild(tdRA);
        trCorpo.appendChild(tdNome);
        trCorpo.appendChild(tdCurso);
        // adicionar a linha na tabela
        tabela.appendChild(trCorpo);

    }

}

function adicionarItem(){
    // pegar os valores digitados no formulário
    let vRA = document.querySelector('#ra').value;
    let vNome = document.querySelector('#name').value;
    let vCurso = document.querySelector('#course').value;

    // salvar o novo aluno no vetor de objetos
    alunos.push({ra:vRA, nome:vNome, curso:vCurso});
    //esvaziar o conteúdo da tabela
    //document.querySelector('#tabela').innerHTML= '';
    //carregarTabela(alunos);
    carregarTabela2(alunos);   
}

//Vamos usar Literal String ou Template String
function carregarTabela2(dados){
    //vincular uma variável JS ao objeto tabela do HTML
    let tabela = document.querySelector('#tabela');

    // com Literal String vamos usar string com crase para colocar os comandos HTML e CSS
    let html = `<tr>
                   <th> RA </th>  
                   <th>Nome do Aluno</th>
                   <th>Curso do Aluno</th>
                </tr>`;
    // percorrer o vetor alunos, mas agora o for each
    for (let aluno of dados) {
        html += `<tr>
                    <td>${aluno.ra}</td>
                    <td>${aluno.nome}</td>
                    <td>${aluno.curso}</td>
                 </tr>`;
    }
    //alert(html);
    tabela.innerHTML = html;

}



//carregarTabela(alunos);