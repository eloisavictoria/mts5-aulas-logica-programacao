import {verificarStatusTeste} from '../source/verificarStatusTeste.js';
import assert from 'node:assert';
describe('Suite de testes: verificar status dos testes', () => {

    let listaStatus = ['pass', 'fail', 'pass', 'fail', 'pass'] 
    it('Verifica taxa de aprovação dos testes', function(){
        let resultadoEncontrado = verificarStatusTeste(listaStatus);
        assert.equal(resultadoEncontrado[3], 60);
    })

      it('Verifica total de aprovação dos testes', function(){
         let resultadoEncontrado = verificarStatusTeste(listaStatus);
         assert.equal(resultadoEncontrado[1], 3);
     })

      it('Verifica total de reprovação dos testes', function(){
         let resultadoEncontrado = verificarStatusTeste(listaStatus);
         assert.equal(resultadoEncontrado[2], 2);
     })

     it('Verifica total de testes', function(){
         let resultadoEncontrado = verificarStatusTeste(listaStatus);
         assert.equal(resultadoEncontrado[0], 5);
     })
})