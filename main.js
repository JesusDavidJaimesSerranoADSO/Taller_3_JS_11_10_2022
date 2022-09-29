addEventListener("DOMContentLoaded",()=>{
    // Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso
    // de computación.
    let nombre =(prompt("ingrese su nombre"))
    let apellido =(prompt("ingrese su apellido"))
    let edad =(prompt("ingrese su edad"))
    let nota1 =Number(prompt("ingrese su nota 1"))
    let nota2 =Number(prompt("ingrese su nota 2"))
    let nota3 =Number(prompt("ingrese su nota 3"))
    let nota4 =Number(prompt("ingrese su nota 4"))
    let nota5 =Number(prompt("ingrese su nota 5"))

    let total = nota1 + nota2 + nota3 + nota4 + nota5
    let iva = total / 5
    
    console.log(` señor /ra ${ nombre}`)
    console.log(` su promedio es ${iva}`)
    if(iva < 5){console.log(` usted tienen un promedio bajo`)}
    
    else if(iva > 5 && iva < 8){console.log(` usted tienen un promedio alto`)}
    
    else{console.log(`usted tienen un promedio superior `)}


})