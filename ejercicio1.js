let num1 = +prompt("Ingresa la cantidad de varones");
let num2 = +prompt("Ingresa la cantidad de mujeres");
let num3 = num1 + num2;

alert(`El porcentaje de varones es ${((num1/num3)*100).toFixed(2)}% \n El porcentaje de mujeres es ${((num2/num3)*100).toFixed(2)}%`)