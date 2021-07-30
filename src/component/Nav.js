import React from 'react';

import Radio from './Radio';
import Logo from '../image/park_blanco.png'



const Nav = ()=>{

   

 

    return(
        <>
        <header className='header'>
            <nav className='header__nav'>
                <img src={Logo} alt='Radio Park Fm Brand'/>

                <h1>Una  Señal  en  la  Tierra.<span>&#160;</span></h1>
               
                <Radio/>
            </nav>
        </header>
        </>
    )
};


export default Nav;