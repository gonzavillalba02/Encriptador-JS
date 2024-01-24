const hacerencriptacion = (text) => {

    let texto = text;
    texto = texto.toLowerCase().split('');
    for(let i = 0; i < texto.length; i++) {
        if (texto[i] == "e") {
            texto[i] = "enter"
        }else if (texto[i] == "i") {
            texto[i] = "imes"
        }else if (texto[i] == "a") {
            texto[i] = "ai"
        }else if (texto[i] == "o") {
            texto[i] = "ober"
        }else if (texto[i] == "u") {
            texto[i] = "ufat"
        }}
    return texto.join('')
}

export default hacerencriptacion;