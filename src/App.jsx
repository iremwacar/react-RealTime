import './App.css'
import {init,subscribe} from './socketApi'
import Palette from './components/Palette'
import { useEffect, useState } from 'react'

function App() {

  const [activeColor,setActiveColor]=useState('')


  useEffect(()=>{
    init();
    subscribe((color)=>{
      setActiveColor(color)
    });
  },[]);

  return (
    <>
    <div className='App' style={{backgroundColor:activeColor}}>
      <Palette/>
    </div>
      
    </>
  )
}

export default App
