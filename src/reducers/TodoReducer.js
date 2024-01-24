import { useReducer } from "react"

export const TodoReducer = (state,action)=>{
    if(action.type === "TOGGLE_TODO"){
        return {...state,todos:state.todos.map((todo)=>{
            if(todo === action.payload){
              return {...todo,checked:!todo.checked}
            }
            return todo
        })}
    }
    if(action.type === "REMOVE_TODO"){
        return {...state,todos:state.todos.filter((todo)=> todo !== action.payload)}
    }
    if(action.type === "HIDE_COMPLETED"){
        return {...state,hideCompleted:!state.hideCompleted}
    }
    if(action.type === "ADD_TODO"){
        return {...state,todos:[...state.todos,{name:action.payload.name , chicked:action.payload.chicked}]};
    }

}
export const useTodos = ()=>{
    const [state, dispatch] = useReducer(TodoReducer, {
        hideCompleted:false,
        todos: [
          {
            name: "Faire les courses",
            checked: false,
          },
          {
            name: "Ranger les courses",
            checked: false,
          },
          {
            name: "Manger les courses",
            checked: true,
          },
        ],
      });
      const newTodos = state.hideCompleted ? state.todos.filter((todo)=>!todo.checked) : state.todos;

      return {
        newTodos:newTodos,
        addTodo:(todo)=>dispatch({type:"ADD_TODO",payload:todo}),
        toggleTodo:(todo)=>dispatch({type:"TOGGLE_TODO",payload:todo}),
        removeTodo:(todo)=>dispatch({type:"REMOVE_TODO",payload:todo}),
        hideCompleted:()=>dispatch({type:"HIDE_COMPLETED"})
      }
}





