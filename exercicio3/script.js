function checaCaps(event){
    // const inputSenha = document.getElementById("textoInput")
    // // console.log(inputTexto.value)

    // const inputTextoEvento = event.target
    console.log(event.shiftKey)
    const paragrafo = document.getElementById("mensagem")
    if(event.shiftKey){
        paragrafo.innerHTML = "ATENÇAO: SEGURANDO O SHIFT"
    }else{
        paragrafo.innerHTML = ""
    }
}