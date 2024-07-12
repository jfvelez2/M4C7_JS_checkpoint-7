function calcularNumero(num1, num2, num3, num4) {
    let suma1 = num1 + num2;
    let suma2 = num3 + num4;
    let resultado = suma1 * suma2;
  
    if (resultado > 50) {
      console.log("¡El número es mayor que 50!");
    } else {
      console.log("¡El número es menor que 50!");
    }
  
    return resultado;
  }
  
  let numero = calcularNumero(10, 20, 30, 40);
  console.log("El resultado es:", numero);

  // Resultado:

  // "¡El número es mayor que 50!"
  // "El resultado es:" 2100
     