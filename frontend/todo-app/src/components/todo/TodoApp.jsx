import React ,{Component} from 'react'

class TodoApp extends Component {
    render(){
        return(
            <div className='TddoApp'>
                <LoginComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component{
    render(){
        return (
            <div className='LoginComponent'>
                UserName: <input type="text" name="username"/>
                Password: <input type="password" name="password"/>
                <button type="submit">Login</button>
            </div>
        )
    }
}
export default TodoApp