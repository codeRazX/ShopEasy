import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import { useState } from "react"


function App() {
  
  const [cart, setCart] = useState([]);

  return (
    <>
     <Header cart={cart} setCart={setCart}/>
     <Outlet context={{cart, setCart}}/>
    
    </>
  )
}

export default App
