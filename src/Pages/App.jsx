import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const App = () => {


    return (
        <div className='flex flex-col justify-center'>
            <Header />
            <img src='/saitama.png' />
            <Footer />
        </div>
    )
}
export { App }