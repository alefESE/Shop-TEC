// import Product from "/home/lumo/CC-TopicosWeb-Atividade2/product.js";
var all_products = [

    new Produto('Sueter Bomber De Seda Barroca', 'Sueter', 18050.00, 'JaquetaBomberDeSedaBarroca.jpg','JaquetaBomberDeSedaBarrocaThumbnail.jpg'),
    new Produto('Sueter Breton J W Anderson', 'Sueter', 2734.00, 'SueterBretonJWAnderson.jpg','SueterBretonJWAndersonThumbnail.jpg'),
    new Produto('Sueter Listrado Missoni', 'Sueter', 2850.00, 'SueterListradoMissoni.jpg','SueterListradoMissoniThumbnail.jpg'),
    new Produto('Sueter Com Estampas Versace', 'Sueter', 4452.00, 'SueterComEstampasVersace.jpg','SueterComEstampasVersaceThumbnail.jpg'),
    new Produto('Slide Medusa Com Glitter Versace', 'Chinelo', 2767.00, 'SlideMedusaComGlitter.jpg','SlideMedusaComGlitterThumbnail.jpg'),
    new Produto('Slide D&G 1984 Couro', 'Chinelo',2469.50,'SlideD&G1984Couro.jpg','SlideD&G1984CouroThumbnail.jpg'),
    new Produto('Slide Industrial', 'Chinelo',2530.99, 'SlideIndustrial.jpg','SlideIndustrialThumbnail.jpg'),
    new Produto('Vestido Longo Preto Givenchy', 'Vestido', 814.99, 'VestidoLongoPretoGivenchy.jpg','VestidoLongoPretoGivenchyThumbanail.jpg'),
    new Produto('Vestido de camurça Saint Laurent', 'Vestido', 23920.00, 'VestidoDeCamurcaSaintLautent.jpg','VestidoDeCamurcaSaintLautentThumbnail.jpg'),
    new Produto('Vestido Asymmetrical Bolt Balmain', 'Vestido', 22820.99, 'VestidoAsymmetricalBoltBalmain.jpg','VestidoAsymmetricalBoltBalmainThumbnail.jpg')

];

var carrinho = new Array;

function calculaTotal() {
    var total = 0.0;
    for(var i = 0; i < carrinho.length; i++) 
        total += carrinho[i].produto_price;
    return total;
}
function clickListener(elemnt) {
    var i = elemnt.id.replace(/\D/g,'')
    var li = document.createElement('li');
    
    carrinho.push(all_products[i]);
    li.className = 'carrinho-item';
    li.innerHTML = carrinho[carrinho.length-1].produto_name;
    document.getElementById('lista-carrinho').appendChild(li);;
    document.getElementById('span-carrinho').innerHTML = "Lista de compras R$ " + calculaTotal();

    alert("Produto adicionado:\n"+carrinho[carrinho.length-1].produto_name);
}
function load_categories(all_categories){
    
    var ul = document.getElementById("categorias-recipiente");

    for (var i = 0; i < all_categories.length; i++)
    {
        var li = document.createElement("li");  
        li.className = "categoria";

        var a = document.createElement("a");
        a.innerHTML = all_categories[i].name;
        a.href = "#";

        li.appendChild(a);
        ul.appendChild(li);
    }
}

function load_products(all_products){

    var sessao_produtos = document.getElementById("sessao-produtos");
    var lista_produtos = document.createElement('ol');
    lista_produtos.id = 'lista-produtos';
    lista_produtos.className = 'grid';

    for (var i = 0; i < all_products.length; i++)
    {
        var li = document.createElement('li');
        li.className = 'lista-item';

        var div_card = document.createElement('div');
        div_card.className = 'card-produto';

        var div_thumb = document.createElement('div');
        div_thumb.className = 'card-thumb';

        var thumbnail = document.createElement('img');
        thumbnail.className = 'produto-thumb';
        thumbnail.src = "imgs/"+all_products[i].produto_thumb;

        var div_conteudo = document.createElement('div');
        div_conteudo.className = 'card-conteudo';

        var name = document.createElement('h4');
        name.id = 'produto-nome';
        name.innerHTML = all_products[i].produto_name;

        var price = document.createElement('label');
        price.className = 'produto-preco';
        price.innerHTML = 'R$ ' + all_products[i].produto_price;

        var add_carrinho = document.createElement('button');
        add_carrinho.id = "bt" + i;
        add_carrinho.className = 'produto-add-carrinho';
        add_carrinho.innerHTML = 'Add';
        add_carrinho.setAttribute('onclick', 'clickListener(this)');

        div_thumb.appendChild(thumbnail);
        div_conteudo.appendChild(name);
        div_conteudo.appendChild(price);
        div_conteudo.appendChild(add_carrinho);
        div_card.appendChild(div_thumb);
        div_card.appendChild(div_conteudo);
        li.appendChild(div_card);
        // div_produto_inline_price.appendChild(price);
        // div_produto_inline_price.appendChild(add_to_cart);
        // div_produto.appendChild(div_produto_inline_price);
        lista_produtos.appendChild(div_card);
    }
    sessao_produtos.appendChild(lista_produtos);
}

function main(){

    //a seguinte desgraca conta o numero diferente de categorias dos nossos produtos
    var all_categories = [...new Set(all_products.map(product =>product.category))]
                .map(category => ({ name:category,count: all_products.filter(product =>product.category ===category).length }));    
    
    load_categories(all_categories);
    load_products(all_products);
    
}