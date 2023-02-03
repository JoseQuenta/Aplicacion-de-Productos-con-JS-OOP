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

    deleteProduct(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            //para mostrar mensaje es igual que colocarlo en el DOM ... interesting
            this.showMessage('Product deleted successfully', 'danger')
        }
        
    }

    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message));
        // showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        //timer added
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 1500);
        
    }
}

//eventos del DOM: cuando un usuario da clic en el boton, digita en un textbox, inicia, eventos que ocurren dentro del elemento

document.getElementById('product-form').addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name, price, year);

    const ui = new UI();
    
    //para verificar que los campos esten completos
    if(name === '' || price === '' || year === ''){
        return ui.showMessage('Complete fields please', 'danger')
    }
    
    ui.addProduct(product);
    
    //para limpiar casillas
    ui.resetForm();

    //para mostrar mensaje
    ui.showMessage('Product added Successfully', 'success');
    
    //console.log(product);

    e.preventDefault();

    //cancela el comportamiento de refresca autmatico

    //minuto 39 fazt - aplicacion de productos con JS orientado a objetos
})

//document.getElementById('name').focus();

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
    //para mostrar mensaje
    //ui.showMessage('Product deleted Successfully', 'danger');

});

// 1. guardarlo en el navegador local storage
// 2. crear un servidor restApi nodejs py, java, recibir, y 
// 3. Pedirias datos y mostrar en pantalla
// *. Framework ayuda 