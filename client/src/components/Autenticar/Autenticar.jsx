import React,{useState} from 'react'
import { InputVarios } from '../entries/inputsEntries/InputVarios'
import { NavLink } from 'react-router-dom'

export function Autenticar(){
    const [entries,setEntries]=useState({usuario:"",key:""})
    return(
        <>
            <div className="d-flex flex-row justify-content-center">
                <h3 className="p-2">Autenticacion</h3>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <div className="d-flex flex-column">
                    <div className="p-2">
                        <InputVarios 
                            conf={setEntries} 
                            tipo={"text"} 
                            estado={entries} 
                            nombre={"Usuario"}
                            iden={"usuario"}
                        />
                    </div>
                    <div className="p-2">
                        <InputVarios 
                            conf={setEntries} 
                            tipo={"password"} 
                            estado={entries} 
                            nombre={"Clave"}
                            iden={"key"}
                        />
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <div className="p-2">
                    <button
                        onClick={()=>auth(entries,setEntries)}
                        type='button' 
                        className="btn btn-outline-primary btn-sm">
                            {
                                entries.find?<NavLink exact to="/971171161011101161059997114">Ingresar</NavLink>:
                                <NavLink exact to="/">Verificar</NavLink>
                            }
                            
                    </button>
                </div>
            </div>
        </>
    )
}

function auth(entries,setEntries){
    let usuarios = [
        {usuario:"paola",clave:"paola",nivel:"admin"},
        {usuario:"edwar",clave:"edwar",nivel:"trabajador"}
    ]
    //console.log(usuarios.find(b=>b.usuario===entries.usuario && b.clave===entries.key))
    if(usuarios.find(b=>b.usuario===entries.usuario && b.clave===entries.key)){
        setEntries({...entries,find:true})
    }else{
        setEntries({...entries,find:false})
    }
}