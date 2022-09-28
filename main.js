addEventListener("DOMContentLoaded",()=>{

    let num1 = Number(prompt("ingrese un numero 1"))
    let num2 = Number(prompt("ingrese un numero 2"))
    let num3 = Number(prompt("ingrese un numero 3"))

    if(num1 > num2 && num1 > num3){
        // el primer numero es mayor
        if(num2 > num3){
            console.log(`en munero mayor es ${num1}`)
            console.log(`en munero segundo es ${num2}`)
            console.log(`en munero ultimo es ${num3}`)
        } 
        else if ( num2 === num3){
            console.log(`en munero mayor es ${num1}`)
            console.log(`munero 2 (${num2}) y numero 3 (${num3})`)
        }
        else {
            console.log(`en munero mayor es ${num1}`)
            console.log(`en munero segundo es ${num3}`)
            console.log(`en munero ultimo es ${num2}`)
        }
    }
    else if(num2 > num1 && num2 > num3){
         // el segundo numero es mayor
        if(num1 > num3){
            console.log(`en munero mayor es ${num2}`)
            console.log(`en munero segundo es ${num1}`)
            console.log(`en munero ultimo es ${num3}`)
        } 
        else if (num1 === num3){
            console.log(`en munero mayor es ${num2}`)
            console.log(`munero 1 (${num1}) y numero 3 (${num3})`)
        }
        else {
            console.log(`en munero mayor es ${num2}`)
            console.log(`en munero segundo es ${num3}`)
            console.log(`en munero ultimo es ${num1}`)
        }
    }
    else if(num3 > num1 && num3 > num2){
        // el tercero numero es mayor
        if(num1 > num2){
            console.log(`en munero mayor es ${num3}`)
            console.log(`en munero segundo es ${num1}`)
            console.log(`en munero ultimo es ${num2}`)
        } 
        else if (num1 === num2){
            console.log(`en munero mayor es ${num3}`)
            console.log(`munero 2 (${num2}) y numero 1 (${num1})`)
        }
        else {
            console.log(`en munero mayor es ${num3}`)
            console.log(`en munero segundo es ${num2}`)
            console.log(`en munero ultimo es ${num1}`)
        }
    }
    else if (num3 == num2 && num2 < num1){
        // numero 1 mayor, 2 y 3 iguales
        console.log(`en munero mayor es ${num1}`)
        console.log(`munero 2 (${num2}) y numero 3 (${num3})`)
    }
    else if (num3 == num1 && num1 < num3){
        // numero 2 mayor, 1 y 3 iguales
        console.log(`en munero mayor es ${num2}`)
        console.log(`munero 1 (${num1}) y numero 3 (${num3})`)
    }
    else if(num1 == num2 && num3 < num2) {
        // numero 3 mayor, 2 y 1 iguales
        console.log(`en munero mayor es ${num3}`)
        console.log(`munero 2 (${num2}) y numero 1 (${num1})`)
    }

    else if (num3 == num2 && num2 > num1){
        // numero 2 y 3 iguales, numero 1 menor
        console.log(`munero 2 (${num2}) y numero 3 (${num3})`)
        console.log(`en munero menor es ${num1}`)
    }
    else if (num3 == num1 && num2 > num3){
        // numero 1 y 3 iguales, numero 
        console.log(`munero 1 (${num1}) y numero 3 (${num3})`)
        console.log(`en munero menor es ${num2}`)
    }
    else if(num1 == num2 && num2 > num3) {
        // numero 3 mayor, 2 y 1 iguales
        console.log(`munero 2 (${num2}) y numero 1 (${num1})`)
        console.log(`en munero enorr es ${num3}`)
    }
})