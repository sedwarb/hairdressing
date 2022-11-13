import React, { useState,useEffect } from 'react'
import {getDatos} from '../constAndFunctions/constAndFunions'
import { capitalizar } from './../constAndFunctions/varios_usos/capitalizar'
import { BarraEstado } from '../BarraEstado/BarraEstado';

export function Table({typeTable,search}){
    const [dates,setDates] = useState([]);
    useEffect(async ()=>{
        setDates(await getDatos(search))
    },[search])
    return(
        <>
            <BarraEstado estado={search} datos={dates} />
            <table className="table table-striped">
                <thead>
                    <tr>
                        {typeTable && typeTable.map(title=><th scope="col" key={title.str}>{title.str}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        dates && dates.map(
                            (date,i)=>{
                                return (
                                    i===0 && search.type===""?
                                        <tr></tr>:
                                        <tr key={`${date.phoneNumber}${i}`}>
                                            {
                                                typeTable && typeTable.map(
                                                    (type,i)=>{
                                                        return (
                                                            <td key={`${type.sname===null?date[type.name]:date[type.name][type.sname]}${i}`}>
                                                                {
                                                                    type.sname===null?
                                                                        type.name==="date"?
                                                                            search.typed==="entry"?date[type.name]:date[type.name]:
                                                                        capitalizar(date[type.name])
                                                                    :capitalizar(date[type.name][type.sname])
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