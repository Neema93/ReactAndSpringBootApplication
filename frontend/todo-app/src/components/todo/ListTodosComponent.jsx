import React,{Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    // { id: 1, description: 'Learn to Dance', done: false, targetDate: new Date() },
                    // { id: 2, description: 'Learn React' , done: false, targetDate: new Date()},
                    // { id: 3, description: 'Visit India' , done: false, targetDate: new Date()}
                ]
        }
    }
    componentDidMount(){
        let username= AuthenticationService.getLoggedInUserName()
        TodoDataService.retriveAllTodos(username)
        .then(
            response =>{
                console.log(response);
                this.setState({todos: response.data})
            }
        )
    }
    render() {
        return (
            <>
                <h1>List Todos</h1>
                <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            
                            <th>Description</th>
                            <th>Done</th>
                            <th>TargetDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(todo => 
                        <tr key={todo.id}>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toString()}</td>
                        </tr>
                        )}

                    </tbody>
                </table>
                </div>
            </>
        )
    }
}
export default ListTodosComponent