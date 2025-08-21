import {useState} from "react";


export default function TodoAddForm(props){
    const [title, setTitle] = useState(' ')

    return (

        <form onSubmit={ (e) =>

        {
           if(title.length > 0){
               props.onSubmitForm(title)
               setTitle('')

           }

            e.preventDefault()

        }

        }>
            <input value={title} onChange={ (e) =>  setTitle(e.target.value)        } />
        </form>
    )
}