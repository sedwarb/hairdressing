import React,{useState} from 'react'
import {Lists} from '../Lists/Lists'
import {typeList} from '../constAndFunctions/entries/typeList'
import {TablaTemporal} from '../TablaTemporal/TablaTemporal'
import {typeTable} from "../constAndFunctions/constAndFunions.js"
import {guardar} from '../constAndFunctions/entries/guardar'
import {tabla_st} from '../constAndFunctions/entries/usuario'
import {Usuario} from '../Usuario/Usuario'

export function Oentries(){
    const [entries,setEntries]=useState(tabla_st)
    const [tabla,setTabla]=useState([])
    const [css,setCss] = useState({mostrado:false})
    function handleChange(e){
        setEntries({...entries,[e.target.id]:e.target.value})
    }
    return(
        <>
            <div className="d-flex flex-row justify-content-center"><h2>Registro de Servicios</h2></div>
            <div className="d-flex flex-row justify-content-center">
                <div className="d-flex flex-column">
                    <Lists typeList={typeList['service']} listStP={entries} />
                    <div className="p-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">Servi. M.</span>
                            </div>
                            <input onChange={e => handleChange(e)} type="text" className="form-control" id="manualEntry" aria-describedby="basic-addon3" />
                        </div>
                    </div>                    
                </div>
                <div className="d-flex flex-column">
                    <Usuario entries={entries} setEntries={setEntries} css={css} setCss={setCss}/>
                    <div className="p-2"><button onClick={()=>guardar(entries,setTabla,setEntries,tabla)} type='button' className="btn btn-primary w-100" hidden={css.mostrado} >Guardar</button></div>
                </div>
                <div className="d-flex flex-column">
                    <Lists typeList={typeList['worker']} listStP={entries} />
                    <div className="p-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">Precio. M.</span>
                            </div>
                            <input onChange={e => handleChange(e)} type="number" className="form-control" id="amountEntry" aria-describedby="basic-addon3" />
                        </div>
                    </div>
                </div>
            </div>            
            <div className='mt-3 px-2' >                
                <TablaTemporal encabezado={typeTable.entries} dat={tabla} estilo={"table table-striped"}/>
            </div>
        </>
    )
}