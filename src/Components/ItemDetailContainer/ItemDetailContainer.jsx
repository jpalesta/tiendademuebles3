import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { Grid, Box } from '@mui/material';

import { productos } from '../../Mock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [filtroProducto, setFiltroProducto] = useState(productos);

  const { productosid } = useParams()

  const productoConFiltro = new Promise((resolve, reject) => {

    const newProductos = productos.filter(p => p.id == productosid)
    resolve(newProductos)

  })

  useEffect(() => {
    productoConFiltro.then((response) => {
      setFiltroProducto(response)
    })
  }, [productosid])


  return (

    <React.Fragment>
      <div>
        {
          filtroProducto.map((producto) => {
            return <ItemDetail key={producto.id} producto={producto} />
          })
        }
      </div>
    </React.Fragment>

  )
}

export default ItemDetailContainer