export function formatoMoneda(numero){
    let formato = new Intl.NumberFormat('en-US',
        {style:'currency',minimumFractionDigits: 0,currency:"COP"})
    return formato.format(numero)
}