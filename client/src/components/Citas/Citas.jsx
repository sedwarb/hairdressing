import React,{useState} from 'react'
import { Lists } from '../Lists/Lists'
import { typeList } from '../constAndFunctions/entries/typeList'
import { tabla_st } from '../constAndFunctions/entries/usuario'
import { CitasInput } from './InputsEntries/CitasInput'
import { UsuarioCitas } from '../Usuario/UsuarioCitas'
import { LHoras } from './LHoras'
import { BarraIngreso } from './../BarraEstado/BarraIngreso'
import { guardar } from '../constAndFunctions/citas/guardar'
import { llenarCitas } from '../constAndFunctions/citas/llenarCitas'


export function Citas(){
    const [entries,setEntries]=useState(tabla_st)
    return(
        <>
            <div className="d-flex flex-row justify-content-around">
                <div className='d-flex flex-column p-2'>
                    <Lists typeList={typeList['worker']} listStP={entries}/>
                    <CitasInput
                        datos={{set:setEntries,sta:entries,nombre:"Fecha",tipo:"date"}}
                    />
                    <button 
                        onClick={()=>llenarCitas(entries,setEntries)} 
                        type='button' 
                        className="btn btn-info w-100" >
                            Consultar
                    </button>
                </div>
                <div className='d-flex flex-column' hidden={false}>
                    {
                        entries.oculto1===false?
                            <div></div>:
                            <UsuarioCitas entries={entries} setEntries={setEntries}/>
                    }
                </div>
                {
                    entries.oculto2===false?
                        <div></div>:
                        <div className='d-flex flex-column p-2' hidden={false}>
                            <Lists typeList={typeList['service']} listStP={entries} />
                            <CitasInput
                                datos={{set:setEntries,sta:entries,nombre:"Hora",tipo:"time"}}
                            />
                            <button 
                                onClick={()=>guardar(entries,setEntries)}
                                type='button'
                                className="btn btn-primary w-100" >
                                    Guardar
                            </button>
                        </div>
                }
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