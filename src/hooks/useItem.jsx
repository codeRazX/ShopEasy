import { useState,useEffect } from "react";
import { useOutletContext } from "react-router-dom";


export const useItem = ( id, price, image, title )=> {
  const {setCart, cart} = useOutletContext();
  const [quantity, setQuantity] = useState(1);
  const [toggleAction, setToggleAction] = useState(false);

  
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(isNaN(value)? 1: value);
  }

  const handleSubmit = () => {
    setCart((prev) => {
    const existing = prev.find(item => item.id === id);

    if (existing) {
      return prev.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + quantity }
        : item
      );
    }
    else{
        return [...prev, { id, price, image, title, quantity }]
      }
    });

    setToggleAction(true);
  }

  const handleDelete = ()=>{
    setCart((prev) => {
      return prev.filter(item => item.id !== id);
    })

  }

  useEffect(() => {
    const inCart = cart.some(item => item.id === id);

    if (!inCart && toggleAction) {
      setToggleAction(false);
      setQuantity(1);
    }
  }, [cart, id, toggleAction]);
  
  return {quantity, setQuantity, handleChange, handleDelete, handleSubmit, toggleAction, setToggleAction};
}