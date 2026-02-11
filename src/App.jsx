import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <>
     <div className="imc-container">
      <div className="imc-card">
        <div className="imc-header">
          <h1>Calculadora IMC</h1>
          <p>Descubra seu índice de massa corporal</p>
        </div>

        <div className="imc-form">
          <input 
            type="number" 
            placeholder='Ex: 70' 
          />
          <input type="number" 
            placeholder='Ex: 1.75' 
          />
          <button>Calcular</button>
          <button>Limpar</button>
        </div>

      </div> {/* Fecha Card */}
     </div> {/* Fecha Container */}
    </>
  )
}

