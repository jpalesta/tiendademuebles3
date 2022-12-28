import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Typography } from '@mui/material';

import { useCartContext } from '../../Context/CartContext'
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#ffa726"
  };
  
  const { cart, precioTotal, limpiarCarrito } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <Typography variant="h4" color="text.primary" align='left' marginTop={10} marginBottom={5} marginLeft={2}>El carrito está vacío</Typography>
        <Link to='/' style={linkStyle} ><Button size="medium" color='primary' variant='outlined'>SEGUIR COMPRANDO</Button></Link>
      </>
    );
  } else {
    return (
      <>
        {
          cart.map(producto => <ItemCart key={producto.id} producto={producto} />)
        }
        <Typography variant="h4" color="text.primary" align='left'>Total:$ {precioTotal()}</Typography>
        <Link to='/' style={linkStyle}><Button size="medium" color='primary' variant='outlined' >SEGUIR COMPRANDO</Button></Link>
        <Button size="medium" color='primary' variant='outlined' onClick={limpiarCarrito}>VACIAR CARRITO</Button>
        <Link to='/Orden' style={linkStyle}><Button size="medium" color='primary' variant='outlined' >ENVIAR PEDIDO</Button></Link> 
      </>
    )
  }
}
export default Cart