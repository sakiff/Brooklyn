import Navbar from './componenets/Navbar'
import Hero from './componenets/Hero'
import GlobalStyle from './globalStyles'
import { SliderData } from './data/SliderData'
import Dropdown from './componenets/Dropdown'
import { useState } from 'react'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
    </>
  )
}

export default App
