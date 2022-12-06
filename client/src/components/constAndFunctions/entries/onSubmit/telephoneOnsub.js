export default function telephoneOnsub(stateGen,tipo){
    //tipo?stateGen.telephone:stateGen.telephone?stateGen.telephone:"3006007050"
    if(tipo){
        return stateGen.telephone
    }else{
        if(stateGen.telephone){
            return stateGen.telephone
        }else{
            return "3006007050"
        }
    }
}