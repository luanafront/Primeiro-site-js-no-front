const root = document.getElementById("root")
console.log(root)

const cabecalho = document.createElement("header")
cabecalho.classList.add("cabecalho")

const cabecalhoTitulo = document.createElement("h1")
cabecalhoTitulo.classList.add("cabecalho__titulo")
cabecalhoTitulo.innerText = "Meu primeiro site ultilizando JavaScript no Front-End"


cabecalho.appendChild(cabecalhoTitulo)

root.appendChild(cabecalho)

