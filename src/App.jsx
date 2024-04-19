import React from 'react'
import './App.css'
import Navbar from './containers/navbar/Navbar'
import Header from './containers/header/Header'
import Description from './containers/description/Description'
import InformationsSection from './containers/informationsSection/InformationsSection'
import Specifications from './containers/specifications/Specifications'
import Advertising from './containers/advertising/Advertising'
import Suggestions from './containers/suggestions/Suggestions'
import Footer from './containers/footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Description/>
      <InformationsSection/>
      <Specifications/>
      <Advertising/>
      <Suggestions/>
      <Footer/>
    </>
  )
}

export default App
