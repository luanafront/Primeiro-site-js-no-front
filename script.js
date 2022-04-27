const root = document.getElementById("root")
console.log(root)

const cabecalho = document.createElement("header")
cabecalho.classList.add("cabecalho")

//funcao para atribuir elementos no Html
function criarElemento(elementoHTML , classe = "", conteudo = ""){
    const elemento = document.createElement(elementoHTML)
    elemento.classList.add(classe)
    elemento.innerText = conteudo

    return elemento
}
 
const cabecalhoTitulo = criarElemento("h1", "cabecalho__titulo", "Meu primeiro site utilizando JavaScript no Front-End")
cabecalho.appendChild(cabecalhoTitulo)
root.appendChild(cabecalho)

//main 


const principal = criarElemento("main" , "principal")
root.appendChild(principal)

const sectionOpcoes = criarElemento("section", "section__Opcoes")
principal.appendChild(sectionOpcoes)

const principalBotoes = criarElemento("ul", "principal__botoes")
sectionOpcoes.appendChild(principalBotoes)

const principalBotoesLista = ["Quem sou", "Minhas Tecnologias", "Sites", "Rede Sociais"]

for (let i = 0; i < principalBotoesLista.length; i++) {
    let botao = criarElemento("li","principal__botoes--botao", principalBotoesLista[i])
    principalBotoes.appendChild(botao)
}

const principalPerfil = criarElemento("section", "principal__perfil")
principal.appendChild(principalPerfil)

const imagemPerfil = criarElemento("img", "imagem__perfil" )
imagemPerfil.src = "./imagem-perfil.jfif"
principalPerfil.appendChild(imagemPerfil)

const textoPerfil = criarElemento("p", "Luana Medeiros")
principalPerfil.appendChild(textoPerfil)


// const principalFeed = document.createElement("section")
// principalFeed.classList.add("principal__feed")
// principal.appendChild(principalFeed)





