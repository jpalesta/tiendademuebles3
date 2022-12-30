import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { getFirestore, doc, getDoc } from 'firebase/firestore'


import ItemDetail from '../ItemDetail/ItemDetail'
import ErrorProducto from '../../Views/ErrorProducto/ErrorProducto';

const ItemDetailContainer = () => {

  const [filtroProducto, setFiltroProducto] = useState({});
  const [busquedaProducto, setBusquedaProducto] = useState(true)
  const { productosid } = useParams()

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos', productosid)
    getDoc(queryDoc)
      .then(res => !res.exists() ? setBusquedaProducto(false) : setFiltroProducto({ id: res.id, ...res.data() }))

  }, [productosid])

  if (busquedaProducto === false) {
    return (
      <>
        <ErrorProducto />
      </>
    )
  } else {
    return (
      <div >
        <ItemDetail filtroProducto={filtroProducto} />
      </div>
    )
  }
}
export default ItemDetailContainer

