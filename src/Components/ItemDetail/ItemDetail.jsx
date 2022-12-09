import React from 'react'

import { CardActionArea, Typography, CardMedia, CardContent, Card, Box, Button, CardActions, } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ producto }) => {
  return (
    <Box
      p={5}>
      <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={producto.img}
            alt={producto.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {producto.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {producto.descripción}
            </Typography>
            <Typography variant="h4" color="text.primary" align='center'>
              ${producto.precio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ItemCount />
        </CardActions>
        <Typography variant="overline" display="block" gutterBottom align='center'>
          Quedan {producto.stock} unidades en Stock
        </Typography>
      </Card>
    </Box>



  )
}

export default ItemDetail