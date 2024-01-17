
function Todo(props) {
    // ID, title, description
    function deleteTodo() {
        const todos = props.todo
        // console.log(todos)
        const newTodoArr = todos.filter(oldData => oldData.id != props.id)
        console.log(newTodoArr)
        props.setTodo(newTodoArr)
    }

    return <div className="todoDiv">
        <div>{props.title}</div>
        <div>{props.description}</div>
        <button>{props.isDone ? "Mark as Undone" : "Mark as Done"}</button>
        <button onClick={deleteTodo}>Delete Todo</button>
    </div>
}

export default Todo