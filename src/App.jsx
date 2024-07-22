import './App.css'
import {init} from './socketApi'
import Palette from './components/Palette'
import { useEffect } from 'react'

function App() {

  useEffect(()=>{
    init();
  },[]);

  return (
    <>
      <Palette/>
    </>
  )
}

export default App
