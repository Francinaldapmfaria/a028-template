//alterar para dark e para password esconder senha
//event forma de atualizar pagina de senha pq ta dentro de form
function escondeSenha(event){
    event.preventDefault()
    const inputSenha = document.getElementById("password")
    console.log(inputSenha)
    inputSenha.setAttribute("type", "password")

}

//alterar ligth para dark

const corformulario = document.querySelector(".light")
console.log(corformulario)
corformulario.classList.remove("light")
corformulario.classList.add("dark")
