import TodoTable from './TodoTable.jsx'
import {todosData} from './data.js'

import { useState } from 'react'
import TodoAddForm from "./TodoAddForm.jsx";


export  default function  TodoApp() {

     const [todos, setTodos] = useState(todosData)

    function onClickTodoItem(value){

          let   newTodos = todos.map(
              (todo) => {

                  if(todo.id === value.id){
                      todo.completed = !todo.completed
                  }
                  return todo
              }
          )
        setTodos(newTodos)
    }


    function onSubmitForm(title){


            const newTodo = {
                id: title,
                title: title,
                completed: false,
                completed_at:  new Date()
            }


        setTodos([...todos,newTodo])

    }

    return (
        <div>
            <TodoAddForm onSubmitForm={onSubmitForm}/>
            <TodoTable todos = { todos} onClickTodoItem={onClickTodoItem} />

        </div>
    )
}