import React from 'react'

import Item from '../Item/Item'
import { productos } from '../../Mock'


const ItemList = () => {

    return (
        <div>
            {
                productos.map((producto) => {
                    return <Item key={producto.id} producto={producto} />
                })
            }
        </div>
    )
}

export default ItemList