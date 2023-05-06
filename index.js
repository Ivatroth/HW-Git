function laCajaDePandora(numero){
    // proximamente escribiremos codigo aqui
    if(numero%2===0){
        let binario=numero.toString(2);
        return binario
    }else{
        const hexadecimal = numero.toString(16)
        return hexadecimal
    }
    }