import {createContext, useContext, useState} from "react";
// import  {   from 'react'

const AlunoContext  = createContext({nota1:0.0, nota2:0.0, name :''})


const ContextAPI = ()  => {
const [alunoState, setAlunoState ] = useState({nota1:0, nota2:0, name:''})
    return  (
        <AlunoContext.Provider value={{alunoState, setAlunoState}}>
        <div>

            <h2> Context API</h2>
            <FormToAddNotas/>
        </div>
            </AlunoContext.Provider>
    )
}

export default ContextAPI;



const FormToAddNotas = ()  =>{

    const {alunoState, setAlunoState}  =  useContext(AlunoContext)

    const onClickCalculatir  = (e) =>  {


    e.preventDefault()
    }
    return (

        <form action="">

            <div>
                <label htmlFor="notas"> {'Aluno'}</label>
                <input type="text" id="notas" name="nota1" value={alunoState.name} onChange={ (e) =>{
                    setAlunoState( {...alunoState, name: e.target.value} )
                }}  />
            </div>
            <div>
                <label htmlFor="nota1">Nota 1</label>
                <input type="number" id="nota1" name="nota1"  value={alunoState.nota1} onChange={ (e) =>{
                    setAlunoState( {...alunoState, nota1: e.target.value} )
                }} minLength={1} maxLength={2} min={0}/>
            </div>
            <div>
                <label htmlFor="nota2">Nota 2</label>
                <input type="number" id="nota2" name="nota2" value={alunoState.nota2} onChange={ (e) =>{
                    setAlunoState( {...alunoState, nota2: e.target.value} )
                }} min={0}/>
            </div>

            <button type={'submit'} onClick={ (e) => onClickCalculatir(e)}>Calcular</button>
        </form>
    );
}