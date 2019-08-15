import * as React from 'react'
import Todo from '../models/Todo'

interface IProps {
  todos: Todo[],
  onTodoClicked: (todoId: number) => void
}
interface IState {
    value: string
} 

export default class AddTodoForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    // const { todos, onTodoClicked } = this.props
    const { todos } = this.props
    return (
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id} value={todo.id} data-id = {todo.id }
              onClick={this.handleOnTodoClick}
              style={{ textDecoration: `${todo.done ? 'line-through' : ''}`, cursor: 'pointer' }}>
              {todo.name}
            </li>)
          )
        }
      </ul>
    )
  }
  private handleOnTodoClick = (e: any) => {
    this.props.onTodoClicked(e.currentTarget.dataset.id );
  }
}