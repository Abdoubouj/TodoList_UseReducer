import {useState } from "react";
import "./App.css";
import {useTodos } from "./reducers/TodoReducer";
function App() {
  const [name,setName] = useState("");
  const [checked,setChecked] = useState(false);
  const {newTodos,addTodo,toggleTodo,removeTodo,hideCompleted} = useTodos();
  // console.log(name,checked);
  return (
    <div className="app-container">
      <ul class="list-group" style={{width:"600px"}}>
        <div className="d-flex justify-content-between">
      <button onClick={()=>{hideCompleted()}} className="btn btn-md btn-primary text-light mb-3" style={{width:"220px"}}>hide completed</button>
      <button type="button" class="btn btn-md btn-primary text-light mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{width:"220px"}}>
       Add New
      </button>
        </div>
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content p-5">
      <form onSubmit={(e)=>{e.preventDefault(); addTodo({name,checked})}}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">todo name</label>
          <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="enter todo name ..." className="form-control" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" checked={checked} onChange={(e)=>{setChecked(!checked)}} className="form-check-input" />
          <label htmlFor="name" className="form-check-label">completed</label>
        </div>
        <button type="submit" className="btn btn-md btn-secondary text-light">add todo</button>
      </form>
    </div>
  </div>
  </div>
        {newTodos.map((todo) => (
          <li class={`list-group-item d-flex justify-content-between align-items-center ${todo.checked && 'opacity-50'}`}>
            {todo.name}
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                onChange={()=>toggleTodo(todo)}
                checked={todo.checked}
              />
              <label class="form-check-label">
                completed
              </label>
            </div>
              <button className="btn btn-outline-danger" onClick={()=>removeTodo(todo)}>
                 Delete Task
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
