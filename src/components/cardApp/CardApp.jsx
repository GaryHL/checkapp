import React from 'react'
import { CardGlobal, Cajas, CajasCategorias, Cajasimagen, Imagen, Categorias, EstrellasA, EstrellasN } from './CarApp_style'
import Data from '../../data/dataApps.json'




const CardApp = () => {

    
    const datos = Data.data.apps;
    console.log(datos)
    return (
        <div>{datos.map((item) => {
            return <CardGlobal>
                <Cajasimagen>
                    <Imagen src={item.app_icon} />
                </Cajasimagen>
                <Cajas>
                    <Cajas><h1>{item.app_name}</h1></Cajas>
                    <Categorias>
                        <CajasCategorias>{item.app_category}</CajasCategorias>
                    </Categorias>
                    <Categorias>
                        <CajasCategorias>{item.platforms}</CajasCategorias>
                    </Categorias>
                    <Cajas>
                        {item.rating===5 ?
                            <EstrellasA>★★★★★</EstrellasA>: null
                        }
                        {item.rating===4 ?
                            <EstrellasA>
                                ★★★★
                                <div className='estrellasN'>★</div>
                            </EstrellasA> : null
                        }
                        {item.rating===3 ?
                            <EstrellasA>
                                ★★★
                                <div className='estrellasN'>★★</div>
                            </EstrellasA>: null
                        }
                        {item.rating===2 ?
                            <EstrellasA>
                                ★★
                                <div className='estrellasN'>★★★</div>
                            </EstrellasA>: null
                        }
                        {item.rating===1 ?
                            <EstrellasA>
                                ★
                                <div className='estrellasN'>★★★★</div>
                            </EstrellasA>: null
                        }
                    </Cajas>
                </Cajas>
            </CardGlobal>
        })}


        </div>
    )
}

export default CardApp