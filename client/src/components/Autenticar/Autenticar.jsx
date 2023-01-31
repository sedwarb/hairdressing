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
                        onClick={async ()=>{
                            const res = await authFetch(entries)
                            if(res[0].level){
                                setEntries({...entries,find:true,nivel:res[0].level})
                            }else{
                                setEntries({...entries,find:false,nivel:""})
                            }
                        }}
                        type='button' 
                        className="btn btn-outline-primary btn-sm">
                            {
                                entries.find?
                                entries.nivel==="admin"?
                                    <NavLink exact to="/971171161011101161059997114">Ingresar</NavLink>:
                                    <NavLink exact to="/11711511797114105111">Ingresar</NavLink>:
                                <NavLink exact to="/">Verificar</NavLink>
                            }
                            
                    </button>
                </div>
            </div>
        </>
    )
}

async function authFetch(entries){
    const resp = await fetch(`http://localhost:3001/auth?id=${entries.usuario}&&key=${entries.key}`)
    return resp?resp.json():{}
}