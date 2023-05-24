import {useState} from 'react';

export default function NewToDoForm({addToDo}){
    const [newTodo, setNewTodo] = useState({
        'owner': '',
        'description': ''
    })
    function handleChange(e){
        setNewTodo({
            ...newTodo,
            [e.target.name]: e.target.value
        })
    }
    function handleAddTodo(e){
        e.preventDefault()
        addToDo(newTodo)
        setNewTodo({
            owner: '',
            description: ''
        })
    }
    return(
        <>
      <h3>Add todo</h3>
      <form onSubmit={handleAddTodo}>
        Owner: <input type="text" name="owner"
            value={newTodo.owner} 
            onChange={handleChange}
            required
            pattern=".{4,}"
        />
        Description: <input type="text" name="description" value={newTodo.description} onChange={handleChange}/>
        <button type="submit">Add a new item</button>
      </form>
        </>
    )
}
// Q: How can a parent pass data to a child?
// A: Props. <Child prop={prop}>
// Q: How can a child pass data to a parent?
// A: Lifting state. Define a function in the parent, pass that function to the child