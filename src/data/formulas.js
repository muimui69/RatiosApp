function sumar(valor1,valor2){
    if(valor1===valor2){
        console.log('son iguale');
    }else{
        console.log('ta mal');
    }
    return valor1+valor2;
}

const sumar2 = (valor1,valor2,valor3) =>{
    return valor1 + valor2 + valor3;
}

//console.log(sumar('hola', 5));

console.log(sumar2(1,2,3));