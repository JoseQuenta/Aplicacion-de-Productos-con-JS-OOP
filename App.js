//todo el codigo de la logica

class Product{
    constructor(name, price, year){
        this.name = name,
        this.price = price,
        this.year = year
    
    }

}

class UI{
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class='card text-center mb-4'>
                <div class='card-body'>
                    <strong>Product</strong>: ${product.name}
                    <strong>Product name</strong>: ${product.price}
                    <strong>Product year</strong>: ${product.year}
                </div>
            </div>
        
        `;
        productList.appendChild(element)
    }

    deleteProduct(){

    }

    showMessage(){

    }
}

//eventos del DOM: cuando un usuario da clic en el boton, digita en un textbox, inicia, eventos que ocurren dentro del elemento

document.getElementById('product-form').addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name, price, year);

    const ui = new UI();
    ui.addProduct(product);
    
    console.log(product);

    e.preventDefault();

    //cancela el comportamiento de refresca autmatico

    //minuto 39 fazt - aplicacion de productos con JS orientado a objetos
})