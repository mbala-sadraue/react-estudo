import {useReducer, useState} from "react";

// import { v4 as ud } from 'uuid'
/*const stateReducer  = ( state, action) =>{

        if(action.type === 'increment'){
            return  {counter: state.counter + 1};
        }else if(action.type === 'decrement'){
            return  {counter: state.counter - 1};
        }
        return    {counter: state.counter +2};
};*/

const taskReducer = (state, action) => {

    console.log(state)
    switch(action.type){
        case  'addTask':

            return {...state, tasks:[ ...state.tasks, action.payload]};
    }
}
const UseReducerApp  = () =>{

    const [inputValue, setInputValue] = useState('')
    const  [taskState, dispatch] = useReducer(taskReducer, {tasks:[]})


    return (
            <div>
            <h2> Use Reducer</h2>

                <div>
                    <input value={inputValue}  onChange={(e) => {
                        setInputValue(e.target.value);
                      }} />
                    <button onClick={() => {
                        dispatch({type:'addTask', payload:inputValue})
                        setInputValue('');
                    }}>Add Task</button>
                </div>

                <div>
                    {taskState.tasks.map(task =>  <p >{task}</p>)}
                </div>

            </div>
    )

     // const [state, dispatch] = useReducer(stateReducer,{counter: 0})


    /*return (
        <div>
            <h2> Use Reducer</h2>
            <h4> {state.counter} </h4>
            <div>
                <button onClick={()=>{ dispatch({type:'decrement'}) }}>decrement</button>
                <button onClick={()=>{ dispatch({type:'increment'}) }}>increment</button>
            </div>
        </div>
    )*/
}

export default UseReducerApp;