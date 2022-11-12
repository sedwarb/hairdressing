import React from 'react'

export function BarraEstado({estado,datos}){
    return(
        <>
            {estado.type===""?<div>{`Total: ${datos.length>0?datos[0].sumaManual+datos[0].sumaServicio:0}`}</div>:<div></div>}
        </>
    )
}