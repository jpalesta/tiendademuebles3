import React, { useState, useContext } from 'react'


const CartContext = React.createContext('');


export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const limpiarCarrito = () => setCart([]);

  const estaEnCarrito = (id) => cart.find(producto => producto.id === id) ? true : false;

  const borrarDelCarrito = (id) => setCart(cart.filter(producto => producto.id !== id));

  const agregarAlCarrito = (item, nuevaCantidad) => {
    const nuevoCarrito = cart.filter(prod => prod.id !== item.id);
    nuevoCarrito.push({ ...item, total: nuevaCantidad });
    setCart(nuevoCarrito)
  }

  const precioTotal = () => {
    return cart.reduce((prev, act) => prev + act.total * act.precio, 0);
  }

  const productosTotales = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.total, 0)

  return (
    <CartContext.Provider value={{
      limpiarCarrito,
      estaEnCarrito,
      borrarDelCarrito,
      agregarAlCarrito,
      precioTotal,
      productosTotales,
      cart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider