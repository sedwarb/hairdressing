import { validar_inma } from "../validar_inma"

export default function serviceId(entries){
    if(entries.serviceId.valor==="inma") return validar_inma(entries)
    else return true
}