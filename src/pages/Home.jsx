import { Link } from "react-router-dom";

const Home = () => {

  return(
    <main className="home">
      <div className="home__picture">
        <picture>
          <source srcSet="/img/hero.avif" type="image/avif" />
          <source srcSet="/img/hero.webp" type="image/webp" />
          <img src="/img/hero.png" alt="Background Image" loading="lazy"/>
        </picture>
      </div>

      <div className="home__content container">
        <div>
          <h2>Wear Your Unique Style</h2>
          <Link to={'/store'}>Go Store</Link> 
        </div>
      </div>
    </main>
  )
}

export default Home;