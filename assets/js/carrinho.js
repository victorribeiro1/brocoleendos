const botao = document.querySelector('botao')

function adicionarALista(nomeProduto) {
    const idProduto = produtos.indexOf(nomeProduto) + 1
}

botao.addEventListener('click', () => {
    adicionarALista(document.querySelector('#product-name').value)
})