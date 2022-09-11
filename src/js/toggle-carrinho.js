const carrinho  = document.getElementById('carrinho')
const button    = document.getElementById('button')
const myBlur    = document.getElementById('blur')
const shoppingBag = document.getElementById('shopping__bag')
const htmlTag = document.querySelector('html')

button.addEventListener('click', () => {
    toggleCarrinho()
})
shoppingBag.addEventListener('click', () => {
    toggleCarrinho()
})

function toggleCarrinho() {
    htmlTag.classList.toggle('no-overflow')
    carrinho.classList.toggle('active')
    myBlur.classList.toggle('active')
}