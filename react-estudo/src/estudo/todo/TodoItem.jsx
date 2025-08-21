

export default function TodoItem ({ todo, onClickTodoItem }){

    let  color  = todo.completed ? 'green' : 'red';
    return (
        <tr style={{color:color}} onClick={ () => {onClickTodoItem(todo)}}>
            <td> { todo.title } </td>
            <td> { todo.completed_at.getMilliseconds() } </td>
        </tr>
    )
}