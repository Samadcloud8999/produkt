import { useState } from 'react'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Slaider } from './components/Slaider/Slaider'
import { Shop } from './components/Shoop/Shop'
import { Aboutdog } from './components/Aboutdog/Aboutdog'
import { Footer } from './components/Foooter/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
      <About /> 
     <Slaider />
     <Shop />
     <Aboutdog />
     <Footer />
    </>
  )
}

export default App
