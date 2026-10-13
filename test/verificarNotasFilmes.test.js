import { verificarNotasFilmes } from '../source/verificarNotasFilmes.js';
import assert from 'node:assert';

describe('Suite de testes: verificar avaliações dos filmes', () => {
    const listaFilmes = [
        { nome: 'Minha mãe é uma peça', avaliacoes: [5, 4, 4, 4, 5] },
        { nome: 'Saneamento Básico', avaliacoes: [3, 4, 2, 3, 4] },
        { nome: 'Se eu fosse você', avaliacoes: [1, 2, 3] },
    ];

    it('Deve classificar a nota da primeira avaliação como filme recomendado', function () {
        const resultadoEncontrado = verificarNotasFilmes([listaFilmes[0]]);

        //console.log(resultadoEncontrado);
        assert.equal(resultadoEncontrado[0].nome, 'Minha mãe é uma peça');
        assert.equal(resultadoEncontrado[0].quantidadeVotos, 5);
        assert.equal(resultadoEncontrado[0].media, 4.4);
        assert.equal(resultadoEncontrado[0].avaliacao, 'Filme recomendado');
    });

    it('Deve classificar a nota da segunda avaliação como filme razoável', function () {
        const resultadoEncontrado = verificarNotasFilmes([listaFilmes[1]]);

        assert.equal(resultadoEncontrado[0].nome, 'Saneamento Básico');
        assert.equal(resultadoEncontrado[0].quantidadeVotos, 5);
        assert.equal(resultadoEncontrado[0].media, 3.2);
        assert.equal(resultadoEncontrado[0].avaliacao, 'Filme razoável');
    });

    it('Deve classificar a nota da terceira avaliação como filme ruim', function () {
        const resultadoEncontrado = verificarNotasFilmes([listaFilmes[2]]);

        assert.equal(resultadoEncontrado[0].nome, 'Se eu fosse você');
        assert.equal(resultadoEncontrado[0].quantidadeVotos, 3);
        assert.equal(resultadoEncontrado[0].media, 2);
        assert.equal(resultadoEncontrado[0].avaliacao, 'Filme ruim');
    });
});