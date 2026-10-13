export function verificarPedidosCafeteria(pedidos, valorEsperado){
let totalPedidos = 0;
    for(let i=0; i <= pedidos.length; i++){

        if(pedidos[i] === valorEsperado){
        totalPedidos++;
        }
    }
    return totalPedidos;
}