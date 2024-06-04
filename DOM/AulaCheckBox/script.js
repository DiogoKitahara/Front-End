var dados = [
    {id:1, nome:'Yuri Marques'},
    {id:2, nome:'Diogo Kitahara'},
    {id:3, nome:'Maria Júlia Orbolato'}
];

function montarTabela(){
    let tbody = document.querySelector('#tb-body');
    let html = '';
    /* DATA ATTRIBUTES (ou atributo de dados) data- */
    for (let item of dados){
        html+=`<tr>
                  <td><input type="checkbox" 
                             data-id="${item.id}"/></td>
                  <td>${item.nome}</td>
                  <td><a class="btnExcluir" onclick="excluirItem(${item.id})">&#9746;</a></td>
               </tr>`
    }
    tbody.innerHTML = html;
}

function adicionarItem(){
    let nomeInput = document.querySelector('#txt-texto');
    let novoItem = {id: new Date().getTime(),
                    nome: nomeInput.value }
    if (nomeInput.value !=''){                
        dados.push(novoItem);
        montarTabela();
        nomeInput.value = '';
        nomeInput.focus();
    }
}

function excluirItem(idDel){
    let listaAux = []
    for (let i=0; i<dados.length;i++){
        if(dados[i].id != idDel)
            listaAux.push(dados[i]);
    }
    dados = listaAux;
    montarTabela();
}

function excluirSelecionados(){
    // vai pegar os chackbox que tem o data attribute associado
   let listaCheckbox=document.querySelectorAll('[data-id]');
   if (listaCheckbox.length>0){
        for (let ch of listaCheckbox){
            if (ch.checked ==true)
                excluirItem(ch.dataset.id); // o valor associado a ele com a propriedade data-id 
        } 
    }
    else
       alert('Não há itens para serem excluídos!!'); 
}

function selecionaTodos(){
  let listaCheckbox=document.querySelectorAll('[data-id]');
  let ckPai = document.querySelector('#ckTodos');
  for (let ch of listaCheckbox){
    ch.checked = ckPai.checked;
  }
}

document.addEventListener('DOMContentLoaded',
       function(){
          montarTabela();

          let btnAdd = document.querySelector('#btn-add');
          btnAdd.addEventListener('click',adicionarItem,false);

          let btnSelec = document.querySelector('#btnExcluirSelecionados');
          btnSelec.addEventListener('click',excluirSelecionados,false);

          let ckPai = document.querySelector('#ckTodos');
          ckPai.addEventListener('click',selecionaTodos,false); 

       }
,false);