import Button  from  './components/Button.jsx'
import {useState} from "react";


const AddInteractivity  = () => {
   const [numero, setNumero] = useState(0);



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
    return (<div>
            <h3>{numero}</h3>
            <Button onClick = {() => onClickButton()}>
                click
            </Button>
    </div>
    )
}

export default AddInteractivity