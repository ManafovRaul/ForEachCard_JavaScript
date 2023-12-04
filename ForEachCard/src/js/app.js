const cards = document.getElementById('item');

const cars = [
    {
        brand: "BMW",
        imgUrl: "https://images.unsplash.com/photo-1698923211993-2eede38c391a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$131.000"
    },
    {
        brand: "Audi",
        imgUrl: "https://images.unsplash.com/photo-1541348263662-e068662d82af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$172.000"

    },
    {
        brand: "Mercedes-Benz",
        imgUrl: "https://images.unsplash.com/photo-1608994751987-e647252b1fd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$159.000"

    },
    {
        brand: "Bentley",
        imgUrl: "https://images.unsplash.com/photo-1576668273906-4c087ac1dc85?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$560.000"

    },
    {
        brand: "Bugatti",
        imgUrl: "https://images.unsplash.com/photo-1635975231394-61336236b7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$259"

    },
    {
        brand: "Koenigsegg",
        imgUrl: "https://images.unsplash.com/photo-1562141959-8961d3397d88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$2.787.000"

    },
    {
        brand: "Pagani",
        imgUrl: "https://images.unsplash.com/photo-1566023767296-d229ef68147b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$2.590.000"

    },
    {
        brand: "Lamborghini",
        imgUrl: "https://images.unsplash.com/photo-1559385072-5adb2c4fc83f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$1.150.000"

    },

]


let inner = "";

cars.forEach(function (item){

    inner += `

    <div class="col-sm-6 col-md-4 col-lg-3">
    
    <div class="cart">
    <div class ="img">
    <img src=${item.imgUrl} alt="plant"/>
    </div>
    <div class="content">
    <h3 class="brand">${item.brand}</h3>
    <p class="value">${item.price}</p>
    </div>
    </div>
    </div>
    
    `
});

cards.innerHTML = inner;

