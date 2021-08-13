import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartMenu = () => {
  const { cart, total, clearCart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>Your Bag</h2>
          <h4 className='empty-cart'>Is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <div className='cart'>
      <div className='cart-header'>
        <h2>YOUR BAG</h2>
      </div>
      {/* Cart-item */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* footer  */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </div>
  )
}

export default CartMenu
