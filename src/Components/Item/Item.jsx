import React from 'react'
import { Link } from 'react-router-dom'

import { CardActionArea, Typography, CardMedia, CardContent, Card, Box, Button, CardActions } from '@mui/material';

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#ffa726"
};

const Item = ({ producto }) => {
    return (
        <Box
            p={5}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={producto.img}
                        alt={producto.alt}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {producto.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Link to={`/Productos/${producto.id}`} style={linkStyle} >
                    <Button size="large" color='primary' variant='outlined'>MAS INFORMACION</Button>
                    </Link>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Item