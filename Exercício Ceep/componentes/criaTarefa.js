import { carregaTarefa } from './carregaTarefa.js';
import BotaoConclui from './concluiTarefa.js';
import BotaoDeleta from './deletaTarefa.js';
 

export const handleNovoItem = (evento) => { //Dividindo uma função que antes era uma só em 2 diferentes, fazendo com que uma cuide da criação e outra da exibição
    evento.preventDefault();

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; //Constante que pega os itens armazenados no setItem do localStorage / JSON.parse serve para transformar a string em objeto novamente / O || [] serve para dizer que se não tiver itens para pegar ele inicializa vazio para ser preenchido depois

    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendario = document.querySelector("[data-form-date]"); //Constante que chama o input de data do HTML pelo Data Attribute
    const data = moment(calendario.value); //Constante que pega o valor gerado pela constante calendario
    const horario = data.format("HH:mm"); //Passando em qual formato o horário das tarefas deve ser exibido

    const dataFormatada = data.format("DD/MM/YYYY"); //Usando o .format para formatar a exibição da data no padrão que queremos
    const concluida = false; //Constante que informará se a tarefa foi concluída ou não
    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }

    const tarefasAtualizadas = [... tarefas, dados]; //Const que adiciona os dados inseridos pelo usuário e os coloca no array que antes era apenas vazio

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas)); //Chamando a API para armazenamento de dados / JSON.stringify serve para transformar objetos em string, afinal o setItem só aceita strings como parâmetros

    input.value = " ";

    carregaTarefa(); //Chamando a função logo após a inserção dos novos dados do usuário
}

export const Tarefa = ({valor, horario, concluida}, id) => {

    const tarefa = document.createElement('li');
    const conteudo = `<p class="content">${horario} * ${valor}</p>`; //Passando a exibição do horário junto da tarefa

    if(concluida){ //Se concluida for true
        tarefa.classList.add('done'); //Adicione o estilo "done"
    }
    tarefa.classList.add('task'); //Se não, adicione o estilo "task"

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui(carregaTarefa, id));
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id));

    return tarefa;
}