import React,{useState,useEffect} from 'react'
import { Lists } from '../Lists/Lists'
import { typeList } from '../constAndFunctions/entries/typeList'
import { tabla_st } from '../constAndFunctions/entries/usuario'
import { CitasInput } from '../entries/inputsEntries/CitasInput'
import { Usuario } from '../Usuario/Usuario'
import { LHoras } from './LHoras'
import { getDatos } from '../constAndFunctions/constAndFunions'
import { onSubmit } from '../constAndFunctions/entries/onSubmit'
import { BarraIngreso } from './../BarraEstado/BarraIngreso'


export function Citas(){
    const [entries,setEntries]=useState(tabla_st)
    async function llenarCitas(){
        setEntries({...entries,citas:await getDatos({type:"",dbeg:entries.fecha,dend:entries.fecha,typed:"entry",send:true})})
    }
    function guardar(){
        let datos = {
            serviceId:entries.serviceId,
            fecha:entries.fecha,
            hora:entries.hora,
            workerId:entries.workerId,
            telephone:entries.telephone
        }
        
        let encontro = entries.citas.slice(1).find(item=>item.date.split(" ")[1].split(":")[0]===entries.hora.split(":")[0])
        
        if(entries.hora && entries.workerId && encontro===undefined && entries.telephone){
            entries.citas.length>=1?onSubmit(datos,true)?setEntries({ ...entries, estado: "Registro Guardado Exitosamente",estadoI:true}):setEntries({ ...entries, estado: "Error Al guardar el registro",estadoI:false}):setEntries({ ...entries, estado: "Debe consultar la fecha y el trabajador",estadoI:false})
        }else {
            encontro?setEntries({ ...entries, estado: "la hora ya esta ocupada",estadoI:false}):
            setEntries({ ...entries, estado: "Debe llenar los datos hora, servicio y usuario",estadoI:false})
        }
        
    }
    
    useEffect(()=>"",[entries])
    return(
        <>
            <div className="d-flex flex-row justify-content-around">
                <div className='d-flex flex-column'>
                    <Lists typeList={typeList['worker']} listStP={entries}/>
                    <CitasInput setStateGen={setEntries} stateGen={entries} nombre={"Fecha"} iden={"fecha"} tipo={"date"} />
                    <div className="p-2">
                        <button onClick={llenarCitas} type='button' className="btn btn-info w-100" >Consultar</button>
                    </div>
                </div>                
                <div className='d-flex flex-column'>
                    <Lists typeList={typeList['service']} listStP={entries} />
                    <CitasInput setStateGen={setEntries} stateGen={entries} nombre={"Hora"} iden={"hora"} tipo={"time"} />
                    <div className="p-2">
                        <button type='button' onClick={guardar} className="btn btn-primary w-100" >Guardar</button>   
                    </div>
                </div>
                <div className='d-flex flex-column'>
                    <Usuario entries={entries} setEntries={setEntries}/>
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className='d-flex flex-column w-100 p-2'>
                    <BarraIngreso estado={entries} />
                    <LHoras datos={entries} />
                </div>                
            </div>
        </>
    )
}