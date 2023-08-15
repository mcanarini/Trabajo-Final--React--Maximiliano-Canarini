// Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, where, query, addDoc, setDoc, writeBatch } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhy98yae6ZFJcuCPmUAY0Rd3fVCOokSSU",
  authDomain: "canarino-3f982.firebaseapp.com",
  projectId: "canarino-3f982",
  storageBucket: "canarino-3f982.appspot.com",
  messagingSenderId: "312736228892",
  appId: "1:312736228892:web:d36f6de51654c3cc6ba1d9"
};
//INICIO FIREBASE
const appFirebase = initializeApp(firebaseConfig);
//INICIO FIRESTORE
const db = getFirestore(appFirebase);

//IMPLEMENTO getProducts (itemListConteiner)
async function getProducts() {
  const ProductsRef = collection(db, "Products");
  const documentSnapshot = await getDocs(ProductsRef);
  const documents = documentSnapshot.docs;
  const docsData = documents.map((item) => ({ ...item.data(), id: item.id }));
  return docsData;
}


//IMPLEMENTO getProductById (itemDetailConteiner)
async function getProductById(id) {
  const docRef = doc(db, "Products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}


// IMPLETENTO getProductsByCategory
async function getProductsByCategory() {
  const productsRef = collection(db, "Products");
  const q = query(productsRef, where("category", "==", "remeras"));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}


// CREO ORDEN DE COMPRA
async function createOrder(orderData) {
  const collectionRef = collection(db, "orders")
  const docCreated = await addDoc(collectionRef, orderData)

  return (docCreated.id)
}


async function getOrder(id) {
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}


async function _exportProducts() {
  const productos = [
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

  },
  ];
  for (let item of productos) {
    const collectionRef = collection(db, "products")
    const docCreated = await addDoc(collectionRef, item);
  }
}


async function _exportProductsWithBatch() {
  const productos = [
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
  ];

  const batch = writeBatch(db);

  productos.forEach(producto => {
    const newId = producto.id
    delete producto.id;
    const newDoc = doc(db, "Products", `1${newId}`);
    batch.set(newDoc, producto);
  })

  const data = await batch.commit();
}

export {getProducts, getProductById, getProductsByCategory, createOrder, getOrder, _exportProducts, _exportProductsWithBatch};

