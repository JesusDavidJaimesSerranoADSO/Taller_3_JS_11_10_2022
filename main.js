addEventListener("DOMContentLoaded",()=>{
    // En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es de planta,
    // la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora trabajada se le paga
    // a $10000. Para calcular su pago es necesario conocer el total de horas trabajadas.000 el descuento será del 15%, de lo contrario no hay descuento.

    let valor1 =Number(prompt("ingrese las horas cotizadas"))
    let area =prompt("indique su espacio de trabajo:\n planta (t) // administracion (a)")

    
    if(area == "t" || area == "T"){
        let total = valor1 * 20000
        console.log(`su pago es de ${total}`)
    }
    else if(area == "a" || area == "A"){
        let total = valor1 * 10000
        console.log(`su pago es de ${total}`)

})