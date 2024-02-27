import React from "react";

interface Props{
    ChooseList: (állatok: string)=>void
    SearchInput:(e:React.ChangeEvent<HTMLInputElement>)=>void
}
 function ListDisplay(props:Props){

        return (
            <div>
                <button onClick={() => props.ChooseList("állatok")}>Állatok</button>
                <button onClick={() => props.ChooseList("kutya")}>Kutyák</button>
                <button onClick={() =>props.ChooseList("macska")}>Macskák</button>
                <button onClick={() => props.ChooseList("kígyó")}>Kigyók</button>
                <button onClick={() => props.ChooseList("cápa")}>Cápák</button>
                <br/>
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={props.SearchInput}
                />


                <br/>

            </div>
        )

}
export default ListDisplay