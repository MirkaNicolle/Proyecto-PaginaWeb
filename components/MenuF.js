import React from 'react';
import './MenuF.css';

function MenuF() {
    return (
        <div>
            <h2>Accesorios destacados</h2>
            <div className='contenedormediano'>
                <div className='caja'>
                    <h3>MagSafe</h3>
                    <p>Súmale una cartera o una</p>
                    <p>funda magnética. O las dos.</p>
                    <p>Y disfruta también de una carga</p>
                    <p>inalámbrica más rápida.</p>
                </div>
                <figure >
                    <img src='../resorces/magsafe.PNG' className='magsafe'></img>
                </figure>
            </div>
            <div className='contenedormediano'>
                <figure >
                    <img src='../resorces/airpods1.PNG' className='airpods'></img>
                </figure>
                <div className='caja2'>
                    <h3>AirPods</h3>
                    <p>Los AirPods se conectan</p>
                    <p>fácilmente y te siguen el ritmo</p>
                    <p>todo el día.</p>
                    <br></br>
                    <p className='subtti'>Más información</p>
                </div>
            </div>
            <h2>¿Por qué el iPhone es único?</h2>
            <div className='contenedorgrande'>
                <div className='caja3'>
                    <p className='ios'>iOS 14</p>
                    <h3>Como nuevo. Como siempre.</h3>
                    <br></br>
                    <p className='subtti'>Más información</p>
                </div>
            </div>
            <div className='contenedordoble'>
                <div className='cambiate'>
                    <div className='caja4'>
                        <h3>Cámbiate a iPhone</h3>
                        <p>Hay muchas razones para cambiarse a iPhone.</p>
                        <p>Y es tan fácil que no podrás creerlo.</p>
                        <br></br>
                        <p className='subtti'>Más información</p>
                    </div>
                    <figure >
                        <img src='../resorces/cambiate.PNG' className='cambiatei'></img>
                    </figure>
                </div>
                <div className='privacidad'>
                    <figure >
                        <img src='../resorces/privacidad.PNG' className='pri'></img>
                    </figure>
                    <div className='caja5'>
                        <h3>Privacidad</h3>
                        <p>Tú decides lo que compartes.</p>
                        <br></br>
                        <p className='subtti'>Más información</p>
                    </div>
                </div>
            </div>
            <h2>Aprovecha al máximo tu iPhone.</h2>
            <div className='contenedordoble1'>
                <figure >
                    <img src='../resorces/one.PNG' className='one'></img>
                </figure>
                <div className='caja6'>
                    <figure >
                        <img src='../resorces/onet.PNG' className='one1'></img>
                    </figure>
                    <p className='big'>Disfruta cuatro servicios de</p>
                    <p className='big'>Apple en uno. Y aprovecha más</p>
                    <p className='big'>por menos.</p>
                    <br></br>
                    <p className='subtti'>Prueba gratis3</p> <p className='subtti'>Más información</p>
                </div>
            </div>
            <div className='contenedordoble'>
                <div className='appletv'>
                    <div className='caja7'>
                        <figure >
                            <img src='../resorces/appletvt.PNG' className='tv'></img>
                        </figure>
                        <p className='big1'>Obtén 1 año gratis de</p>
                        <p className='big1'>Apple TV+ al comprar un iPhone.</p>
                        <br></br>
                        <div className='areglar'>
                            <p className='subtti'>Prueba gratis4</p>
                            <p className='linease'>-------</p>
                            <p className='subtti'>Más información</p>
                        </div>    
                    </div>
                </div>
                <div className='arcade'>
                    <div className='caja8'>
                        <figure >
                            <img src='../resorces/arcadet.PNG' className='arcadet'></img>
                        </figure>
                        <p className='big2'>Obtén 3 meses gratis de</p>
                        <p className='big2'>Apple Arcade al comprar un iPhone.</p>
                        <br></br>
                        <p className='subtti'>Prueba gratis5</p>
                        <p className='subtti'>Más información</p>
                    </div>
                </div>
            </div>
            <div className='contenedordoble2'>
                <div className='caja9'>
                    <figure >
                        <img src='../resorces/musict.PNG' className='music'></img>
                    </figure>
                    <p className='big2'>70 millones de canciones.</p>
                    <p className='big2'>3 meses gratis.</p>
                    <br></br>
                    <div className='areglar'>
                        <p className='subtti'>Prueba gratis4</p>
                        <p className='linease'>----</p>
                        <p className='subtti'>Más información</p>
                    </div>    
                </div>
            </div>
            <div className='numeros'>
                <p className='numero'>1. La pantalla tiene esquinas redondeadas que siguen el elegante diseño curvo del teléfono, y las esquinas se encuentran dentro de un rectángulo estándar. Si se mide en forma de rectángulo estándar, la pantalla tiene 5.42 pulgadas (iPhone 12 mini), 6.06 pulgadas (iPhone 12 Pro, iPhone 12 y iPhone 11) o 6.68 pulgadas (iPhone 12 Pro Max) en diagonal. El área real de visualización es menor.</p>
                <br></br>
                <p className='numero'>2. Se requiere un plan de datos. 5G y LTE están disponibles en algunos mercados y a través de operadores específicos. Las velocidades se basan en un rendimiento teórico y varían según las condiciones del lugar y el operador. Para obtener más información sobre la compatibilidad con 5G y LTE, comunícate con tu operador y visita apple.com/la/iphone/cellular.</p>
                <br></br>
                <p className='numero'>3. La prueba gratis de Apple One incluye sólo los servicios que no estés usando actualmente mediante una prueba gratis o suscripción. El plan se renovará automáticamente hasta que se cancele. Sujeto a restricciones y otros términos.</p>
                <br></br>
                <p className='numero'>4. $4.99 al mes al finalizar el periodo de prueba gratis. Una suscripción por grupo de Compartir en Familia. Promoción válida durante 3 meses después de la activación de un dispositivo elegible. El plan se renovará automáticamente hasta que se cancele. Sujeto a restricciones y otros términos. Los precios están expresados en dólares estadounidenses y pueden variar por país. Se requiere una tarjeta de crédito internacional para completar la suscripción.</p>
                <br></br>
                <p className='numero'>5. $4.99 al mes al finalizar el periodo de prueba gratis. Sin compromisos. El plan se renovará automáticamente hasta que se cancele. Los precios están expresados en dólares estadounidenses y pueden variar por país. Se requiere una tarjeta de crédito internacional para completar la suscripción.</p>
                <br></br>
                <p className='numero'>6. Sólo para nuevas suscripciones. El plan se renovará automáticamente al finalizar el periodo de prueba.</p>
                <p className='numero'>_________________________________________________________________________________________________________________________________________________</p>
            </div>
            <div className='mas'>
                <div className='mas1'>
                    <figure className='masd'>
                        <img src='../resorces/mas.PNG' className='masf'></img>
                    </figure>
                    <br></br>
                    <p className='numero3'>Descubrir</p>
                    <p className='numeroh'>Mac</p>
                    <p className='numeroh'>iPad</p>
                    <p className='numeroh'>iPhone</p>
                    <p className='numeroh'>Watch</p>
                    <p className='numeroh'>TV</p>
                    <p className='numeroh'>Music</p>
                    <p className='numeroh'>AirPods</p>
                    <p className='numeroh'>iPod touch</p>
                </div>
                <div className='mas1'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className='numero3'>Servicio</p>
                    <p className='numeroh'>Apple Music</p>
                    <p className='numeroh'>Apple TV+</p>
                    <p className='numeroh'>Apple Arcade</p>
                    <p className='numeroh'>iCloud</p>
                    <p className='numeroh'>Apple One</p>
                    <p className='numeroh'>Apple Books</p>
                    <p className='numeroh'>App Store</p>
                    <br></br>
                    <p className='numero3'> Cuenta</p>
                    <p className='numeroh'>Administrar tu Apple ID</p>
                    <p className='numeroh'>iCloud.com</p>
                </div>
                <div className='mas1'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className='numero3'>Para la empresa</p>
                    <p className='numeroh'>Apple y la empresa</p>
                </div>
                <div className='mas1'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className='numero3'>Valores de Apple</p>
                    <p className='numeroh'>Accesibilidad</p>
                    <p className='numeroh'>Medio Ambiente</p>
                    <p className='numeroh'>Privacidad</p>
                    <br></br>
                    <p className='numero3'>Acerca de Apple</p>
                    <p className='numeroh'>Newsroom</p>
                    <p className='numeroh'>Directivos de Apple</p>
                    <p className='numeroh'>Oportunidades de empleo</p>
                    <p className='numeroh'>Inversionistas</p>
                    <p className='numeroh'>Eventos</p>
                    <p className='numeroh'>Contactar a Apple</p>
                </div>
            </div>
            <div className='semi'>
                <p className='numero2'>Busca un distribuidor</p>
                <p className='linease'>-</p>
                <p className='numero'>cerca de ti.</p>
            </div>
            <div className='semi2'>
            <p className='numero'>_________________________________________________________________________________________________________________________________________________</p>
            </div>
            <div className='final'>
                <p className='numero'>Copyright © 2021 Apple Inc. Todos los derechos reservados.</p>
                <p className='linease'>----</p>
                <p className='numeroh'>Política de privacidad | Aviso legal | Mapa del sitio</p>
                <p className='numeroh'>América Latina y el Caribe | English</p>
            </div>
        </div>
    )
}

export default MenuF



