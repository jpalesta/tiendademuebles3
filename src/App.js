import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'

import NavBar from "./Components/NavBar/NavBar.jsx";
import Theme from "./ThemeConfig.js"
import Contacto from './Views/Contacto/Contacto'
import Nosotros from './Views/Nosotros/Nosotros'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart'
import CartProvider from './Context/CartContext.jsx';
import ErrorProducto from './Views/ErrorProducto/ErrorProducto.jsx';
import ItemOrden from './Components/ItemOrden/ItemOrden.jsx';
import NuevoPedido from './Views/NuevoPedido/NuevoPedido.jsx';


function App() {

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <CartProvider >
          <NavBar />
          <Routes>
            <Route exact path='/' element={< ItemListContainer />} />
            <Route exact path='/Nosotros' element={< Nosotros />} />
            <Route exact path='/Contacto' element={< Contacto />} />
            <Route exact path='/Categoria/:categoriaid' element={< ItemListContainer />} />
            <Route exact path='/Productos/:productosid' element={< ItemDetailContainer />} />
            <Route exact path='/Cart' element={< Cart />} />
            <Route exact path='/Orden' element={< NuevoPedido />} />
            <Route exact path='*' element={< ErrorProducto />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
