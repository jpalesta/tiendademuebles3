import React from 'react'
import { Link } from 'react-router-dom'

import { CardActionArea, Typography, CardMedia, CardContent, Card, Box, Button, CardActions, Grid } from '@mui/material';

import './Item.css'

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#ffa726"
};


const Item = ({ productos }) => {
    
    return (
            <Box
                p={5}>
                <Card sx={{ width: 200 }} className='item'>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={productos.img}
                            alt={productos.alt}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div"color={ "#ffa726"}>
                                {productos.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className='botonMasInfo'>
                        <Link to={`/Productos/${productos.id}`} style={linkStyle} >
                            <Button size="medium" color='secondary' variant='outlined' >MAS INFORMACION</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Box>
    )
}

export default Item