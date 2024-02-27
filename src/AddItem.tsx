import React from "react";

interface Props{
    OnChange:(e:React.ChangeEvent<HTMLSelectElement>)=>void
    NewItem:(e:React.ChangeEvent<HTMLInputElement>)=>void
    PushOption:()=>void


}
function AddItem(props:Props){
    return (
        <div>
            <label>Válassza ki a kategoriát!</label>
            <form id='kategoriaform'>
                <select id='kategoriaselect' onChange={props.OnChange}>
                    <option value={'kutyak'}>Kutya</option>
                    <option value={'macskak'}>Macska</option>
                    <option value={'kigyok'}>Kígyó</option>
                    <option value={'capak'}>Cápa</option>
                </select>
            </form>
            <label>Írja be az új fajt</label>
            <br/>
            <input type='text' onChange={(props.NewItem)}/>
            <br/>
            <button onClick={props.PushOption}>Felvétel</button>
        </div>
    )
}
export default AddItem