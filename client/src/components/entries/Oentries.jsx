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
    telephone:null,
    nomUsu:null
}

//Este componente solo sera para entradas, las citas sera otro componente
export function Oentries(){
    const [entries,setEntries]=useState(tabla_st)
    const [tabla,setTabla]=useState([])
    const [css,setCss] = useState({mostrado:false})
    function handleChange(e){
        setEntries({...entries,[e.target.id]:e.target.value})
    }
    function validar_inma(){
        if(entries.serviceId==="inma" && (!entries.manualEntry || !entries.amountEntry)){
            return false
        }else return true
    }
    function mostrar(){
        if(css.mostrado){
            let id=entries.telephone
            document.querySelector('#telephone').value=""
            setEntries({...entries,telephone:id})
            document.querySelector('#userName').value=""
        }
        css.mostrado?setCss({...css,mostrado:false}):setCss({...css,mostrado:true})
    }
    function guardar(){
        if(entries.telephone!==null ? entries.nomUsu===null ? false : true : true){
            if(entries.serviceId==="inma"?validar_inma():true){
                if(entries.workerId && entries.serviceId){                
                    let fecha = new Date()
                    setTabla([...tabla,
                    {
                        date: `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`,
                        manualEntry: entries.serviceId.valor === "inma" ? entries.manualEntry : "No Aplica",
                        amountEntry: entries.serviceId.valor === "inma" ? entries.amountEntry : entries.serviceId.monto,
                        user: entries.telephone ? entries.nomUsu : "Usuario Generico",
                        worker: entries.workerId.nombre,
                        service: entries.serviceId.nombre
                    }
                    ])
                    setEntries({ ...entries, userName: "" })
                    document.querySelector('#manualEntry').value = ""
                    document.querySelector('#amountEntry').value = ""
                    document.querySelector('#telephone').value = ""
                    document.querySelector('#userName').value = ""
                    onSubmit(entries)
                    setEntries({ ...entries, telephone: null,nomUsu:null })
                }else alert("Debe completar los datos Servicio y Trabajador")
            }else alert("Debe llenar los campos manuales")
        }else setEntries({ ...entries, telephone: null,nomUsu:null })
    }
    return(
        <>
            <h2>Registro de Servicios</h2>
            <div className="d-flex flex-row">
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
                    <div className="p-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">ID</span>
                            </div>
                            <input onClick={mostrar} type="text" className="input-group-text" id="basic-addon3" data-toggle="collapse" data-target="#collapseUser" aria-controls="collapseExample" placeholder='Identificacion'/>
                        </div>
                        <div className="collapse" id="collapseUser">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">ID</span>
                                </div>
                                <input onChange={e => handleChange(e)} type="text" className="form-control" id="telephone" aria-describedby="basic-addon3" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">Nombre</span>
                                </div>
                                <input onChange={e => handleChange(e)} type="text" className="form-control" id="userName" aria-describedby="basic-addon3" />
                            </div>
                            <div>
                                <button type='button' onClick={(e) => verificarUsuario(entries,e)} className="btn btn-success w-100">{entries.findUser ? "Guardar Usuario" : "Buscar Usuario"}</button>
                            </div>
                        </div>
                    </div>
                    <div className="p-2"><button onClick={guardar} type='button' className="btn btn-primary w-100" hidden={css.mostrado} >Guardar</button></div>
                </div>
                <div className="d-flex flex-column">
                    <Lists typeList={typeList['worker']} listStP={entries} />
                    <div className="p-2">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">Precio. M.</span>
                            </div>
                            <input onChange={e => handleChange(e)} type="text" className="form-control" id="amountEntry" aria-describedby="basic-addon3" />
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