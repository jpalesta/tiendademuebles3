import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Typography } from '@mui/material';

import './ErrorProducto.css'

const ErrorProducto = () => {

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#ffa726"
  };

  return (
    <div className='contenedorError'>
      <div className='error'>
        <h2>El producto elegido no se encuentra en nustra base de datos</h2>
        <Link to='/' style={linkStyle}><Button size="medium" color='primary' variant='outlined'>SEGUIR COMPRANDO</Button></Link>
      </div>
    </div>

  )
}

export default ErrorProducto