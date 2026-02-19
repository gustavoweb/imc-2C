import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <>
      <div className="imc-container">
        <div className="imc-card">
          <div className="imc-header">
            <h1></h1>
            <h1>caucolando peso corporal</h1>   </div>
          <div className='imc-form'></div>
          <input 
          type="number" 
          placeholder='ex:70'/>
          <input 
          type="number" 
          placeholder='ex:1.75'/>
          <button>Caucular</button>
          <button>limpar</button>
        </div> 
      </div> 
    </>
  )
}

