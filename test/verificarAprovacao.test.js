import {verificarAprovacao} from '../source/verificarAprovacaoAluno.js';
import assert from 'node:assert';
describe('Suite de testes: verificar aprovação do aluno', () => {
    it('Verfica se aluno está aprovado', function(){
        let resultado = verificarAprovacao(7, 0.75);
        assert.equal(resultado, 'Aprovado'); 
        
        //** Essa seria uma outra forma de organizar o código.
        // AAA - Arrange: organizar, Act: agir, Assert: verificar/validar
        // arrange
        // const resultadoEsperado = 'Aprovado';
        // act
        // let resultadoEncontrado = verificarAprovacao(7, 0.75);
        // assert 
        // assert.equal(resultadoEncontrado, resultadoEsperado);   */
    })

    it('Verfica se aluno está em recuperação', function(){
        let resultado = verificarAprovacao(5, 0.75);
        assert.equal(resultado, 'Recuperação');    
    })

     it('Verfica se aluno está em reprovado por média', function(){
        let resultado = verificarAprovacao(3, 0.90);
        assert.equal(resultado, 'Reprovado');    
    })

     it('Verfica se aluno está em reprovado por frequência', function(){
        let resultado = verificarAprovacao(8, 0.70);
        assert.equal(resultado, 'Reprovado');    
    })

     it('Valor limte: recuperado', function(){
        let resultado = verificarAprovacao(4, 0.75);
        assert.equal(resultado, 'Recuperação');    
    })

     it('Valor limte: reprovado', function(){
        let resultado = verificarAprovacao(3.9, 0.75);
        assert.equal(resultado, 'Reprovado');    
    })
     it('Valor limte: reprovado', function(){
        let resultado = verificarAprovacao(7, 0.74);
        assert.equal(resultado, 'Reprovado');    
    })
})


// Valores de fronteira


