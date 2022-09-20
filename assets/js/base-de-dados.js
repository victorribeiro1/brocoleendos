let id = 0
class Produto {
    constructor(img, nome, preco, descricao, tipo) {
        this.id = ++id
        this.img = img
        this.nome = nome
        this.preco = preco
        this.descricao = descricao
        this.tipo = tipo
    }
}    

const laranja = new Produto('laranjas-portrait.jpg',    'Laranja Lima', 1,      'Laranjinha gostosa delícia. Essa é a melhor laranja que você vai comer na sua vida interinha. Confia',         'fruta')
const abacaxi = new Produto('abacaxi-portrait.jpg',     'Abacaxi',      5,      'Abacaxi gostoso delícia. Esse é o melhor abacaxi que você vai comer na sua vida interinha. Confia',            'fruta')
const tomate =  new Produto('tomates-portrait.jpg',     'Tomate',       3,      'Tomatezinho gostoso delícia. Esse é o melhor tomate que você vbananaai comer na sua vida interinha. Confia',   'fruta')
const banana =  new Produto('bananas-portrait.jpg',     'Banana',       2.50,   'Bananinha gostosa delícia. Essa é a melhor banana que você vai comer na sua vida interinha. Confia',           'fruta')

const produtos = [abacaxi, banana, laranja, tomate]

console.log(produtos)