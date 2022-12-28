import React from 'react'
import { Link } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

import { useCartContext } from '../../Context/CartContext';


const ChartCart = () => {
const {productosTotales} = useCartContext();

const cantidadProductos = productosTotales()

    return (
        <Link to='/Cart'>
        <IconButton aria-label="show 17 new notifications" color="secondary">
            <Badge badgeContent={cantidadProductos != 0 ? cantidadProductos : "0" } color="error">
                <ShoppingCartIcon fontSize='large' />
            </Badge>
        </IconButton>
        </Link>
    )
}

export default ChartCart