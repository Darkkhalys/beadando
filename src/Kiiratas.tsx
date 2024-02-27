import {SeeLists} from "./List";
import React from "react";
import Kutyak from "./Kutyak";

interface Props{
    SwitchList:Kutyak[]
    Pick:(kutya:Kutyak)=> void
    Remove:()=>void
    SearchInput:string
    DontRemove:() =>void
    valasztott:Kutyak| undefined
}
function Kiiratas(props:Props){
    return (
        <div>
            {props.SwitchList.map((kutya)=>{
                if (kutya.name.trim().toLowerCase().includes(props.SearchInput.trim().toLowerCase())){
                    return(
                        <SeeLists key={kutya.name} name={kutya.name} onRemove={() => props.Pick(kutya)} valasztott={props.valasztott} Remove={props.Remove} DontRemove={props.DontRemove}/>
                    )
                }
            })}

        </div>
    )
}

export default Kiiratas