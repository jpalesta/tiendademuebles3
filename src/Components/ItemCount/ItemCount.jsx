import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { productos } from '../../Mock'


const ItemCount = ({ producto, onAdd }) => {

    const { productosid } = useParams()

    const productoElegido = productos.find((producto) => parseInt(producto.id) === parseInt(productosid) )

    const [total, setTotal] = useState(1);

    const suma = () => {
        setTotal(total + 1)
    };

    const resta = () => {
        setTotal(total - 1)
    };

    return (
        <React.Fragment>
            <Button variant="outlined" color="secondary" aria-label="Contqdor">
                <IconButton aria-label="resta" edge='start' color='secondary' onClick={resta} disabled={total <= 1}>
                    <RemoveIcon />
                </IconButton>
                <Typography variant="text" color="secondary">{total}</Typography>
                <IconButton aria-label="suma" edge='end' color='secondary' onClick={suma} disabled={total >= productoElegido.stock}>
                    <AddIcon />
                </IconButton>
            </Button>
            <Button variant="outlined" color="secondary" disabled={productoElegido.stock <=0} onClick = {() => onAdd(total)}>
                AGREGAR AL CARRITO
            </Button>
        </React.Fragment>
    )
}

export default ItemCount