import React, { useState,useEffect } from 'react'
import {getDatos} from '../constAndFunctions/constAndFunions'

export function Table({typeTable,search}){
    const [dates,setDates] = useState([]);
    useEffect(async ()=>{
        setDates(await getDatos(search))
    },[search])
    return(
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        {typeTable && typeTable.map(title=><th scope="col" key={title.str}>{title.str}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {dates && dates.map((date,i)=><tr key={`${date.phoneNumber}${i}`}>{typeTable && typeTable.map((type,i)=><td key={`${type.sname===null?date[type.name]:date[type.name][type.sname]}${i}`}>{type.sname===null?date[type.name]:date[type.name][type.sname]}</td>)}</tr>)}
                </tbody>
            </table>
        </>
    )
}