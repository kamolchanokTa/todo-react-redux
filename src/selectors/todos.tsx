import { IState } from '../reducers'
import { createSelector } from 'reselect'

/*
 * Get the todos state from the root state
 */
const getTodosState = ((state: IState) => state.todos)

/*
 * Getting todos array from todos State
 */
export const getTodos = createSelector([getTodosState], s => s.todos)