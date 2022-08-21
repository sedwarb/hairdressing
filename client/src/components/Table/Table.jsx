import React, { useState,useEffect } from 'react'
import {DB_HOST} from '../constAndFunctions/constAndFunions'

export function Table({typeTable,search}){
    const [dates,setDates] = useState([]);
    useEffect(()=>{
        if(search.type!==""){
            fetch(`http://${DB_HOST}:3001/${search.type}`)
            .then(r => r.json())
            .then(resp => setDates(resp))
            .catch(error => console.log(`Error: ${error}`)) 
        }else if(search.send){
            fetch(`http://${DB_HOST}:3001/entries?dateIni=${search.dbeg}%2000:00:00.110%20-0500&&dateEnd=${search.dend}%2023:59:59.110%20-0500&&${search.typed}=${search.tdate}`)
            .then(r => r.json())
            .then(resp => setDates(resp))
            .catch(error => console.log(`Error: ${error}`))
        }
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