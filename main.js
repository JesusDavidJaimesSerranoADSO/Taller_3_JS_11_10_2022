addEventListener("DOMContentLoaded",()=>{
    // Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados de:
    // Iva, Subtotal y Total de la compra de los artículos.
let pago1 =Number(prompt("ingrese el pago hecho"))
let pago2 =Number(prompt("ingrese el pago hecho"))
let pago3 =Number(prompt("ingrese el pago hecho"))
let pago4 =Number(prompt("ingrese el pago hecho"))
let pago5 =Number(prompt("ingrese el pago hecho"))

let total = pago1 + pago2 + pago3 + pago4 + pago5
let iva = total * 0.19
let totalMasIva = total + iva
if(totalMasIva > 0){
    console.log(`valor del iva es de ${iva}`)
    console.log(` el subtotal de la compra es de ${ total}`)
    console.log(` el total de la compra es de ${ totalMasIva}`)
}else{
    console.log(`el resultado es menor que cero`)
}


})