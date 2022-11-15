import { Tarefa } from "./criaTarefa.js"

export const criaData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    const dataMoment = moment(data, "DD/MM/YYYY");
    const dataTopo = document.createElement("li"); //Criando uma li para a data no HTML
    const conteudo = `<p class="content-data">${dataMoment.format("DD/MM/YYYY")}</p>`; //Criando a tag P que vai receber o contéudo da data inserido pelo usuário

    dataTopo.innerHTML = conteudo; //Passando o contéudo para dentro da li criada no HTML

    tarefas.forEach((tarefa, id) => {
        const dia = moment(tarefa.dataFormatada, "DD/MM/YYYY");

        const diff = dataMoment.diff(dia);
        if(diff == 0){
            dataTopo.appendChild(Tarefa(tarefa, id));
        }
    })

    return dataTopo;
}