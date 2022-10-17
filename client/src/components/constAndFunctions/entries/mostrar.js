export function mostrar(entries,setEntries,css,setCss){
    if(css.mostrado){
        let id=entries.telephone
        document.querySelector('#telephone').value=""
        setEntries({...entries,telephone:id})
        document.querySelector('#userName').value=""
    }
    css.mostrado?setCss({...css,mostrado:false}):setCss({...css,mostrado:true})
}