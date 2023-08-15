import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/Navbar/NavBar';
import { CartContextProvider } from './Context/CartContext';
import CartContainer from './Components/CartConteiner/CartConteiner';
import ItemListConteiner from './Components/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './Components/ItemDetailConteiner/ItemDetailContainer';
import OrderConfirm from './Components/OrderConfirm/OrdenConfirm';
import Checkout from './Components/CheckOut/CheckOut';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListConteiner />} />
          <Route path='/cartegory/:remeras' element={<ItemListConteiner/>}/>
          <Route path='/category/:categoryId' element={<ItemListConteiner />} />
          <Route path='/Item/:id' element={<ItemDetailConteiner />} />
          <Route path="/cart" element={<CartContainer />}></Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation/:id" element={<OrderConfirm />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App;
