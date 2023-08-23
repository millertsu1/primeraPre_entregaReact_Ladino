import './CartWidget.css'
import cart from './CartWidgetsAssets/cart.png'

const CartWidget = () => {

  return (
    <div className='containerCartWidget'>
        <img className='imgCart' src={cart} alt="carrito" />
        <strong> 5  </strong>
    </div>
  )
}

export default CartWidget