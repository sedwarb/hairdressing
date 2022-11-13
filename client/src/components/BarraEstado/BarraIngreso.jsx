import React from 'react'

export function BarraIngreso({estado}){
    return(
        <>
            <div>
                <span className={estado.estadoI?'text-info':'text-danger'}>{`${estado.estado?"Atencion!!: ":""}`}</span>
                <span className={estado.estadoI?'text-success':'text-warning'}>{`${estado.estado?estado.estado:""}`}</span>
            </div>
        </>
    )
}