import React from 'react'
import { capitalizar } from './../constAndFunctions/varios_usos/capitalizar';

export function TablaTemporal({encabezado,dat,estilo}){
    return(
        <>
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
                                    <tr>
                                        {
                                            encabezado && encabezado.map(
                                                (t1,j)=>{
                                                    return (
                                                        <>
                                                            {
                                                                encabezado.name === "worker" || encabezado.name === "service" ?                                                                    
                                                                    <td key={Date.now().toString()+dat1[t1.name]["nombre"]}>
                                                                        {
                                                                            capitalizar(dat1[t1.name]["nombre"])
                                                                        }
                                                                    </td> :
                                                                    <td key={Date.now().toString()+dat1[t1.name]}>
                                                                        {
                                                                            capitalizar(dat1[t1.name])
                                                                        }
                                                                    </td>
                                                            }
                                                        </>                                                        
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