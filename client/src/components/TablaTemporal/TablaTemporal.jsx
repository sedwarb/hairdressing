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
                                    <tr key={`${dat1[encabezado[0].name]}${i}`}>
                                        {
                                            encabezado && encabezado.map(
                                                (t1,j)=>{
                                                    return (
                                                        <>
                                                            {
                                                                encabezado.name === "worker" || encabezado.name === "service" ?                                                                    
                                                                    <td key={`${dat1[t1.name]}${j}`}>
                                                                        {
                                                                            dat1[t1.name]["nombre"]
                                                                        }
                                                                    </td> :
                                                                    <td key={`${dat1[t1.name]}${j}`}>
                                                                        {
                                                                            dat1[t1.name]
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