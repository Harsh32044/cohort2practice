function AddTodo() {
    function addTodo() {
        console.log("Hello")
    }
    return <div>
        <input type="text" id="title" placeholder="Enter Todo Title"></input><br /><br />
        <input type="text" id="description" placeholder="Enter Todo Description"></input><br /><br />
        <button onClick={addTodo}>Add Todo</button>
    </div>
}

export default AddTodo