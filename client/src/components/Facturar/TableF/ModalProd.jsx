import React,{useState} from 'react'
import { Lists } from '../../Lists/Lists'
import { typeList } from '../../constAndFunctions/entries/typeList'
import { InputGen } from '../../ShowMeTables/inputsTables/inputGen'

export function ModalProd(){
    const [entries,setEntries]=useState({})
    return(
        <>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Incluir Productos</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Productos...
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <Lists typeList={typeList['product']} listStP={entries} /> 
                            </div>                               
                            <div className="p-2">
                                <InputGen 
                                    conf={setEntries} 
                                    estado={entries} 
                                    nombre={"cant"} 
                                    iden={"cantidad"} 
                                    tipo={"number"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Guardar Cambios</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
