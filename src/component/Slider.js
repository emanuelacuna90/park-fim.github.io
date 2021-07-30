import React from 'react';

import Image1 from '../image/plantilla.jpg';
import Image2 from '../image/edificios.jpg';
import Image3 from '../image/edificio2.jpg';


const Slider = () =>{

    return(
        <>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Image1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={Image2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={Image3} class="d-block w-100" alt="..."/>
                </div>
            </div>
    </div>
    </>
    )
}

export default Slider;