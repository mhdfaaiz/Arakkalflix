import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { action, originals, comedy, horror, romance } from './urls'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={originals} title='ARAKKALFLIX ORIGINALS' />
      <RowPost url={action} title='ACTION' isSmall />
      <RowPost url={horror} title='HORROR' isSmall />
      <RowPost url={comedy} title='COMEDY' isSmall />
      <RowPost url={romance} title='ROMANCE' isSmall />
    </div>
  )
}

export default App
