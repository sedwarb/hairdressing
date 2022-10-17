export function validar_inma(entries){
    if(entries.serviceId.valor==="inma" && (!entries.manualEntry || !entries.amountEntry)){
        return false
    }else return true
}