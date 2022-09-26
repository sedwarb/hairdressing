import React, { useState,useEffect } from 'react'
import {getDatos} from '../constAndFunctions/constAndFunions'

export function Table({typeTable,search}){
    const [dates,setDates] = useState([]);
    useEffect(async ()=>{
        setDates(await getDatos(search))
    },[search])
    return(
        <>
            <div>{`Total: ${dates.length>0?dates[0].sumaManual+dates[0].sumaServicio:0}`}</div>
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
                                    i===0?
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
                                                                            search.typed==="entry"?date[type.name]:date[type.name].split("T")[0]:
                                                                        date[type.name]
                                                                    :date[type.name][type.sname]
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