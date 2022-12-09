import React from 'react'
import ItemList from '../../Components/ItemList/ItemList'
import NavBar from '../../Components/NavBar/NavBar'
import ItemDetail from '../../Components/ItemDetail/ItemDetail'

const Inicio = () => {
  return (
    <div>
      <h1>Estoy en el inicio</h1>
      <NavBar />
      <ItemList />
    </div>
  )
}

export default Inicio