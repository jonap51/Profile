import React from 'react';
import { Footer } from './components/Footer';
import { AboutMe } from './pages/AboutMe';
import { Contact } from './pages/Contact';
import { Hero } from './pages/Hero';
import { Proyects } from './pages/Proyects';

const App = () => {

    /*     
           
            <Contact />
            <Footer /> 
*/

    return (

        <div className='flex flex-col bg-white '>
            <Hero />
            <AboutMe />
            <Proyects />

        </div>
    )
}
export { App }