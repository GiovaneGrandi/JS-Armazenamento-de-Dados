const concluirTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")); //Pegando as tarefas do localStorage e passando-as de volta para objetos

    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida; //Mudando o estado das tarefas de acordo com o aperto do botão / O ! é um operador de negação
    localStorage.setItem("tarefas", JSON.stringify(tarefasCadastradas)); //E então retornando o novo estado das tarefas ao localStorage em forma de string

    atualiza();
}

const BotaoConclui = (atualiza, id) => { 
    const botaoConclui = document.createElement('button');
    
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';

    botaoConclui.addEventListener('click', ()=> concluirTarefa(atualiza, id));

    return botaoConclui;

}

export default BotaoConclui;

