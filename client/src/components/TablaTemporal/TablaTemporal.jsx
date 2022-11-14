import React from 'react'
import { capitalizar } from './../constAndFunctions/varios_usos/capitalizar'
import { BarraIngreso } from '../BarraEstado/BarraIngreso'

export function TablaTemporal({encabezado,dat,estilo,state}){
    return(
        <>
            <BarraIngreso estado={state} />
            <table className={estilo?estilo:""}>
                <thead>
                    <tr>
                        {
                            encabezado && encabezado.map(
                                title=>{
                                    return (
                                        <th key={title.str}>
                                            {title.str}
                                        </th>
                                    )
                                }
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        dat && dat.map(
                            (dat1,i)=>{
                                return (
                                    <tr key={i}>
                                        {
                                            encabezado && encabezado.map(
                                                (t1,j)=>{
                                                    return (
                                                        <td key={j}>
                                                            {
                                                                encabezado.name === "worker" || encabezado.name === "service" ?
                                                                    capitalizar(dat1[t1.name]["nombre"]):
                                                                    capitalizar(dat1[t1.name])
                                                            }
                                                        </td>                                                        
                                                    )
                                                }
                                            )
                                        }
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </>
    )
}