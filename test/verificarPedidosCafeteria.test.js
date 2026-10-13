import {verificarPedidosCafeteria} from '../source/verificarPedidosCafeteria.js';
import assert from 'node:assert';
describe('Suite de testes: verificar pedidos da cafeteria', () => {

    let listaPedidos = ['café', 'chá', 'bolo de cenoura', 'café', 'suco de laranja'];
    it('Verifica total de pedidos de café', function(){
        let resultadoEncontrado = verificarPedidosCafeteria(listaPedidos, 'café');
        assert.equal(resultadoEncontrado, 2);
    })

    it('Verifica total de pedidos de chá', function(){
        let resultadoEncontrado = verificarPedidosCafeteria(listaPedidos, 'chá');
        assert.equal(resultadoEncontrado, 1);
    })

    it('Verifica total de pedidos de suco de laranja', function(){
        let resultadoEncontrado = verificarPedidosCafeteria(listaPedidos, 'suco de laranja');
        assert.equal(resultadoEncontrado, 1);
    })

})