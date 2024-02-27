import React, {useState} from 'react';
import './App.css';
import Kutyak from "./Kutyak";
import Macskak from "./Macskak";
import Kigyok from "./Kigyok";
import Capak from "./Capak";
import {SeeLists} from "./List";
import ListDisplay from "./ListDisplay";
import UjfelvetelBTN from "./UjfelvetelBTN";
import AddItem from "./AddItem";
import Kiiratas from "./Kiiratas";

function List(){

const[kutyak,setKutyak]=useState(()=> [new Kutyak('Bichon Bolognese'), new Kutyak('Golden Retriever'),new Kutyak('Border Collie'),  new Kutyak('Szibériai husky')]);
const [macskak,setMacskak]=useState(()=> [new Macskak('Bengáli macska'), new Macskak('Egyiptomi mau'), new  Macskak('Szfinx'), new Macskak('Ragdoll')]);
const [kigyok,setKigyok]=useState(()=> [new Kigyok('Zöld mamba'), new Kigyok('Király piton'), new Kigyok('Boa constrictor'), new Kigyok('Csörgőkígyó')]);
const [capak,setCapak]=useState(()=>[new Capak('Tigriscápa'), new Capak('Citromcápa'), new Capak('Bálnacápa'), new Capak('Fehérfarkú cápa')]);
const [toggle,setToggle]=useState(true)
const [chooseList, setChooseList]=useState('kutya')
const [switchList,setSwitchList]=useState(kutyak)
const [lButton, setLButton]=useState('Új tárgy felvétele')
const [valasztott,setValasztott]=useState<Kutyak>()
const [newItem, setNewItem]=useState('')
const [searchInput, setSearchInput] = useState("");



return (
    <div>
    {toggle ?
        <div> <ListDisplay ChooseList={ChooseList} SearchInput={SearchInput}/>
            <ListChoose/>
            <UjfelvetelBTN TargyFelvetel={TargyFelvetel} LButton={lButton} /></div>
        :  <div> <AddItem OnChange={OnChange} NewItem={NewItem} PushOption={PushOption} />
            <UjfelvetelBTN TargyFelvetel={TargyFelvetel} LButton={lButton} /> </div>
        }
    </div>
)

    function OnChange(search:React.ChangeEvent<HTMLSelectElement>){

        switch (search.target.value){
            case "kutyak":{
                setSwitchList(kutyak)
                break;
            }
            case "macskak":{
                setSwitchList(macskak)
                break;
            }
            case "kigyok":{
                setSwitchList(kigyok)
                break;
            }
            case "capak":{
                setSwitchList(capak)
                break;
            }


        }
        console.log(search.target.value)
    }

    function ChooseList(allat: string) {
        setChooseList(allat)

    }

    function NewItem(search:React.ChangeEvent<HTMLInputElement>){
        setNewItem(search.target.value)
        console.log(search.target.value)
    }
    function SearchInput(search:React.ChangeEvent<HTMLInputElement>){
    setSearchInput(search.target.value)
        console.log(search.target.value)
    }

    function ListChoose() {
        switch (chooseList) {
            case'kutya': {
                setSwitchList(kutyak)
                return (
                <Kiiratas SwitchList={switchList} Pick={Pick} valasztott={valasztott} Remove={Remove} SearchInput={searchInput} DontRemove={DontRemove}/>
                )
            }
            case'macska': {
                setSwitchList(macskak)
                return (
                    <Kiiratas SwitchList={switchList} Pick={Pick} valasztott={valasztott} Remove={Remove} SearchInput={searchInput} DontRemove={DontRemove}/>
                )
            }
            case'kígyó': {
                setSwitchList(kigyok)
                return (
                    <Kiiratas SwitchList={switchList} Pick={Pick} valasztott={valasztott} Remove={Remove} SearchInput={searchInput} DontRemove={DontRemove}/>
                )

            }
            case'cápa': {
                setSwitchList(capak)
                return (
                    <Kiiratas SwitchList={switchList} Pick={Pick} valasztott={valasztott} Remove={Remove} SearchInput={searchInput} DontRemove={DontRemove}/>
                )
            }
            case'állatok': {
                return (<div>
                        <Kiiratas SwitchList={kutyak} Pick={Pick} valasztott={valasztott} Remove={Remove} SearchInput={searchInput} DontRemove={DontRemove}/>
                        <Kiiratas SwitchList={macskak} Pick={Pick} valasztott={valasztott} Remove={Remove} SearchInput={searchInput} DontRemove={DontRemove}/>
                        <Kiiratas SwitchList={kigyok} Pick={Pick} valasztott={valasztott} Remove={Remove} SearchInput={searchInput} DontRemove={DontRemove}/>
                        <Kiiratas SwitchList={capak} Pick={Pick} valasztott={valasztott} Remove={Remove} SearchInput={searchInput} DontRemove={DontRemove}/>

                    </div>
                )

            }
            default: {
                return <p>Válasszon listat</p>
            }
        }
    }

    function DontRemove(){
    setValasztott(undefined)
    }
        function Pick(kuty: Kutyak) {
            setValasztott(kuty)
        }





        function Remove() {
            const allat = valasztott
            const frissit = switchList.filter(it => it != allat)
            switch (switchList) {
                case kutyak:{
                setKutyak(frissit)
                setValasztott(undefined)
            break;
        }
            case macskak: {
                setMacskak(frissit)
                setValasztott(undefined)
                break;
            }
            case kigyok: {
                setKigyok(frissit)
                setValasztott(undefined)
                break;
            }
            case capak: {
                setCapak(frissit)
                setValasztott(undefined)
                break;
            }

        }
    }

    function TargyFelvetel(){
        if (toggle){
            setLButton('Vissza')
            setToggle(false)
            setSwitchList(kutyak)
        }else{
            setLButton('Új tárgy felvétele')
            setToggle(true)

        }

    }




    function PushOption() {
        switch (switchList) {
            case kutyak:{
                        setKutyak([
                            ...kutyak, new Kutyak(newItem)
                        ])
                        break;
                    }
                    case macskak:{
                        setMacskak([
                            ...macskak, new Macskak(newItem)
                        ])
                        break;
                    }
                    case kigyok:{
                        setKigyok([
                            ...kigyok, new Kigyok(newItem)
                        ])
                        break;
                    }
                    case capak:{
                        setCapak([
                            ...capak, new Capak(newItem)
                        ])
                        break;
                    }


                }
            }




}



function App() {
    return (
        <div className="App">
            <List/>
        </div>
    );
}

export default App;
