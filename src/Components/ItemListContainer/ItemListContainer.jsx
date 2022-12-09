import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import Item from '../Item/Item'
import { productos } from '../../Mock'


const ItemListContainer = () => {

    const [filtroCategoria, setFiltroCategoria] = useState(productos);

    const { categoriaid } = useParams()

    const categoriaConFiltro = new Promise ((resolve,reject)=>{
        setTimeout (()=>{
            const newProductos = productos.filter((p)=>p.categoria==categoriaid)
            resolve(newProductos)
        },2000)
    })

    useEffect(()=>{
        categoriaConFiltro.then((response)=>{
            setFiltroCategoria (response)
        })
    }, [categoriaid])

    return (
        <div>
            {
                filtroCategoria.map((producto) => {
                    return <Item key={producto.id} producto={producto} />
                })
            }
        </div>
    )
}

export default ItemListContainer
