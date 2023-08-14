const Products = [
    {
        id: "001",
        name: "Pantalon Jean",
        price: 9500,
        description: "Pantalon Maxi Jean claro",
        stock: 10,
        img: "https://i.ibb.co/c2ZZV1x/foto-1.jpg",
        category: 'Pantalones',
    },
    {
        id: "002",
        name: "Campera de Jean",
        price: 17000,
        description: "Campera de Jean",
        stock: 10,
        img: "https://i.ibb.co/dM3sfW9/campera-jean.jpg",
        category: 'Camperas',
    },
    {
        id: "003",
        name: "Remera Calaveras",
        price: 5500,
        description: "Remera Calaveras negra",
        stock: 10,
        img: "https://i.ibb.co/K78h5hN/remera-gotica.jpg",
        category: 'Remeras',
    },
    {
        id: "004",
        name: "Remera Ramones",
        price: 9000,
        description: "Remera Ramones negra",
        stock: 10,
        img: "https://i.ibb.co/HVdysFW/remera-ramones.jpg",
        category: 'Remeras',
    },
    {
        id: "005",
        name: "Campera de Cuero",
        price: 19500,
        description: "Campera de cuero entallada roja",
        stock: 10,
        img: "https://i.ibb.co/jZWfbcB/campera-roja.jpg",
        category: 'Camperas',
    },
    {
        id: "006",
        name: "Campera escosesa",
        price: 12500,
        description: "Campera escosesa roja y negra con puños",
        stock: 10,
        img: "https://i.ibb.co/1vBYDQL/campera-escosesa.jpg",
        category: 'Camperas',
    },
    {
        id: "007",
        name: "Campera Jean con Parches",
        price: 12000,
        description: "Campera Jean negra con Parches",
        stock: 10,
        img: "https://i.ibb.co/LhmcVcz/Campera-con-parches.jpg",
        category: 'Camperas',
    },
    {
        id: "008",
        name: "Pantalón Chupin ",
        price: 8000,
        description: "Pantalón chupin negro",
        stock: 10,
        img: "https://i.ibb.co/yR1g0w0/pantalon-chupin.jpg",
        category: 'Pantalones',

    },
    {
        id: "009",
        name: "Remera Boca ",
        price: 4500,
        description: "Remera Boca Blanca",
        stock: 10,
        img: "https://i.ibb.co/HVDZX5N/remera-labios.jpg",
        category: 'Remeras',

    }
]

//trae todos los productos
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Products)
        }, 1000)

    })
}

// trae datos de un  producto por id
export const getProductById = (ProductId) => {
    return new Promise((resolve, reject) => {
        const productRequested = Products.find(
            (Item) => Item.id === parseInt(ProductId)
          );
      
          setTimeout(() => {
            resolve(productRequested);
          }, 2000);
        });
}

// filtro por categoría
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Products.filter((prod) => prod.category === category))
        }, 500)
    })
}