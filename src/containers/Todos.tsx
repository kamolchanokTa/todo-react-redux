import { connect } from 'react-redux'
import { IState } from '../reducers'
import { getTodos } from '../selectors/todos'
import { toggleTodo } from '../actions/index'
import TodosList from '../components/TodoList'

const mapStateToProps = (state: IState) => ({
  todos: getTodos(state)
})

const mapDispatchToProps = {
  onTodoClicked: toggleTodo
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(TodosList)