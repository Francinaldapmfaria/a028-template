
//prtica guiada1
//criar nova tag li
const itemNovo = document.createElement("li")
console.log(itemNovo)

//criando conteudo na tag
const conteudoItemNovo = document.createTextNode("item 0")
console.log(conteudoItemNovo)

//add conteudo na tag
itemNovo.appendChild(conteudoItemNovo)
console.log(itemNovo)  

//definir conteudo de referencia
const elementoReferencia = document.getElementById("lista")
console.log(elementoReferencia)

//add na tela
elementoReferencia.insertAdjacentElement("afterbegin",itemNovo)

//elemento 5
const itemFinal = document.createElement("li")

const conteudoItemfinal = document.createTextNode("item 5")

itemFinal.appendChild(conteudoItemfinal)
console.log(itemFinal)

elementoReferencia.insertAdjacentElement("beforeend", itemFinal)

