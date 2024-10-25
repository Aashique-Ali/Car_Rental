import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Rent from "./components/Rent"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Rent />
    </>
  )
}

export default App
