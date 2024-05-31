//Pega todos os botões que são pratos.button
var buttons = document.querySelectorAll(".pratos-button")

//Ele passa por todos os botões que estão dentro de buttons(buttons tem uma lista de botões)
buttons.forEach(function(button){
    //Adiciona um evento de clique a cada botáo dentro de buttons
    button.addEventListener("click",function(){
        //A gente pegou o h2 mais próximo de pratos
        var h2 = this.closest(".pratos").querySelector("h2")
        //Pega o texto que está dentro de h2(que é o nome do prato)
        var ItemName = h2.textContent
        const item = {Nome: ItemName, Quantidade:1}
        var carrinho = JSON.parse(localStorage.getItem("carrinho"))|| []
        var itemExistenteIndex = carrinho.findIndex(i=>i.Nome===ItemName)
        console.log(itemExistenteIndex)
        if(itemExistenteIndex!=-1){
            carrinho[itemExistenteIndex].Quantidade++
        }
        else{carrinho.push(item)}
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
        })
})