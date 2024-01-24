const hacerdesencriptacion = (text) => {
    let texto = text.toLowerCase();
    let lista = ["enter", "imes", "ai", "ober", "ufat"]
    for ( let i = 0; i < lista.length; i++) {
        while (texto.indexOf(lista[i]) != -1){
            texto = texto.replace(lista[i], lista[i][0])
        }
    }

    return texto
}

export default hacerdesencriptacion;