function ExibirCarrinho (){
    const carrinhoDiv = document.getElementById ("carrinho")
    carrinhoDiv.innerHTML = ""
    const carrinho = JSON.parse(localStorage.getItem("carrinho"))|| []
    carrinho.forEach(item => {
        const ItemDiv = document.createElement("div")
        ItemDiv.textContent = item.Nome + "- Quantidade:"+ item.Quantidade
        console.log(item.Nome)
        
        const aumentarBtn = document.createElement("button")
        aumentarBtn.textContent = "+"
        aumentarBtn.onclick=()=> AtualizarQuantidade(item.Nome, 1)

        const diminuirBtn = document.createElement("button")
        diminuirBtn.textContent = "-"
        diminuirBtn.onclick=()=> AtualizarQuantidade(item.Nome, -1)

        const removerBtn = document.createElement("button")
        removerBtn.textContent = "remover"
        removerBtn.onclick=()=> AtualizarQuantidade(item.Nome, -item.Quantidade)

        carrinhoDiv.appendChild(aumentarBtn)
        carrinhoDiv.appendChild(diminuirBtn)
        carrinhoDiv.appendChild(removerBtn)

        carrinhoDiv.appendChild(ItemDiv)
    });
}
function AtualizarQuantidade (ItemName, Quantidade){
    var carrinho = JSON.parse(localStorage.getItem("carrinho"))|| []
    var itemExistenteIndex = carrinho.findIndex(i=>i.Nome===ItemName)
    // Quando o carrinho estiver vazio o ItemExistenteIndex retorna -1
    if(
        itemExistenteIndex != -1) {
            carrinho[itemExistenteIndex].Quantidade += Quantidade
            if (carrinho[itemExistenteIndex].Quantidade<=0){
                carrinho.splice(itemExistenteIndex, 1)
            }
        }
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
        window.location.href= "carrinho.html"
}




ExibirCarrinho()