import React from 'react'

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
                                                                            dat1[t1.name]["nombre"].toString().replace(/^\w/, (c) => c.toUpperCase())
                                                                        }
                                                                    </td> :
                                                                    <td key={Date.now().toString()+dat1[t1.name]}>
                                                                        {
                                                                            dat1[t1.name].toString().replace(/^\w/, (c) => c.toUpperCase())
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