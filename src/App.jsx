import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <div className='top'>
          <div className='header-container'>
            <h1 className='header'>Artistry Cards</h1>
          </div>
            <h4 className='description'>
              Explore famous artworks, techniques, and art history with these interactive flashcards:
            </h4>
            <p className='card-count'>10 Cards</p>
        </div>
      <Card />
    </div>
  )
}

export default App
