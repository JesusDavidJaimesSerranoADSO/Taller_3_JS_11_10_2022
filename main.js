addEventListener("DOMContentLoaded",()=>{

    let num1 = Number(prompt("ingrese un numero 1"))
    let num2 = Number(prompt("ingrese un numero 2"))
    let num3 = Number(prompt("ingrese un numero 3"))

    if(num1 > num2 && num3){
        if(num2 > num3){
            console.log(`en munero mayor es ${num1}`)
            console.log(`en munero segundo es ${num2}`)
            console.log(`en munero ultimo es ${num3}`)
        } 
        else {
            console.log(`en munero mayor es ${num1}`)
            console.log(`en munero segundo es ${num3}`)
            console.log(`en munero ultimo es ${num2}`)
        }
    }

    else if(num2 > num1 && num3){
        if(num1 > num3){
            console.log(`en munero mayor es ${num2}`)
            console.log(`en munero segundo es ${num1}`)
            console.log(`en munero ultimo es ${num3}`)
        } 
        else {
            console.log(`en munero mayor es ${num2}`)
            console.log(`en munero segundo es ${num3}`)
            console.log(`en munero ultimo es ${num1}`)
        }
    }
    else if(num3 > num1 && num2){
        if(num1 > num2){
            console.log(`en munero mayor es ${num3}`)
            console.log(`en munero segundo es ${num1}`)
            console.log(`en munero ultimo es ${num2}`)
        } 
        else {
            console.log(`en munero mayor es ${num3}`)
            console.log(`en munero segundo es ${num2}`)
            console.log(`en munero ultimo es ${num1}`)
        }
    }
})