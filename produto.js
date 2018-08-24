class Produto{
    constructor(name, category, price, img, thumb){
        this.name = name;
        this.category = category;
        this.price = price;
        this.img = img;
        this.thumb = thumb;
    }

    get produto_name(){
        return this.name;
    }

    get produto_price(){
        return this.price;
    }

    get produto_img(){
        return this.img;
    }

    get produto_category(){
        return this.category;
    }
    
    get produto_thumb(){
        return this.thumb;
    }
}