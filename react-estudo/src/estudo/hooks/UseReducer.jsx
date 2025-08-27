import {useReducer} from "react";


const stateReducer  = ( state, action) =>{

        if(action.type === 'increment'){
            return  {counter: state.counter + 1};
        }else if(action.type === 'decrement'){
            return  {counter: state.counter - 1};
        }
        return    {counter: state.counter +2};
};
const UseReducerApp  = () =>{

     const [state, dispatch] = useReducer(stateReducer,{counter: 0})


    return (
        <div>
            <h2> Use Reducer</h2>
            <h4> {state.counter} </h4>
            <div>
                <button onClick={()=>{ dispatch({type:'decrement'}) }}>decrement</button>
                <button onClick={()=>{ dispatch({type:'increment'}) }}>increment</button>
            </div>
        </div>
    )
}

export default UseReducerApp;