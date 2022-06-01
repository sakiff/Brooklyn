import Navbar from './componenets/Navbar'
import Hero from './componenets/Hero'
import GlobalStyle from './globalStyles'
import { SliderData } from './data/SliderData'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />
    </>
  )
}

export default App
