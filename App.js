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
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                    
                </div>
            </div>
        
        `;
        productList.appendChild(element)
        
        //Se puede colocar aqui el reset form o en la interfaz
        //this.resetForm()
    }

    //para limpiar casillas
    resetForm(){
        document.getElementById('product-form').reset();
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

    //para limpiar casillas
    ui.resetForm();
    
    //console.log(product);

    e.preventDefault();

    //cancela el comportamiento de refresca autmatico

    //minuto 39 fazt - aplicacion de productos con JS orientado a objetos
})

document.getElementById('product-list').addEventListener('click', function(e){
    console.log(e.target);
});