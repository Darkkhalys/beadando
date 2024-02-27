interface Props{
    TargyFelvetel:() =>void
    LButton:string
}


function UjfelvetelBTN(props:Props){
    return(
        <button onClick={props.TargyFelvetel}>{props.LButton}</button>
    )

}
export default UjfelvetelBTN