import React from 'react'
import { AboutMe } from './pages/AboutMe'
import { Contact } from './pages/Contact'
import { Hero } from './pages/Hero'
import { Proyects } from './pages/Proyects'

const App = () => {
  /*

            <Footer />
*/

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
