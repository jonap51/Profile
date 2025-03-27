import React from 'react';
import { Footer } from './components/Footer';
import { AboutMe } from './pages/AboutMe';
import { Contact } from './pages/Contact';
import { Hero } from './pages/Hero';

const App = () => {

    /*   <AboutMe />
            <Contact />
            <Footer />
*/

    return (
        <div className='flex flex-col bg-violeta-oscuro-style px-8 '>
            <Hero />
        </div>
    )
}
export { App }