import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import ItemDetail from '../ItemDetail/ItemDetail'
import { productos } from '../../Mock'


const ItemDetailContainer = () => {

  const [filtroProducto, setFiltroProducto] = useState(productos);

  const { productosid } = useParams()

  const productoConFiltro = new Promise((resolve, reject) => {
    setTimeout(() => {
      const newProductos = productos.filter((p) => p.id == productosid)
      resolve(newProductos)
    }, 2000)
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