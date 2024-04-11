import { postData } from "./useList"

export function addProduct(position){

    const $product = document.getElementsByClassName(`product-${position}`)
    var listWantedProducts = []

    if(localStorage.getItem('products') != null){
        listWantedProducts = JSON.parse(localStorage.getItem('products'))
    }

    var src = $product[0].getAttribute('src')
    var titulo = $product[1].innerHTML
    var precio = $product[2].innerHTML
    
    const product = {
        "url": src,
        "title": titulo,
        "price": precio
    }

    if(listWantedProducts.length == 0){
        listWantedProducts[0] = product
    }
    else{
        listWantedProducts[listWantedProducts.length] = product
    }

    if(localStorage.getItem('products') == null){

        localStorage.setItem('products', JSON.stringify(listWantedProducts))

    }
    else{

        localStorage.removeItem('products')
        localStorage.setItem('products', JSON.stringify(listWantedProducts))

    }

    postData()

}