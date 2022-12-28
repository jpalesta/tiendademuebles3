import React from 'react'
import { useCartContext } from '../../Context/CartContext'

import { IconButton, Button, Box, Typography } from '@mui/material';
import RemoveShoppingCart from '@mui/icons-material/RemoveShoppingCart';

const ItemCart = ({ producto }) => {

     const {borrarDelCarrito} = useCartContext();



     
    return (
        <Box>
            <img src={producto.img} alt={producto.alt} />
            <Typography>Producto: {producto.name}</Typography>
            <Typography>Cantidad: {producto.total}</Typography>
            <Typography>Precio unitario: {producto.precio}</Typography>
            <Typography>Subtotal: $ {producto.total * producto.precio}</Typography>
            <Button variant="outlined" color="secondary" aria-label="Borrar Item">
                <IconButton aria-label="suma" edge='end' color='secondary' onClick={() => borrarDelCarrito(producto.id)} >
                    <RemoveShoppingCart />
                </IconButton>
            </Button>
        </Box>
    )
}

export default ItemCart