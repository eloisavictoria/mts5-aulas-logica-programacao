//export para usar em outras pastas
export function calcularPlr(cargo1, salario){
 let salarioFinal = 0;
  if (cargo1 == 'senior'){
    salarioFinal = salario * 2;
    return  salarioFinal;
  }else{
    salarioFinal = salario;
    return  salarioFinal;
  }
}



