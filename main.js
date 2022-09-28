addEventListener("DOMContentLoaded",()=>{
    // Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean positivos:
    // área triangulo= lado * lado.

    let valor1=Number(prompt("ingrese el valor de base"))
    let valor2=Number(prompt("ingrese el valor de altura"))
    
    if(valor1 > 0 %% valor2 > 0 ){
        let Triangulo = valor1 * valor2 / 2
        console.log(`El area del Triangulo es  ${Triangulo}`)
    }
})