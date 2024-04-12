import React from 'react'
import Intro from './components/Intro'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import PokemonWalker from './components/Pokemon'

function App() {

  return (
      <div className='App'>
        <Intro />
        <Portfolio />
        <Contact />
        <Footer />
        <PokemonWalker />
      </div>
  )
}

export default App
