import Todo from '../models/Todo'
import { ActionTypes, Action } from '../actions/index'

// Define our State interface for the current reducer
export interface IState {
  todos: Todo[]
}

// Define our initialState
export const initialState: IState = {
  todos: [] // We don't have any todos at the start of the app
}

/* 
 * Reducer takes 2 arguments
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in todos reducer, action type is Action defined in our actions/todos file.
 */
export function reducer(state: IState = initialState, action: Action) {
  switch (action.type) {

    case ActionTypes.ADD_TODO: {
      /*
       * We have autocompletion here
       * Typescript knows the action is type of AddTodoAction thanks to the ActionTypes enum
       * todo is type of Todo
       */
      const todo = action.payload.todo

      return {
        ...state,
        todos: [...state.todos, todo] // Add todo to todos array
      }
    }

    case ActionTypes.TOGGLE_TODO: {
      /*
       * This is the same as 
       * const todoId = action.payload.todoId
       */
      console.log("get in TOGGLE_TODO"+ action.payload.todoId)
      const todoId = action.payload.todoId
      console.log(state.todos);
      return {
        ...state,
        // todos: state.todos.map(todo => todo.id === todoId ? { ...todo, done: !todo.done } : todo)
        todos: state.todos.map((todo, todoIndex) =>{
            console.log("todoIndex " + todo.id +" todoId: " + todoId)
            if (todo.id == todoId) {
                console.log("Found it")
              return {
                ...todo,
                done: !todo.done
              };
            }
            else {
                console.log("Not Found it")
                return todo;
            }
          })
      }
    }

    default:
      return state
  }
}