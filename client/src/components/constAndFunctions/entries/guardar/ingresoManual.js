export default function ingresoManual(entries, tipo){
    if(tipo===true){
        if(entries.serviceId.valor === "inma")return entries.manualEntry
        else return "No Aplica"
    }else{
        if(entries.serviceId.valor === "inma")return entries.amountEntry
        else return entries.serviceId.monto
    }    
}