import TodoItem from './TodoItem.jsx'
import { v4 as uuid4 } from 'uuid'
export default  function TodoTable(props) {

    let todoList = props.todos.map(
        (todo) => <TodoItem todo={todo}  key={uuid4()} onClickTodoItem={props.onClickTodoItem}  />
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