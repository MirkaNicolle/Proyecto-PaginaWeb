//rfce para config determinada
import React from 'react'
import './MenuB.css';

function MenuB() {
    return (
        <div className='barraB'>
            <dl className='listaB'>
                <dt>
                    <a>
                        <figure>
                            <img src='../resorces/12pro.PNG' className='A'></img>
                        </figure>
                        <span className='titulo'>iPhone 12 Pro</span>
                        <span className='subtitulo'>Nuevo</span>
                    </a>
                </dt>
                <dt>
                    <a>
                        <figure>
                            <img src='../resorces/12.PNG' className='B'></img>
                        </figure>
                        <span className='titulo'>iPhone 12</span>
                        <span className='subtitulo'>Nuevo</span>
                    </a>
                </dt>
                <dt>
                    <a>
                        <figure>
                            <img src='../resorces/SE.PNG' className='C'></img>
                        </figure>
                        <span className='titulo'>iPhone SE</span>
                    </a>
                </dt>
                <dt>
                    <a>
                        <figure>
                            <img src='../resorces/11.PNG' className='D'></img>
                        </figure>
                        <span className='titulo'>iPhone 11</span>
                    </a>
                </dt>
                <dt>
                    <a>
                        <figure>
                            <img src='../resorces/11.PNG' className='D'></img>
                        </figure>
                        <span className='titulo'>iPhone Xr</span>
                    </a>
                </dt>
                <dt>
                    <a>
                        <figure>
                            <img src='../resorces/comparar.PNG' className='E'></img>
                        </figure>
                        <span className='titulo'>Comparar</span>
                    </a>
                </dt>
                <dt>
                    <a>
                        <figure>
                            <img src='../resorces/airpods.PNG' className='F'></img>
                        </figure>
                        <span className='titulo'>AirPods</span>
                    </a>
                </dt>
                <dt>
                    <a>
                        <figure>
                            <img src='../resorces/ios.PNG' className='G'></img>
                        </figure>
                        <span className='titulo'>iOS 14</span>
                    </a>
                </dt>
            </dl>
        </div>
    )
}

export default MenuB

