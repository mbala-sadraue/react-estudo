import {useRef} from "react";

const UseRefApp = () => {

    const inputRef = useRef();
    return (
        <div>

            <h2> Use Ref</h2>
            <div>
                <h3></h3>
                <input  ref={inputRef}/>
                <br/>
                <button onClick={() => {inputRef.current.focus()}}> Focus </button>
                <button onClick={() => { inputRef.current.value = ''}}> Clear </button>
            </div>

        </div>
    )
}


export default UseRefApp;