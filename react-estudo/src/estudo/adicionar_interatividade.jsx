import Button  from  './components/Button.jsx'
import {useState} from "react";


const AddInteractivity  = () => {
   const [numero, setNumero] = useState(0);
   const [position, setPosition] = useState({x:0,y:0});



      const  onClickButton = () =>{
       // setNumero(numero + 2)
       // setNumero(numero + 3)
       // setNumero(numero + 4)
       // setNumero(numero + 2)
       // setNumero(prev => prev + 6)

       setNumero(numero +1)
       setNumero(n => n+2 )
       setNumero( numero + 1 )
       // setNumero(n)
       console.log(numero)

    }

    return (<div onPointerMove={(e) =>  setPosition({x:e.clientX,y:e.clientY})}>
            <h3>{numero}</h3>
            <div style={{backgroundColor:'red',position:'absolute',left:-10,top:-10, width:'20px',height:'20px', borderRadius:100, transform:` translate(${position.x}px,${position.y}px)`}}>

            </div>
            <Button onClick = {() => onClickButton()}>
                click
            </Button>
    </div>
    )
}

export default AddInteractivity


const numeroVisita  = () => {

    return   34965;
}