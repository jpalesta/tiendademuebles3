import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { getFirestore, doc, getDoc } from 'firebase/firestore'


import { Grid, Box } from '@mui/material';

import { productos } from '../../Mock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [filtroProducto, setFiltroProducto] = useState({});
  const [busquedaProducto, setBusquedaProducto] = useState(true)
  const { productosid } = useParams()

  const productoConFiltro = new Promise((resolve, reject) => {
    setTimeout(() => {
      const newProductos = productos.filter((p) => p.id == productosid)
      resolve(newProductos)
    }, 2000)
  })

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos', productosid)
    getDoc(queryDoc)
      .then(res => !res.exists() ? setBusquedaProducto(false) : setFiltroProducto({ id: res.id, ...res.data() }))

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
    )
  }
}
export default ItemDetailContainer

