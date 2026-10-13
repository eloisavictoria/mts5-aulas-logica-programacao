import {carrinhoCompras} from '../source/carrinhoCompras.js';
import assert from 'node:assert';
describe('Suite de testes: calculo do total de compras do carrinho', () => {

    let listaPedidosDesconto = [ {nome:'Arroz', preco: 22.00}, {nome: 'Feijão', preco: 3.50}, {nome: 'Macarrao', preco: 7}, {nome: 'Carne', preco: 50}, {nome: 'Pimenta', preco: 10.20},
        {nome: 'Fran', preco: 30.50}, {nome: 'Batata', preco: 20.45}, {nome: 'Mandioca', preco: 15.60}, {nome: 'Cenoura', preco: 9.99}, {nome: 'Laranja', preco: 18.95},
         {nome: 'Tapioca', preco: 15.30}
     ] ;

       let listaPedidos = [ {nome:'Arroz', preco: 22.00}, {nome: 'Feijão', preco: 3.50}, {nome: 'Macarrao', preco: 7}] ;

    
    it('Verifica total de pedidos de pedidos sem desconto', function(){
        let totalProdutos = 0;
        let resultadoEncontrado = carrinhoCompras(listaPedidos);
        
        for(let i=0; i < listaPedidos.length; i++){
           totalProdutos += listaPedidos[i].preco;
        }
        assert.equal(resultadoEncontrado, totalProdutos);
    })

     it('Verifica total de pedidos de pedidos com desconto', function(){
        let totalProdutos = 0;
        let resultadoEncontrado = carrinhoCompras(listaPedidosDesconto);
        
        for(let i=0; i < listaPedidosDesconto.length; i++){
           totalProdutos += listaPedidosDesconto[i].preco;
           
        }
        totalProdutos = totalProdutos * 0.1; // Aplica desconto de 10%
        assert.equal(resultadoEncontrado, totalProdutos);
    })


      it('Verifica total de pedidos de feijão', function(){
          let resultadoEncontrado = carrinhoCompras(listaPedidos, 'Feijão');
          let totalProdutos = 0;

          for(let i=0; i < listaPedidos.length; i++){
            if(listaPedidos[i].nome === 'Feijão'){
                totalProdutos += listaPedidos[i].preco;
            }
        }
          assert.equal(resultadoEncontrado, totalProdutos);
     })

})