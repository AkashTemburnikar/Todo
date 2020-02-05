import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TodoAPI from '../TodoAPI';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
            &nbsp;&nbsp;
            <Link to={"/delete/"+props.todo._id}>Delete</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
      TodoAPI.getTodo().then(data=>{
          this.setState({todos : data.response})});
    }


    todoList() {
       if(this.state.todos.length>0) {
        return this.state.todos.map(function(currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        });
      }
      else {
        return <tr>
                <td>No Todos</td>
                <td></td>
                <td></td>
                <td></td>
        </tr>
      }
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
