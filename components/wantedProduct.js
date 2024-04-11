

export function listShop_component(products, index){
    
    // listWantedProducts.map((product) => console.log(product.url));

    var product = `
    <section class="wanted-product">

        <img src="${ products.url }" product="${ index }" alt="" width="80" height="50">
        <span>${ products.title }</span>
        <p>Precio: S/ <span class="precio${ index }">${ products.price }</span></p>

        <div class="counter-product">
        <button type="button" class="btn-plus" product="${ index }" title="Añadir"><i class='bx bx-plus'></i></button>
        <input type="number" min="1" class="amount${ index }" value="1" readonly placeholder="1">
        <button type="button" class="btn-minus" product="${ index }" title="Quitar"><i class='bx bx-minus'></i></button>
        </div>

        <button type="button" product="${ index }" class="to-delete" title="Eliminar"><i class='bx bx-trash trash'></i></button>

    </section>
    `

    return { product }
    
}