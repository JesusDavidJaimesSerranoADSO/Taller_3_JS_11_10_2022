addEventListener("DOMContentLoaded",()=>{
    // Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede los
    // $130.000 el descuento será del 15%, de lo contrario no hay descuento.

    let pago1 =Number(prompt("ingrese el pago hecho"))
    let pago2 =Number(prompt("ingrese el pago hecho"))
    let pago3 =Number(prompt("ingrese el pago hecho"))
    let pago4 =Number(prompt("ingrese el pago hecho"))
    let pago5 =Number(prompt("ingrese el pago hecho"))
    
    let total = pago1 + pago2 + pago3 + pago4 + pago5
    if(total > 130000){
        let descuento = total - (total * 0.15)
        console.log(`su pago es de ${descuento}`)
    }else{
        console.log(`su pago es de ${total}`)
    }

})