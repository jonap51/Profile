import React from 'react';
import { Footer } from './components/Footer';
import { AboutMe } from './pages/AboutMe';
import { Contact } from './pages/Contact';
import { Hero } from './pages/Hero';
import { Proyects } from './pages/Proyects';
import { CardProjects } from './components/CardProjects';

const App = () => {

    /*       
           
            <Footer /> 
*/

    return (

        <div className='flex flex-col bg-white '>
            <Hero />
            <AboutMe />
            <Proyects />
            <Contact />

        </div>
    )
}
export { App }