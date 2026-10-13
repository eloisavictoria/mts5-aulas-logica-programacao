export function verificarAprovacao(media, frequencia){
  let status;
  if(media >= 7 && frequencia >= 0.75){
    status = 'Aprovado';
  }else if(media < 4 || frequencia < 0.75){
    status = 'Reprovado';
  }else{  
    status = 'Recuperação';
  }
  return status;

  /** Outra maneira de solucionar o problema
   * let status;
   * 
   * if(frequencia < 0.75){
   *    status = 'Reprovado';
   * } else {
   *    if(media >= 7){
   *       status = 'Aprovado';
   *    } else if(media >= 4){
   *      status = 'Recuperação';
   *    } else {
   *      status = 'Reprovado';
   *    }
   * }
   * return status;
   */
}