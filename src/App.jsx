import React, { use } from 'react'
import Nav from './Components/Nav/Nav.jsx'
import { useContext } from 'react'
import PixabayContext from './context/PixabayContext.jsx';
import Image from './Components/Image/Image.jsx'
function App() {
  return (
    <div>
      <Nav/>
      <Image/>
    </div>
  )
}

export default App