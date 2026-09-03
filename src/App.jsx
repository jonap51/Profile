import React from 'react'
import { AboutMe } from './Pages/AboutMe'
import { Contact } from './Pages/Contact'
import { Hero } from './Pages/Hero'
import { Proyects } from './Pages/Proyects'

const App = () => {

  return (
    <div className='flex flex-col bg-white'>
      <Hero />
      <AboutMe />
      <Proyects />
      <Contact />
    </div>
  )
}
export { App }
