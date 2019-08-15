import Todo from '../models/Todo'
let nextTodoId = 0;
export function toggleTodo(todoId: number): IToggleTodoAction {
  return { type: ActionTypes.TOGGLE_TODO, payload: { todoId } } // {todoId} is a shortcut for {todoId: todoId}
}


export enum ActionTypes {
  ADD_TODO = '[todos] ADD_TODO',
  TOGGLE_TODO = '[todos] TOGGLE_TODO'
}
export interface IAddTodoAction { type: ActionTypes.ADD_TODO, payload: { todo: Todo } }
export interface IToggleTodoAction { type: ActionTypes.TOGGLE_TODO, payload: { todoId: number } }

export function addTodo(text: string): IAddTodoAction {

  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      todo: {
        id: nextTodoId++,
        name: text,
        done: false
      }
    }
  }
}

export type Action = IAddTodoAction | IToggleTodoAction