import TodoItem from './TodoItem.jsx'

export default  function TodoTable(props) {

    let todoList = props.todos.map(
        (todo) => <TodoItem todo={todo}  key={todo.id} onClickTodoItem={props.onClickTodoItem}  />
    )
    return(
     <table>
         <thead>
        <tr>
            <th scope="col">Title</th>
            <th scope="col">Date</th>
        </tr>
         </thead>
         <tbody>
         {todoList}
         </tbody>
     </table>
    );


}