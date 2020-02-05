import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TodoAPI from '../TodoAPI';
import TodosList from "./todos-list.component";

export default class DeleteTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {flag: false};
  }

  async componentDidMount() {
    const deleteData = await TodoAPI.deleteTodo(this.props.match.params.id);
    if(deleteData!=null){
      this.setState({
        flag : true
      })
      this.props.history.push('/');
  }
  }

  render() {
      return (
        this.state.flag && <TodosList/>
      )
  }
}
