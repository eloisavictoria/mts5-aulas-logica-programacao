/**Você tem um vetor de preços de produto em um carrinho de supermercado. 
 * Some o resultado total das compras do seu carrinho. 
 * Entrada: [ {nome:'Arroz', preco: 22.00}, {nome: 'Feijão', preco: 3.50}, {nome: Macarrao, preco: 7} ] 
 * saída é o total da compra: 32.50 
 * Pra quem achou que ta facil: Adicione um desconto de 10% se o total da compra for superior a R$200  
 * Obs.: Criar um projeto node no vsCode, seguindo a estrutura já compartilhada na aula 4, contendo o código de aplicação/fonte e arquivos de teste. 
 * Deve conter ao menos 3 casos de teste em cada um dos exercícios. */

export function carrinhoCompras(produtos, produtoEspecifico) {
let totalProdutos = 0;
    for(let i=0; i < produtos.length; i++){
        if(produtoEspecifico === undefined || produtos[i].nome === produtoEspecifico){
            totalProdutos += produtos[i].preco;
        }
    }
    if(totalProdutos > 200){
        totalProdutos = totalProdutos * 0.1; // Aplica desconto de 10%
    }
    return totalProdutos;
}
