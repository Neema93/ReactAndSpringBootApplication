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
                ],
                message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
       // this.refreshTodos = this.refreshTodos.bind(this)
    }
    componentDidMount(){
        // let username= AuthenticationService.getLoggedInUserName()
        // TodoDataService.retriveAllTodos(username)
        // .then(
        //     response =>{
        //         console.log(response);
        //         this.setState({todos: response.data})
        //     }
        // )
        console.log('componentDidMount')
        this.refreshTodos();
        console.log(this.state)
    }
    refreshTodos(){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retriveAllTodos(username)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ todos: response.data })
                }
            )
    }
    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedInUserName()
        //console.log(id + " " + username);
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({ message: `Delete of todo ${id} Successful` })
                    this.refreshTodos()
                }
            )

    }
    render() {
        return (
            <>
                <h1>List Todos</h1>
                {this.state.message && <div className='alert alert-success'>{this.state.message}</div>}
                <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            
                            <th>Description</th>
                            <th>Done</th>
                            <th>TargetDate</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(todo => 
                        <tr key={todo.id}>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toString()}</td>
                            <td><button className='btn btn-warning' onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
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