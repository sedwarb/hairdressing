import React from 'react'
import { formatoMoneda } from '../constAndFunctions/varios_usos/formatoMoneda'

export function BarraEstado({estado,datos}){
    return(
        <>
            {
                estado.type===""?
                <div>
                    <span className='text-info'>{`Total: `}</span>
                    <span>
                        {
                            `${datos.length>0?
                                formatoMoneda(datos[0].sumaManual+datos[0].sumaServicio):
                                formatoMoneda(0)} - `
                        }
                    </span>
                    <span className='text-info'>{`Servicios: `}</span>
                    <span>{`${datos.length>0?datos.length-1:0}`}</span>
                </div>:
                <div></div>
            }
        </>
    )
}