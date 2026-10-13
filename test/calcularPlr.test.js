import { calcularPlr } from '../source/calcularPlr.js';
import assert from 'node:assert';
describe('Testes de calcular PLR', function(){
    it('Deve retornar o salário com PLR para cargo senior', function(){
        let resultado = calcularPlr('senior', 2000);
        assert.equal(resultado,4000);
    })

    it('Deve retornar o salário sem PLR para cargo pleno', function(){
        let resultado = calcularPlr('pleno', 1600);
        assert.equal(resultado, 1600);
    })

    it('Deve retornar o salário sem PLR para cargo junior', function(){
        let resultado = calcularPlr('junior', 1200);
        assert.equal(resultado, 1200);
    })
})