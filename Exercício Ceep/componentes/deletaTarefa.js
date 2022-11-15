const deletarTarefa = (atualiza, id) => {
    const index = id; //Passando o id através da const index 
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas"));

    tarefasCadastradas.splice(index, 1); //Usando o splice para remover apenas a tarefa desejada, mostrando que o splice começará e terminará na mesma tarefa
    localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas)); //devolvendo as tarefas restantes para o localStorage em formato de string

    atualiza();
}

const BotaoDeleta = (atualiza, id) => { 
    const botaoDeleta = document.createElement('button');

    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click', ()=> deletarTarefa(atualiza, id));

    return botaoDeleta;
}

export default BotaoDeleta;