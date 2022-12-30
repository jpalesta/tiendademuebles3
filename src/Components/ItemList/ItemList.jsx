import React from 'react'

import Item from '../Item/Item'


const ItemList = ({ productosFs = [] }) => {

    return (
        <>
            {productosFs.map(producto => <Item key={producto.id} productos={producto} />)}
        </>
    )
}

export default ItemList