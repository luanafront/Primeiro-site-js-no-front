const root = document.getElementById("root")
console.log(root)

const cabecalho = document.createElement("header")
cabecalho.classList.add("cabecalho")

//funcao
function criarElemento(elementoHTML , classe, conteudo){
    const elemento = document.createElement(elementoHTML)
    elemento.classList.add(classe)
    elemento.innerText = conteudo

    return elemento
}
 
const cabecalhoTitulo = criarElemento("h1", "cabecalho__titulo", "Meu primeiro site utilizando JavaScript no Front-End")

cabecalho.appendChild(cabecalhoTitulo)

root.appendChild(cabecalho)

//main 
const principal = document.createElement("main")
principal.classList.add("principal")

const principalBotoes = document.createElement("ul")
principalBotoes.classList.add("principal__botoes")

const principalBotoesLista = ["Quem sou", "Minhas Tecnologias", "Sites", "Rede Sociais"]

for (let i = 0; i < principalBotoesLista.length; i++) {
    let botao = criarElemento("li","principal__botoes--botao", principalBotoesLista[i])
    principalBotoes.appendChild(botao)
}



principal.appendChild(principalBotoes)
root.appendChild(principal)

const principalFeed = document.createElement("section")
principalFeed.classList.add("principal__feed")

principal.appendChild(principalFeed)
