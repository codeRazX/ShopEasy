import { useLoaderData } from "react-router-dom";
import Item from "../Components/Item";
import Footer from '../Components/Footer';

const Store = () => {
  const products = useLoaderData(); 

  return (
    <>
    <main className="store container">
      <section className="store__products">
        <h2>Products</h2>

        <div className="store__products__grid">
         {products.map(prod => {
          return <Item key={prod.id}  {...prod}/>
        })}
        </div>
      </section>
     
    </main>
    < Footer />
    </>
  )

}


export default Store;