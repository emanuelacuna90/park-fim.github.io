import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';

const Radio = ()=>{
    let audio = new Audio('https://tolkien.republicahosting.net:1994/live');
    const start = () =>{
        audio.play()
    }

    const stop = () =>{
       audio.pause()
    }

    return(
        <div className='radio'>
            <FontAwesomeIcon className='radio__play' icon={faPlay} onClick={start}/>
            <FontAwesomeIcon className='radio__stop' icon={faPause} onClick={stop}/>
        </div>
    )
};

export default Radio;