addEventListener("DOMContentLoaded",()=>{
//     Cálculo de áreas - Elige una figura geométrica:" Triángulo y Círculo
// ¿Qué figura quiere calcular (Escriba T o C)?
// Triangulo = base * altura / 2
// Circulo = PI * radio* radio

    let num1 = prompt("Elige una figura geométrica: Triángulo y Círculo\n¿Qué figura quiere calcular (Escriba T o C)?: ")
    

    if(num1 == "t" || num1 == "T" ){
        let valor1=Number(prompt("ingrese el valor de base"))
        let valor2=Number(prompt("ingrese el valor de altura"))
        let Triangulo = valor1 * valor2 / 2
        console.log(`El area del Triangulo es  ${Triangulo}`)
    }
    else if(num1 == "c" || num1 == "C" ){
        let valor1=Number(prompt("ingrese el valor del radio"))
        let circulo = Math.PI * (valor1 * valor1)
        console.log(`El area del Circulo es  ${circulo}`)
    }
})