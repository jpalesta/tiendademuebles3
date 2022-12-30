import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'


const ItemListContainer = () => {

    const [productosFs, setProductosFs] = useState([])

    const { categoriaid } = useParams()

    useEffect(() => {

        const querydb = getFirestore();
        const coleccionProductos = collection(querydb, 'productos');

        if (categoriaid) {
            const filtroCategoria = query(coleccionProductos, where('categoria', '==', categoriaid))
            getDocs(filtroCategoria)
                .then(res => setProductosFs(res.docs.map(item => ({ id: item.id, ...item.data() }))))
        } else {
            getDocs(coleccionProductos)
                .then(res => setProductosFs(res.docs.map(item => ({ id: item.id, ...item.data() }))))
        }
    }, [categoriaid])


    return (
        <>
        <div className='productos'>
                    <ItemList productosFs={productosFs} />
        </div>
        </>
    )
}

export default ItemListContainer
