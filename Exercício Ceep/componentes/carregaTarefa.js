import { ordenaDatas, removeDatasRepetidas } from "../service/data.js";
import { criaData } from "./criaData.js";

export const carregaTarefa = () => {

    const lista = document.querySelector("[data-list]");
    const tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || [];

    lista.innerHTML = " ";
    const datasUnicas = removeDatasRepetidas(tarefasCadastradas);

    ordenaDatas(datasUnicas); //Chamando a função de ordenar o array passando como parâmetro as datas já filtradas e ajustadas

    datasUnicas.forEach((dia) => { //Loop que irá passar todos os itens do array para ser exibidos no HTML
        lista.appendChild(criaData(dia));
    })

}