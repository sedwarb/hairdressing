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
                    <span>{`${datos.length} - `}</span>
                    <span>
                        <span className='text-info'>{`Filtro: `}</span>
                        <span>{`${estado.dbeg} a ${estado.dend} - `}</span>
                        <span className='text-info'>{`${estado.typed==="workerId"?" ID Trabajador: ":""}`}</span>
                        <span>{` ${estado.typed==="workerId"?estado.tdate:""}`}</span>
                        <span className='text-info'>{` ${estado.typed==="phoneNumber"?" ID Cliente: ":""}`}</span>
                        <span>{` ${estado.typed==="phoneNumber"?estado.tdate:""}`}</span>
                        <span className='text-info'>{` ${estado.typed==="entry"?" Citas":""}`}</span>
                    </span>
                    <span>{``}</span>
                </div>:
                <div></div>
            }
        </>
    )
}