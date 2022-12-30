import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Typography } from '@mui/material';

import { useCartContext } from '../../Context/CartContext'
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'

const Cart = () => {

  const linkStyle = {
    margin: "2rem",
    textDecoration: "none",
    color: "#ffa726"

  };

  const { cart, precioTotal, limpiarCarrito } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className='carrito'>
        <Typography variant="h3" color="text.primary" >El carrito está vacío</Typography>
        <Link to='/' style={linkStyle} ><Button size="large" color='secondary' variant='outlined'>SEGUIR COMPRANDO</Button></Link>
      </div>
    );
  } else {
    return (
      <>
        {
          cart.map(producto => <ItemCart key={producto.id} producto={producto} />)
        }
        <Typography variant="h4" color="text.primary" align='center' margin={3}>Total:$ {precioTotal()}</Typography>

        <div className='botonesCart' >
          <Link to='/' style={linkStyle}><Button size="large" color='secondary' variant='outlined' >SEGUIR COMPRANDO</Button></Link>
          <Button color='secondary' variant='outlined' onClick={limpiarCarrito} >VACIAR CARRITO</Button>
          <Link to='/Orden' style={linkStyle} ><Button size="large" color='secondary' variant='outlined' >ENVIAR PEDIDO</Button></Link>
        </div>
      </>
    )
  }
}
export default Cart