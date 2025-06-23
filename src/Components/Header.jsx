import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({cart, setCart}) => {

  const [modalCart, setModalCart] = useState(false);
  const totalProducts = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const totalToPay = cart.reduce((acc, item) => {
    return (acc + (item.quantity * item.price));
  }, 0).toFixed(2);

  const handleDelete = id => {
    setCart(cart.filter(item => item.id !== id));
  }

  const handleSubmit = () => {
    setCart([]);
    alert('Your purchase was successful');
  }
  return(

    <header className="header container">
      <h1>ShopEasy</h1>

      <nav className="header__nav">
        <NavLink to='/'>Home</NavLink>
        <NavLink to= '/store'>Store</NavLink>
      </nav>

      <div className="header__icons" onClick={()=> setModalCart(prev => !prev)}>
        <img src="/img/cart.svg" alt="Icon cart" loading="lazy"/>
        {cart.length > 0? <span className="notification__cart">{totalProducts}</span> : ''}
        {modalCart && (
          <div className="cart">
            {cart.length > 0? 
            (
              <>
              <ul className="cart__grid">
               
                {cart.map(({id, price, image, title, quantity}) => {
                  return (
                    <li key={`${id}-${title}`}>
                      <img src={image} alt={`Image cart from ${title}`} loading="lazy" />
                      <p>{title}</p>
                      <span>{`x${quantity}`}</span>
                      <span>{`$${(price * quantity).toFixed(2)}`}</span>
                      <svg onClick={()=> handleDelete(id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                    </li>
                  )
                })}
              </ul>

              <div className="cart__total">
                <h3>Total: <span>{`$${totalToPay}`}</span></h3> 
                <button onClick={handleSubmit}>Purchase</button>
              </div>
              </>
            )
            :
            (
              <p>No elements in your cart</p>
            )
            }
          </div>
        )}
      </div>
    </header>
  )
}

export default Header;