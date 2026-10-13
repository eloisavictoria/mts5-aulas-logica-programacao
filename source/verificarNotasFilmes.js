export function verificarNotasFilmes(listaFilmes) {
    const resultados = [];

    for (let i = 0; i < listaFilmes.length; i++) { //verifica cada filme na lista de filmes
        const filme = listaFilmes[i];
        const quantidadeVotos = filme.avaliacoes.length;
        let totalNotas = 0;

        for (let n = 0; n < quantidadeVotos; n++) { //verifica cada nota do filme
            totalNotas += filme.avaliacoes[n]; // soma todas as notas do filme
        }

        //faz o calculo da média das notas do filme, caso não haja votos, a média será 0
        let media = 0;
        if (quantidadeVotos > 0) {
            media = totalNotas / quantidadeVotos;
        }

        //verifica a avaliação do filme de acordo com a média das notas
        let avaliacao = 'Filme ruim';
        if (media >= 4) {
            avaliacao = 'Filme recomendado';
        } else if (media >= 3) {
            avaliacao = 'Filme razoável';
        }

        //cria uma lista de objetos com as informações do filme, quantidade de votos, média e avaliação
        resultados.push({
            nome: filme.nome,
            quantidadeVotos,
            media,
            avaliacao,
        });
    }

    return resultados;
}