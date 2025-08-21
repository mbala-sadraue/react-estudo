import TodoTable from './TodoTable.jsx'
import {todosData} from './data.js'

import { useState } from 'react'


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
    return  <TodoTable todos = { todos} onClickTodoItem={onClickTodoItem} />;
}