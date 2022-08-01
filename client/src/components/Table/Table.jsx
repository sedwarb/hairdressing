import React, { useState,useEffect } from 'react'

export function Table({typeTable,search}){
    //{type:"",dbeg:"",dend:"",typed:"",send:false,tdate:""}
    //date[type.name[type.sname]]
    const [dates,setDates] = useState([]);
    useEffect(()=>{
        if(search.type!==""){
            fetch(`http://localhost:3001/${search.type}`)
            .then(r => r.json())
            .then(resp => setDates(resp))
            .catch(error => console.log(`Error: ${error}`)) 
        }else if(search.send){
            fetch(`http://localhost:3001/entries?dateIni=${search.dbeg}%2000:00:00.110%20-0500&&dateEnd=${search.dend}%2023:59:59.110%20-0500&&${search.typed}=${search.tdate}`)
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
                    {dates && dates.map((date,i)=><tr key={()=>date.phoneNumber?date.phoneNumber+(i*3):date.id+(i*2)}>{typeTable && typeTable.map(type=><td>{type.sname===null?date[type.name]:date[type.name][type.sname]}</td>)}</tr>)}
                </tbody>
            </table>
        </>
    )
}