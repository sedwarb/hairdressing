import React from 'react'

export function BarraEstado({estado,datos}){
    return(
        <>
            {
                estado.type===""?
                <div>
                    <span className='text-info'>{`Total: `}</span>
                    <span>{`${datos.length>0?datos[0].sumaManual+datos[0].sumaServicio:0} - `}</span>
                    <span className='text-info'>{`Servicios: `}</span>
                    <span>{`${datos.length}`}</span>
                </div>:
                <div></div>
            }
        </>
    )
}