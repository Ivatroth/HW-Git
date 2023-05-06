function laCajaDePandora(numero) {
    if (numero % 2 === 0) {
        return numero.toString(2);
    } else {
        return numero.toString(16);
    }
}

function Diego() {
    return {
        nombre: "Diego",
        edad: "26",
        nacionalidad: "Chileno"
    }
}