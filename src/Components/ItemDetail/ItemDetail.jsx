import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { CardActionArea, Typography, CardMedia, CardContent, Card, Box, CardActions, Button } from '@mui/material';

import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../Context/CartContext';

const ItemDetail = ({ filtroProducto }) => {

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#ffa726"
};

const {agregarAlCarrito} = useCartContext();

  const [irAlCarrito, setIrAlCarrito] = useState(false);

  //función que guarda el total del counter
  const onAdd = (total) => {
    setIrAlCarrito (true)
    agregarAlCarrito (filtroProducto, total)
  }

  return (
    <Box
      p={5}>
      <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={filtroProducto.img}
            alt={filtroProducto.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {filtroProducto.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {filtroProducto.descripción}
            </Typography>
            <Typography variant="h4" color="text.primary" align='center'>
              ${filtroProducto.precio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {
            irAlCarrito ? 
            <>
            <Link to='/Cart' style={linkStyle}><Button size="medium" color='primary' variant='outlined'>VER CARRITO</Button></Link> 
            <Link to='/' style={linkStyle}><Button size="medium" color='primary' variant='outlined' >SEGUIR COMPRANDO</Button></Link>
            </>
            :
              <ItemCount filtroProducto={filtroProducto} onAdd={onAdd} />}
        </CardActions>
      </Card>
    </Box>



  )
}

export default ItemDetail