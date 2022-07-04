import React, { useEffect,useState } from 'react'

export function Entries(){
    /*
    {
        date:req.body.date?req.body.date:Date(),
        manualEntry:req.body.manualEntry,
        amountEntry:req.body.amountEntry,
        entryType:req.body.entryType,
        userPhoneNumber:req.body.userPhoneNumber,
        workerId:req.body.workerId,
        serviceId:req.body.serviceId
    }
    export function tiposPokemon(){
        return fetch(`http://localhost:3001/types`)
        .then(r=>r.json())
        .catch(error=>console.log(`Error en tiposPokemon: ${error}`))
    }
    <select>
                {workers && workers.map(worker=><option value={worker.id}>{worker.fullname}</option>)}
            </select>
    */
    const [workers, setWorkers] = useState([]);
    useEffect(function () {
        fetch(`http://localhost:3001/worker`)
        .then(r=>r.json())
        .then(resp=>setWorkers(resp))
        .catch(error=>console.log(`Error: ${error}`))
    },[])
    return(
        <>            
            <div>Telefono del Usuario</div>
            <input type='search'/>
            <div>Fecha</div>
            <input type='search'/>
            <div>Trabajador</div>
            <select>
                <option value="0">Worker-1</option>
                <option value="1">Worker-2</option>
                <option value="2">Worker-3</option>
            </select>            
            <div>Servicio</div>
            <select>
                <option value="inma">Manual</option>
                <option value="1">Service-2</option>
                <option value="2">Service-3</option>
            </select>
            <div>Precio</div>
            <input type='search'/>
            <div>Entrada</div>
            <select>
                <option value="entry">Entrada Simple</option>
                <option value="meeting">Cita</option>
            </select>
            <div>Carga de trabajadores</div>
            <select>
                {workers && workers.map(worker=><option value={worker.id}>{worker.fullname}</option>)}
            </select>
        </>
    )
}