addEventListener("DOMContentLoaded",()=>{
//     Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que muestre
// en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable temperatura es
// mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra Normal.

    let temperatoura=Number(prompt("ingrese el valor de base"))
    let presión=Number(prompt("ingrese el valor de altura"))
    
    if(presión > 200){
        alert(" Alarma la presión es mayor a 200")
    }else{
        alert("Normal")
    }

    if(temperatoura > 100){
        alert("Alarma la temperatura es mayor a 200")
    }else{
        alert("Normal")
    }
})