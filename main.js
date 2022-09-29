addEventListener("DOMContentLoaded",()=>{
    // Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él segundo, en
    //     caso contrario indicar con un mensaje que la operación no es posible realizarla.
    let nota1 =Number(prompt("ingrese su nota 1"))
    let nota2 =Number(prompt("ingrese su nota 2"))

    if(nota1 > nota2){
        let total = nota1 - nota2
        console.log(` la resta es ${ total}`)
    }
    else{console.log(`la operación no es posible realizarla`)}


})