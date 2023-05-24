import ToDoListItem from "./ToDoListItem"
import './ToDoList.css'

export default function ToDoList(props){
    return (
        <>
        <h1>To Do list</h1>
        <ul className="ToDoList">
            {props.todos.map((toDo, idx) => {
                return <ToDoListItem toDo={toDo} key={idx} index={idx}/>
                })
            }
        </ul>
        </>
    )
}

// Components are JSX files that can mix js and html freely
// React builds SINGLE PAGE APPLICATIONS that don't need to reload
// Applications are structured by components (wireframing)
// export default function ComponentName <> import ComponentName

// JSX components/ return values have a few problems...
// You can't return an if/else. Use a ternary instead
// You can't return a loop. Use .map instead
// React Fragments solve the "one return value" problem
// Components can only take ONE input, but we want multiple variables: destructuring syntax

// Components pass data to children through PROPS
// Props looks like HTML attributes
// People like "destructuring" props in the parameter 

// How do we loop over a list to create an array of components?
// How do we check conditional logic inside our return values?