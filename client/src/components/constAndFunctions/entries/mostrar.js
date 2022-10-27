export function mostrar(entries,setEntries,css,setCss){
    if(!css){
        document.querySelector('#telephone').value=""
        document.querySelector('#userName').value=""
    }else if(css.mostrado){
        //let id=entries.telephone
        document.querySelector('#telephone').value=""
        setEntries({...entries,telephone:entries.telephone})
        document.querySelector('#userName').value=""
    }
    if(css){
        css.mostrado?setCss({...css,mostrado:false}):setCss({...css,mostrado:true})
    }
    
    if(entries.telephone && entries.findUser){
        console.log("TELEFONO ES true")
    }else if(!entries.nomUsu){
        setEntries({...entries,telephone:null})
    }
    //if(!entries.telephone && !entries.findUser)setEntries({...entries,telephone:null})
}