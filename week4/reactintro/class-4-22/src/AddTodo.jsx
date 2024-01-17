import { nanoid } from "nanoid"

function AddTodo(props) {
    function addToExisting() {
        props.setTodo([...props.todo, {
            id: nanoid(),
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            completed: false
        }])
    }
    return (
        <div id="inputTodo">
        <input type="text" name="title" id="title" placeholder='Enter Title' /><br /><br />
        <input type="text" name="description" id="description" placeholder='Enter Description' /><br /><br />
        <button id="addBtn" onClick={addToExisting}>Add Todo</button>
    </div>
    )
}

export default AddTodo