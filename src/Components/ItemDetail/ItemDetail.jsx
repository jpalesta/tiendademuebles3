import React from 'react'

import { CardActionArea, Typography, CardMedia, CardContent, Card, Box, CardActions, } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ producto }) => {

  const onAdd = (total) => {
      console.log(`Compraste ${total} unidades`)
  }


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
          <ItemCount  onAdd={onAdd}/>
        </CardActions>
        <Typography variant="overline" display="block" gutterBottom align='center'>
          Quedan {producto.stock} unidades en Stock
        </Typography>
      </Card>
    </Box>



  )
}

export default ItemDetail