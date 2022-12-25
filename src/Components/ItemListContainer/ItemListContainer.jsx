import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

// import { collection, getDocs, getFirestore } from 'firebase/firestore'

import Item from '../Item/Item'
import { productos } from '../../Mock'


const ItemListContainer = () => {

    //useState items firestore
    // const [productosFs, setProductosFs] = useState([])

    // useEffect(() => {
    //     const db = getFirestore();

    //     const productosCollection = collection(db, 'productos')

    //     getDocs(productosCollection).then((result) => {
    //         setProductosFs(result.docs.map((docs) => ({ id: docs.id, ...docs.data() })))
    //         console.log([productosFs])
    //     }
    //     )
    // },[])


    const [filtroCategoria, setFiltroCategoria] = useState(productos);

    const { categoriaid } = useParams()

    const categoriaConFiltro = new Promise((resolve) => {
            const newProductos = productos.filter((p) => parseInt(p.categoria) === parseInt(categoriaid))
            resolve(newProductos)
    })

    useEffect(() => {
        categoriaConFiltro.then((response) => {
            setFiltroCategoria(response)
        })
    }, [categoriaid])

    return (
        <div>
            {
                filtroCategoria.map((producto) => {
                    return <Item key={productos.id} producto={productos} />
                })
            }

        </div>
    )
}

export default ItemListContainer
