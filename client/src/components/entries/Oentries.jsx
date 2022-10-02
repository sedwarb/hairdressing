import React,{useState} from 'react'
import {Lists} from '../Lists/Lists'
import {typeList} from '../constAndFunctions/entries/typeList'
import {TablaTemporal} from '../TablaTemporal/TablaTemporal'
import {typeTable} from "../constAndFunctions/constAndFunions.js"
import {onSubmit,verificarUsuario} from '../constAndFunctions/entries/onSubmit'

const tabla_st = {    
    //Totalmente Requerido    
    workerId:"",
    serviceId:"",
    //Opcionales
    phoneNumber:null,    
    manualEntry:null,
    amountEntry:null,    
    //no necesarios    
    date:"",    
    entryType:"",    
}

//Este componente solo sera para entradas, las citas sera otro componente
export function Oentries(){
    const [entries,setEntries]=useState(tabla_st)
    const [tabla,setTabla]=useState([])
    function handleChange(e){
        setEntries({...entries,[e.target.id]:e.target.value})
    }
    function validar_inma(){
        if(entries.serviceId==="inma" && (!entries.manualEntry || !entries.amountEntry)){
            return false
        }else return true
    }
    function guardar(){
        if(entries.serviceId==="inma"?validar_inma():true){
            let fecha = new Date()
            setTabla([...tabla,
            {
                date: `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`,
                manualEntry: entries.serviceId==="inma"?entries.manualEntry:"",
                amountEntry: entries.serviceId==="inma"?entries.amountEntry:"",
                user: entries.phoneNumber,
                worker: entries.workerId,
                service: entries.serviceId
            }
            ])
            onSubmit(entries)
        }else alert("Debe llenar los campos manuales")
    }
    return(
        <>
            <div className="d-flex flex-row">
                <Lists typeList={typeList['service']} listStP={entries} />
                <Lists typeList={typeList['worker']} listStP={entries} />
                <div className="p-2">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">ID</span>
                        </div>
                        <input onChange={e => handleChange(e)} type="text" className="form-control" id="phoneNumber" aria-describedby="basic-addon3" />
                    </div>
                </div>
                <div className="p-2"><button onClick={guardar} type='button' className="btn btn-primary">Guardar</button></div>
            </div>
            <div className="d-flex flex-row">
                <div className="p-2">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">Servi. M.</span>
                        </div>
                        <input onChange={e => handleChange(e)} type="text" className="form-control" id="manualEntry" aria-describedby="basic-addon3" />
                    </div>
                </div>
                <div className="p-2">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">Precio. M.</span>
                        </div>
                        <input onChange={e => handleChange(e)} type="text" className="form-control" id="amountEntry" aria-describedby="basic-addon3" />
                    </div>
                </div>
            </div>
            <div className='mt-3 px-2' >                
                <TablaTemporal encabezado={typeTable.entries} dat={tabla} estilo={"table table-striped"}/>
            </div>
        </>
    )
}