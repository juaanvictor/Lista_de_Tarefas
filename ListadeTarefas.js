let input = document.getElementById('InputTarefa');
let BtnAdd = document.getElementById('BtnAdd');
let main = document.getElementById('AreaLista');
let Contador = 0;

function AddTarefa (){
    //Pegar o valor digitado no input
    let ValorInput = input.value;
    //Validação para não deixar passar um valor vazio
    if ((ValorInput !== "") && (ValorInput !== null) && (ValorInput !== undefined)){

        ++Contador;

        let NovoItem = `<div id="${Contador}" class="Item">
            <div class="Icone" onclick="MarcarTarefa(${Contador})">
                <i id="icone_${Contador}" class="mdi mdi-circle-outline"></i>
            </div>

            <div class="Nome" onclick="MarcarTarefa(${Contador})">
                ${ValorInput}
            </div>

            <div class="Botao">
                <button class="Delete" onclick="Deletar(${Contador})"><i class="mdi mdi-delete"> Deletar</i></button>
            </div>
        </div>`;
        //Usando a variável do cifrão, você pode adicionar variaves dentro de um comando entre crases.

        main.innerHTML += NovoItem;
        //Esse comandou adiconou o novo item a tela (main).

        input.value = "";
        input.focus();
        //Esses dois comandos zeram o que estava escrito no input e faz ele continuar em foco para o usuário escrever.

    }
}

function Deletar(id){
    var Tarefa = document.getElementById(id);
    Tarefa.remove();
}

function MarcarTarefa (id){
    var Item = document.getElementById(id);
    var Classe = Item.getAttribute('class');

    if (Classe == "Item"){
        Item.classList.add('Clicado');

        var icone = document.getElementById('icone_'+id);

        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        Item.parentNode.appendChild(Item);
    }else {
        Item.classList.remove('Clicado');

        var icone = document.getElementById('icone_'+id);

        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

input.addEventListener ("keyup", function(event) {
    //Se o usuário teclar enter (13)
    if (event.keyCode === 13){
        event.preventDefault();
        BtnAdd.click();
    }
})