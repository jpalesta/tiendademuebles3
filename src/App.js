import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'

import NavBar from "./Components/NavBar/NavBar.jsx";
import Theme from "./ThemeConfig.js"
import Inicio from './Views/Inicio/Inicio';
import Contacto from './Views/Contacto/Contacto'
import Nosotros from './Views/Nosotros/Nosotros'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={< Inicio />} />
          <Route exact path='/Nosotros' element={< Nosotros />} />
          <Route exact path='/Contacto' element={< Contacto />} />
          <Route exact path='/Categoria/:categoriaid' element={< ItemListContainer />} />
          <Route exact path='/Productos/:productosid' element={< ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
