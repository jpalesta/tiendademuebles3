import React from 'react'

import { Typography, Box } from '@mui/material';

import { useCartContext } from '../../Context/CartContext'


const ItemOrden = ({ producto }) => {

    const {cart} = useCartContext();

    return (
        <>
            <h2>Detalle de tu orden</h2>
            <Box>
                <Typography>Producto: {cart.name}</Typography>
                <Typography>Cantidad: {cart.total}</Typography>
                <Typography>Precio unitario: {cart.precio}</Typography>
                <Typography>Subtotal: $ {cart.total * cart.precio}</Typography>
            </Box>
        </>
    )
}

export default ItemOrden