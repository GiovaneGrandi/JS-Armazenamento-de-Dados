export const removeDatasRepetidas = (datas) => {
    const datasUnicas = []; //Array vazio onde será colocada as datas
    datas.forEach((data => {
        if(datasUnicas.indexOf(data.dataFormatada) == -1){ //Com o indexOf, se ele retorna -1 significa que o dado não existe
            datasUnicas.push(data.dataFormatada); //Se a condição do if for verdadeira o objeto não será repetido então poderá entrar no array
        }
    }))

    return datasUnicas;
}

export const ordenaDatas = (data) => {
    data.sort((a, b) => { //Usando o .sort para ordenar a exibição do array
        const primeiraData = moment(a, "DD/MM/YYYY").format("YYYYMMDD"); //Passando as datas para um formato onde elas virem um número e possam ser subtraídas
        const segundaData = moment(b, "DD/MM/YYYY").format("YYYYMMDD");

        return primeiraData - segundaData; //Retornando o calculo delas que irá gerar a ordem crescente das datas
    })
} 