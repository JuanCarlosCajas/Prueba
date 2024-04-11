
import './style.css'
import { useShopping } from './hooks/useShopping'
import { addProduct } from './hooks/useWantedProducts'
import { useVerificacion } from './hooks/useVerification';
import { postData } from './hooks/useList';

const $boton_compras = document.querySelector('.shop-container')
const $background_wanted_products = document.querySelector('.background-wanted-products')
const $list_wanted_products = document.querySelector('.list-wanted-products')

console.log(localStorage.getItem("products"))


$(document).ready(function () {

    $('.add-product').click(function(){
        let atributo = $(this).attr('product')
        addProduct(atributo);
    })  

});

$background_wanted_products.addEventListener('click', () => {

    useShopping($background_wanted_products)
    useShopping($list_wanted_products)
    useShopping($boton_compras)

})

$boton_compras.addEventListener('click', () => {

    useShopping($background_wanted_products)
    useShopping($list_wanted_products)
    useShopping($boton_compras)
    useVerificacion()
    
})
