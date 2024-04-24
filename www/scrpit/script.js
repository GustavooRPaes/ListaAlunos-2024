var text
var palavras = []

var mencao = []

document.getElementById('btnReceptor').addEventListener('click', function(){
    var contadorMB = 0
    var contadorB = 0
    var contadorR = 0
    var contadorI = 0
    document.querySelectorAll('.select').forEach(function(item){
        var option = item.options[item.selectedIndex].text
        switch(option){
            case "MB":
                menc = document.getElementById('Mencao4').value
                break
            case 'B':
                menc = document.getElementById('Mencao3').value
                break
            case 'R':
                menc = document.getElementById('Mencao2').value
                break
            case 'I':
                menc = document.getElementById('Mencao1').value
                break;
        }
        mencao.push(menc)
    })
})

function receba(){
    text = document.getElementById ('aluno1').value
    
    palavras.push(text)
    
    
    alert("Deu certo")    
}

function Listar()
{
    document.querySelector('#referencas').innerHTML = ""; //  esvazia a div
    document.querySelector('#referencas').appendChild(list(palavras));
    document.querySelector('#referencas2').appendChild(list(mencao));
}

function list(array) {
    //Cria a lista do elemento
    var listElement = document.createElement("ul");
  
    //listElement.setAttribute('id', 'myList');
  
    for (var i = 0; i < array.length; i++) {
      //Cria a lista de item
      var itemElement = document.createElement('li');
  
      //Defini seu conteudo
      itemElement.appendChild(document.createTextNode(array[i]));
  
      //Adiciona um item a lista
      listElement.appendChild(itemElement);
    }
    return listElement;
  }

function Excluir()
{
    palavras.pop()

    Listar()
}

function ExcluirPrimeiro()
{
    palavras.shift(text)
}

function AdicionarPrimeiro()
{
    palavras.unshift(text)
}