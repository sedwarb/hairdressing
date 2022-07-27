import React, { useState,useEffect } from 'react'

export function Table(){
    const [dates,setDates] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3001/worker`)
        .then(r=>r.json())
        .then(resp=>setDates(resp))
        .catch(error=>console.log(`Error: ${error}`)) 
    },[])    
    return(
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {dates && dates.map(date=><tr><td>{date.id}</td><td>{date.fullname}</td></tr> ) }
                </tbody>
            </table>
        </>
    )
}