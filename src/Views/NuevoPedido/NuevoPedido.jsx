import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { collection, addDoc, getFirestore } from 'firebase/firestore'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, } from '@mui/material';

import swal from 'sweetalert';

import { useCartContext } from '../../Context/CartContext'

import './NuevoPedido.css'

const NuevoPedido = () => {

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#ffa726"
  };

  const { cart, precioTotal, limpiarCarrito } = useCartContext();

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [direccion, setDireccion] = useState('')
  const [telefono, setTelefono] = useState('')
  const [validarEmail, setValidarEmail] = useState(false)
  const [mensajeAyuda, setMensajeAyuda] = useState('')
  const [email1, setEmail1] = useState('')
  const [email2, setEmail2] = useState('')
  const [fechaOrden, setFechaOrden] = useState("")

  const validacionDatos = () => {

    if (email1 === email2 && email1 !== "" && nombre !== "" && apellido !== "" && telefono !== "" && direccion !== "") {
      fechaActual()
      finalizarCompra();

    } else {

      mostrarError()
    }
  }

  const finalizarCompra = () => {
    const db = getFirestore();
    const cargaOrdenes = collection(db, 'ordenes');
    addDoc(cargaOrdenes, orden)
      .then(({ id }) => mostrarAlerta(id))
    limpiarCarrito();
  }

  const fechaActual = () => {   
  const fecha = new Date();
  setFechaOrden (fecha)

}

  const orden = {
    comprador: {
      nombre: { nombre },
      apellido: { apellido },
      telefono: { telefono },
      direccion: { direccion },
      email: { email1 },
      fecha: { fechaOrden }
    },
    productos: cart.map(producto => ({ id: producto.id, name: producto.name, precio: producto.precio, cantidad: producto.total })),
    total: precioTotal(),
  }

  const mostrarAlerta = (id) => {
    swal({
      title: 'Felicitaciones!',
      text: `Tu pedido se registró con el número ${id} 
      Te enviaremos un Email a ${email1} con toda la información`,
      icon: 'success',
      button: 'Aceptar',
      timer: '5000'
    }
    )
  }
  const mostrarError = () => {
    swal({
      title: 'Ups!',
      text: `Por favor revisa los campos`,
      icon: 'error',
      button: 'Aceptar',
      timer: '5000'
    })
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  return (

    <>
      <Typography variant="h4" color="text.secondary" align='center' marginTop={4}>Detalle del pedido</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Producto</StyledTableCell>
              <StyledTableCell align="right">Cantidad</StyledTableCell>
              <StyledTableCell align="right">Precio Unitario</StyledTableCell>
              <StyledTableCell align="right">Subtotal</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((producto) => (
              <StyledTableRow
                key={producto.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {producto.name}
                </StyledTableCell>
                <StyledTableCell align="right">{producto.total}</StyledTableCell>
                <StyledTableCell align="right">{producto.precio}</StyledTableCell>
                <StyledTableCell align="right">{producto.total * producto.precio}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" color="text.secondary" align='center' border={2} borderRadius={2} margin={3} >Total:$ {precioTotal()}</Typography>

      <Typography variant="h6" color="text.primary" align='center' marginTop={4}>Para confirmar el pedido debe completar los siguientes campos:</Typography>

      <Box

        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '20ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className='formulario'>
          <TextField
            onChange={(e) => {
              setNombre(e.target.value)
            }}
            id="nombre"
            label="Nombre"
            variant="outlined" />

          <TextField
            onChange={(e) => {
              setApellido(e.target.value)
            }}
            id="apellido"
            label="Apellido"
            variant="outlined" />

          <TextField
            onChange={(e) => {
              setDireccion(e.target.value)
            }}
            id="dirección"
            label="Dirección"
            variant="outlined" />

          <TextField
            onChange={(e) => {
              setTelefono(e.target.value)
            }}
            id="telefono"
            label="Teléfono"
            variant="outlined" />
          <TextField
            onChange={(e) => {
              setEmail1(e.target.value)
            }}
            label="Email"
            variant="outlined" />
          <TextField
            onChange={(e) => {
              setEmail2(e.target.value)
              if (email1 === e.target.value) {
                setValidarEmail(false)
              } else {
                setValidarEmail(true)
                setMensajeAyuda('Las direcciones de Email deben ser iguales')
              }
            }}
            error={validarEmail}
            label=" Repetir Email"
            helperText={mensajeAyuda}
            variant="outlined"
          />
        </div>
      </Box>
      <div className='botonesFormulario'>
        <Button size="large" color='secondary' variant='outlined' onClick={validacionDatos}>ENVIAR ORDEN</Button>
        <Link to='/' style={linkStyle}><Button size="large" color='secondary' variant='outlined' >SEGUIR COMPRANDO</Button></Link>
      </div>
    </>
  )
}

export default NuevoPedido