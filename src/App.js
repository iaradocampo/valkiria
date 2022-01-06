import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Order from './components/order/Order'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';

function App() {
  return <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/categoria/:idCategory' element={<ItemListContainer />} />
          <Route exact path='/detalle/:idProduct' element={<ItemDetailContainer />} />
          <Route exact path='/orders' element={<Order />} />
          <Route exact path='/orders/:orderId' element={<Order />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  </>
}

export default App;
