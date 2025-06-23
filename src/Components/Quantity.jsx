
const Quantity = ({setQuantity, quantity, handleChange,toggleAction, setToggleAction}) => {  

  const handleIncreaseQuantity = ()=> {
    if(toggleAction){
      setToggleAction(false);
    }
    
    setQuantity(prev => prev + 1);
  }

  const handleDecreaseQuantity = () =>{
    if(toggleAction){
      setToggleAction(false);
    }
    setQuantity(prev => (prev > 1? prev - 1 : 1));
  }

  return (
  <div className="item__quantity__block">
    <button type="button" onClick={handleDecreaseQuantity}>-</button>
    <label htmlFor="quantity" className="sr-only">Quantity</label>
    <input className="no-spinner" type="number" name="quantity" id="quantity" min="1" value={quantity} onChange={handleChange}/>
    <button type="button" onClick={handleIncreaseQuantity}>+</button>
  </div>
  )
}

export default Quantity;