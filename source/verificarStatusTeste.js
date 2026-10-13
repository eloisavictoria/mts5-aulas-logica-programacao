export function verificarStatusTeste(status){
let totalTestes = 0;
let totalTestesAprovados = 0;
let totalTestesReprovados = 0;
let passRate = 0;
let listaResultados = [];
    
    for(let i=0; i < status.length; i++){
        totalTestes++;
        if(status[i] === 'pass'){
            totalTestesAprovados++;
         } else if(status[i] === 'fail'){
             totalTestesReprovados++;
         }
    }

    passRate = (totalTestesAprovados / status.length) * 100;
    listaResultados.push(totalTestes, totalTestesAprovados, totalTestesReprovados, passRate);
    return listaResultados;
}