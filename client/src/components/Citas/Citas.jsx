import React,{useState,useEffect} from 'react'
import { Lists } from '../Lists/Lists'
import { typeList } from '../constAndFunctions/entries/typeList'
import { tabla_st } from '../constAndFunctions/entries/usuario'
import { CitasInput } from '../entries/inputsEntries/CitasInput'
import { Usuario } from '../Usuario/Usuario'
import { LHoras } from './LHoras'
import { getDatos } from '../constAndFunctions/constAndFunions'


export function Citas(){
    const [entries,setEntries]=useState(tabla_st)
    async function llenarCitas(){
        //setEntries({...entries,dbeg:entries.fecha,dend:entries.fecha,typed:"entry",send:true})
        setEntries({...entries,citas:await getDatos({type:"",dbeg:entries.fecha,dend:entries.fecha,typed:"entry",send:true})})
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
                        <button type='button' className="btn btn-primary w-100" >Guardar</button>   
                    </div>
                </div>
                <div className='d-flex flex-column'>
                    <Usuario entries={entries} setEntries={setEntries}/>
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className='d-flex flex-column w-100 p-2'>
                    <LHoras datos={entries} />
                </div>                
            </div>
        </>
    )
}