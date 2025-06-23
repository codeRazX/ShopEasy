import { useItem } from "../hooks/useItem";
import Quantity from "./Quantity";

const Item = ({image, id, price, title, rating:{rate}})=> {
 
  let currentRate = Math.round(rate);
  const {quantity, setQuantity, handleChange, handleDelete, handleSubmit, toggleAction, setToggleAction} = useItem(id, price, image, title);

  return (

    <div className="item">
      <img src={image} alt={`Image ${title}`} loading="lazy"/>
      <h3>{title}</h3>

      <div className="item__info">      
        <span className="item__info__rate">
          {[...Array(5)].map(() => {
            --currentRate;
            return <svg key={currentRate} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path fill={currentRate > 0? '#FFC107': '#CCCCCC'} d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg> 
          })}
        </span>

        <h3>${price}</h3>
      </div>

      <div className="item__quantity" onSubmit={handleSubmit}>
        < Quantity 
          setQuantity={setQuantity}
          quantity={quantity}
          handleChange={handleChange}
          toggleAction={toggleAction}
          setToggleAction={setToggleAction}
        />
          <button type="button" 
          className={toggleAction ? "item__quantity__btn__delete" : "item__quantity__btn"}
          onClick={toggleAction? handleDelete : handleSubmit}
          >{toggleAction ? "Remove from Cart" : "Add to Cart"}
          </button>
      </div>
    </div>
    
  )
}

export default Item;