import React from 'react';
import { Main } from '../components/Main';
import { Header } from '../components/Header';

const Hero = () => {
    return (
        <div className='flex flex-col h-screen box-border bg-black overflow-hidden '>
            <Header />
            <Main />
        </div>
    )
}

export { Hero }