import React from 'react';
import { Footer } from './components/Footer';
import { AboutMe } from './pages/AboutMe';
import { Contact } from './pages/Contact';
import { Hero } from './pages/Hero';
import { MainFront } from './components/MaintFront';

const App = () => {

    /*     <Hero />
      <AboutMe />
            <Contact />
            <Footer />
   
*/

    return (
        <div className='flex flex-col bg-black '>

            <MainFront />
        </div>
    )
}
export { App }