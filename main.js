addEventListener("DOMContentLoaded",()=>{
//     En una tienda de HELADO da un descuento por compra a sus clientes con membresía dependiendo
// de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.
// Los descuentos son los siguientes:
// Tipo A 10% de descuento
// Tipo B 15% de descuento
// Tipo C 20% de descuento

    let valor =Number(prompt("ingrese el valor del helado"))
    let cat = prompt("ingrese el valor de menbresia\n tipo A, tipo B y tipo C")
    
    if(cat == "a" || cat == "A"){
        let descuento = valor * 0.10
        let total = descuento - valor
        console.log(` valor a pagar ${ total}`)
    }
    else if (cat == "b" || cat == "B"){
        let descuento = valor * 0.15
        let total = descuento - valor
        console.log(` valor a pagar ${ total}`)
    }
    else{
        let descuento = valor * 0.20
        let total = descuento - valor
        console.log(` valor a pagar ${ total}`)
    }

})