const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function adicionarNovaTarefa(){

    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    }
        )

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas(){

    let novaLi = ''

    //['comprar cafe', 'estudar']

    minhaListaDeItens.forEach((tarefa, posicao) => {

        novaLi = novaLi +`

        <li class="task">
            <img src="img/checked.png" alt="check-na-tarefa">
            <p>${tarefa}</p>
            <img src="img/trash.png" alt="lixeira" onclick="deletarItem(${posicao})">
        </li>
        `
    })

    listaCompleta.innerHTML = novaLi

}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao,1)
    
    mostrarTarefas()
}

function concluirTarefa(){

}

button.addEventListener('click',adicionarNovaTarefa)