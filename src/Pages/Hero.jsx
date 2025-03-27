import React from 'react';
import { Main } from '../components/Main';
import { Header } from '../components/Header';

const Hero = () => {
    return (
        <div className='flex flex-col h-screen pt-2  box-border  border-yellow-400 border-1'>
            <Header />

            <Main />

        </div>
    )
}

export { Hero }