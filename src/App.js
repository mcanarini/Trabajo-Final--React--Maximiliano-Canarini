import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/Navbar/NavBar';
import { CartContextProvider } from './Components/Context/CartContext';
import CartContainer from './Components/CartConteiner/CartConteiner';
import ItemListConteiner from './Components/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './Components/ItemDetailConteiner/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListConteiner />} />
          <Route path='/category/:categoryId' element={<ItemListConteiner />} />
          <Route path='/Item/:ItemId' element={<ItemDetailConteiner />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
