import { listShop_component } from "../components/wantedProduct"

export function postData(){
    
    const $list_wanted = document.querySelector('.list-wanted-products')

    var listProducts = JSON.parse(localStorage.getItem('products'))
    var index = 0
    var precio_Actual = 0

    listProducts.map((products) => {

        const { product } = listShop_component(products, index)
        $list_wanted.innerHTML += product
        index++

    })

    $(document).ready(function () {
        $('.btn-plus').click(function(){
            console.log("Usando boton plus")
            let atributo = $(this).attr('product');
            let numeroActual = parseInt($(`.amount${atributo}`).val())
            $(`.amount${atributo}`).val(numeroActual + 1)
    
            if(precio_Actual == 0){
                precio_Actual = parseInt($(`.precio${atributo}`).html())
            }
            $(`.precio${atributo}`).html(`${precio_Actual * parseInt($(`.amount${atributo}`).val())}`)
        })
    
        $('.btn-minus').click(function(){
    
            let atributo = $(this).attr('product')
            let numeroActual = parseInt($(`.amount${atributo}`).val())

            if(numeroActual == 1) return
            else{
                $(`.amount${atributo}`).val(numeroActual - 1)
            }
    
            if(precio_Actual == 0){
                precio_Actual = parseInt($(`.precio${atributo}`).html())
            }
            $(`.precio${atributo}`).html(`${precio_Actual * parseInt($(`.amount${atributo}`).val())}`)
        })
    });
}