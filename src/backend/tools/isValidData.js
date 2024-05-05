const isValidData = (data) =>{

    //Se houver algum dado errado, ele vira false
    let validate = true

    //Expressões de delimitação de caracteres
    const isAlpha = /^[a-zA-Z\s]+$/
    const isNumeric = /^[0-9]+$/

    //Validar todos os campos do fomulário
    if(!(isAlpha.test(data.nome))){
        validate = false
    }

    if(!(isNumeric.test(data.idade))){
        validate = false
    }

    if(!(isNumeric.test(data.cpf))){
        validate = false
    }

    if(!(isNumeric.test(data.cep))){
        validate = false
    }

    if(!(isNumeric.test(data.telefone))){
        validate = false
    }

    //retorno se é ou não válido o dado
    return validate

}

module.exports = isValidData