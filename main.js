addEventListener("DOMContentLoaded",()=>{
    let ingreso = Number(prompt("ingrese un numero"))

    if(ingreso > 0){
        if(ingreso <= 100){console.log(`su numero es ${ingreso}`)}
        else{alert(`lo sentimos su numero es mayor que 100`)}
    }
    else{alert(`su numero es negativo o cero`)}
})
