import * as React from 'react'
import { FormEvent } from 'react';

interface IProps {
  handleSubmit: (value: string) => void
}
interface IState {
  value: string
}


export default class AddTodoForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { value: '' } // Value is empty by default
    this._updateValue = this._updateValue.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }
  
  

  public render() {
    const { value } = this.state
    const { _handleSubmit } = this
    return (
      <form onSubmit={_handleSubmit}>
        <input type="text" value={value} onChange={this.handleOnClick} />
        <button type="submit">Add todo </button>
      </form>
    )
  }
  private handleOnClick = (e: any) => {
    this._updateValue(e.target.value);
  }

  private _updateValue(value: string) {
    this.setState({ value })
  }

  private _handleSubmit(e: FormEvent<any>) {
    e.preventDefault()
    if (!this.state.value.trim()) {
      return
    }

    this.props.handleSubmit(this.state.value)
    this.setState({ value: '' })

  }

  
}