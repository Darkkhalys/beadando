import {Allat} from "./Allat";
import React from "react";

export function SeeLists(props: Allat) {
    return (
        <div>
            <p>{props.name}</p>

            {(props.valasztott?.name===props.name) ? <div>  <button onClick={props.Remove}>Igen</button>
                    <button onClick={props.DontRemove}>Nem</button> </div> :
                <button onClick={props.onRemove}>Delete</button>}

    </div>
    )
}