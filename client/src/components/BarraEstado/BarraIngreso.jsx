import React from 'react'

export function BarraIngreso({estado}){
    function info(estadoI){
        if(estadoI===true) return "Informacion: "
        else return "Atencion!!: "
    }
    return(
        <>
            <div>
                <span className={estado.estadoI?'text-info':'text-danger'}>
                    {`${estado.estado?info(estado.estadoI):""}`}
                </span>
                <span className={estado.estadoI?'text-success':'text-warning'}>
                    {`${estado.estado?estado.estado:""}`}
                </span>
            </div>
        </>
    )
}