const root = document.getElementById("root")

function criarElemento(elementoHTML , classe = "", conteudo = ""){
    const elemento = document.createElement(elementoHTML)
    elemento.classList.add(classe)
    elemento.innerText = conteudo

    return elemento
}
function criarCabecalho (){
    const cabecalho = criarElemento("header", "cabecalho")
     
    const cabecalhoTitulo = criarElemento("h1", "cabecalho__titulo", "Meu primeiro site utilizando JavaScript no Front-End")
    cabecalho.appendChild(cabecalhoTitulo)
    root.appendChild(cabecalho)
}
function criarListaDeImagens (listaImagem, classLista, classItem, classImg){
    const lista = criarElemento("ul", classLista)
    for(let i = 0; i < listaImagem.length ; i++){
        let opcao = criarElemento("li", classItem)
        
        let opcaoImagens = criarElemento("img", classImg)
        opcaoImagens.src = listaImagem[i]
        
        opcao.appendChild(opcaoImagens)
        lista.appendChild(opcao)
    }
    return lista
}

function criarSectionOpcoes(principal){
    const sectionOpcoes = criarElemento("section", "section__Opcoes")
    principal.appendChild(sectionOpcoes)
    
    const principalBotoes = criarElemento("ul", "principal__botoes")
    sectionOpcoes.appendChild(principalBotoes)
    
    const principalBotoesLista = ["Quem sou", "Minhas Tecnologias", "Sites", "Rede Sociais"]
    
    for (let i = 0; i < principalBotoesLista.length; i++) {
        let botao = criarElemento("li","principal__botoes--botao", principalBotoesLista[i])
        principalBotoes.appendChild(botao)
    }
}


function criarSectionPerfil(principal){
    const principalPerfil = criarElemento("section", "principal__perfil")
    principal.appendChild(principalPerfil)
    
    const imagemPerfil = criarElemento("img", "principal__imagem--perfil" )
    imagemPerfil.src = "./assest/imagem-perfil.jfif"
    principalPerfil.appendChild(imagemPerfil)
    
    const textoDiv = criarElemento("div", "texto__div")
    principalPerfil.appendChild(textoDiv)
    
    const textoPerfil = criarElemento("p", "div__texto--perfil", "Luana Medeiros")
    textoDiv.appendChild(textoPerfil)
    const texto2Perfil = criarElemento("p", "div__texto2--perfil", "Desenvolvedora Front-End Junior")
    textoDiv.appendChild(texto2Perfil)
}

function criarSectionFeed(principal){
    const principalFeed = document.createElement("section", "section__feed")
    principalFeed.classList.add("principal__feed")
    principal.appendChild(principalFeed)
    
    
    const quemSou = criarElemento("div", "quem__sou")
    principalFeed.appendChild(quemSou)
    
    const quemSouTitulo = criarElemento("h3", "quem__sou--titulo", "Quem sou?")
    quemSou.appendChild(quemSouTitulo)
    
    const quemSouTexto = criarElemento("p","quem__sou--texto", "Sou uma desenvolvedora apaixonada por tecnologia e por aprender. Decidir fazer transição de carreira em 2021 quando tive meu primeiro contato com a programação e desde então a programação tem me mudado e mudado a forma que vejo as coisas.")
    quemSou.appendChild(quemSouTexto)
    
       
    const minhasTecnologias = criarElemento("div", "minhas__tecnologias")
    principalFeed.appendChild(minhasTecnologias)
    
    const minhasTecnologiasTitulo = criarElemento("h3", "minhas__tecnologias--titulo", "Minhas Tecnologias?")
    minhasTecnologias.appendChild(minhasTecnologiasTitulo)
    
    const minhasTecnologiasTexto = criarElemento("p","minhas__tecnologias--texto", "HTML, CSS, JavaScript, Git, Scrum, BEM, Figma, Github.")
    minhasTecnologias.appendChild(minhasTecnologiasTexto)
            
    
    
    const opcaoTecnologias = ["./assest/html.png", "./assest/css.png", "./assest/js.png", "./assest/git.png", "./assest/figma.png", "./assest/github.png"]
    const opcoesTecnologias = criarListaDeImagens(opcaoTecnologias, "lista__tecnologias", "opcao__tecnologias", "opcao__imagem")
    minhasTecnologias.appendChild(opcoesTecnologias)
    
    
    const sites = criarElemento("div", "feed__sites")
    principalFeed.appendChild(sites)
    
    const sitesTitulo = criarElemento("h3", "sites__titulo", "Sites")
    sites.appendChild(sitesTitulo)
    
    
    const listaImagensSites = ["./assest/imobiluana.jfif", "./assest/site-series.jfif", "./assest/petshopmilu.jfif",  "./assest/delicias-sorriso.jfif", "./assest/perfil.jfif", "./assest/cadastro.jfif", "./assest/cadastre-se.jfif", "./assest/feed.jfif"]
    
    const opcoeSites = criarListaDeImagens(listaImagensSites, "sites__opcoes","opcao__sites", "opcao__imagem--sites")
    
    sites.appendChild(opcoeSites)

    const redesSocias = criarElemento("div", "principal__social",)
    principalFeed.appendChild(redesSocias)

    const redesTitulo = criarElemento("h3", "redes__titulo", "Redes Sociais")
    redesSocias.appendChild(redesTitulo)

    
}


function criarMain (){
    const principal = criarElemento("main" , "principal")
    root.appendChild(principal)
    criarSectionOpcoes(principal)
    criarSectionPerfil(principal)
    criarSectionFeed(principal)
}



function criarPaginaPrincipal(){
    criarCabecalho()    
    criarMain()
    
}
criarPaginaPrincipal()