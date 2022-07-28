import React, { useState,useEffect } from 'react'

export function Table({typeTable,search}){
    const [dates,setDates] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3001/${search}`)
        .then(r=>r.json())
        .then(resp=>setDates(resp))
        .catch(error=>console.log(`Error: ${error}`)) 
    },[search])    
    return(
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        {typeTable && typeTable.map(title=><th scope="col">{title.str}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {dates && dates.map(date=><tr>{typeTable && typeTable.map(type=><td>{date[type.name]}</td>)}</tr>)}
                </tbody>
            </table>
        </>
    )
}