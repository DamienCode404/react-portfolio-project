import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import School from './components/School'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {

  return (

        <>
        <Sidenav />
        <Main />
        <Work />
        <School />
        <Projects />
        <Contact />
        </>

  )
}

export default App
