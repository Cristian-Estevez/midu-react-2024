import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer, CART_ACTION_TYPES } from '../reducers/cart'

export const CartContext = createContext()

export const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: product
  })

  const clearCart = product => dispatch({
    type: CART_ACTION_TYPES.CLEAR_CART
  })

  const checkProductInCart = product => {
    return state.some(item => item.id === product.id)
  }

  return { addToCart, removeFromCart, clearCart, checkProductInCart, state }
}

export default function CartProvider ({ children }) {
  const { addToCart, removeFromCart, clearCart, checkProductInCart, state } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart,
      checkProductInCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
