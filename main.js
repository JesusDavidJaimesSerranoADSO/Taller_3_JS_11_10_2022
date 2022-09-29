addEventListener("DOMContentLoaded",()=>{
//     Realizar el algoritmo que lea N números, calcule y escriba la suma de los pares y el producto de los
// impares. Numero par es aquel que su residuo igual a cero (num mod !=0)
    var totalp = 0
    var totaln = 0 
    for (let i=0; i < 5; i++){
        let valor1 =Number(prompt("ingrese el numero"))

        if( valor1 % 2 == 0){
            totalp += valor1 
        }
        else{
            totaln += valor1 
            totaln /= 2
        }
    }
    console.log(`la suma de los pares es de ${totalp}`)
    console.log(`el producto de los impares es de ${totaln}`)


})