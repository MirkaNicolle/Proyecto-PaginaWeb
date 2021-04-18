import React from 'react';
import './MenuC.css';

function MenuC() {
    return (
        <div>
            <p className='t'>iPhone 12 y iPhone 12 mini</p>
            <p className='subt'>Súper. Mega. Rápido.</p>
            <p className='subtt'>Más información</p>
            <video muted autoPlay>
                <source src="../resorces/large.mp4" type="video/mp4"></source>
            </video>
        </div>
    )
}

export default MenuC
