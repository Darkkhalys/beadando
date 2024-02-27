import Kutyak from "./Kutyak";

export interface Allat {
    name:string
    onRemove: () => void;
    valasztott:Kutyak| undefined
    Remove:()=>void
    DontRemove:() =>void
}