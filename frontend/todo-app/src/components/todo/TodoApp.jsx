import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import withNavigation from './WithNavigation'
import withParams from './WithParams';
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticateRoute';

class TodoApp extends Component {

    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        return (
            <div className='TddoApp'>
                <Router>
                <HeaderComponentWithNavigation />
                    <Routes>
                        
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        {/* <Route path="/login" element={<LoginComponent/>} /> */}
                        <AuthenticatedRoute path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                        <AuthenticatedRoute path="/todos" element={<ListTodosComponent />} />
                        <Route path="*" element={<ErrorComponent />} />
                        <AuthenticatedRoute path="/logout" element={<LogoutComponent/>} />
                      
                    </Routes>
                    <FooterComponent />
                </Router>

            </div>
        )
    }
}
class HeaderComponent extends Component{
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);

        return (
            <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="http://www.in28minutes.com" className="navbar-brand">in28Minutes</a></div>
                <ul className="navbar-nav">
                    {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                    {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                    {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                </ul>
            </nav>
        </header>
        )
    }
}
class FooterComponent extends Component{
    render(){
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2022 Neema</span>
            </footer>
        )
    }
}
class LogoutComponent extends Component{
    render(){
        return (
          <div>
            <h1>You are logged out</h1>
            <div className='container'>
                Thank you for using our Application.
            </div>
          </div>
        )
    }
}
class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    { id: 1, description: 'Learn to Dance', done: false, targetDate: new Date() },
                    { id: 2, description: 'Learn React' , done: false, targetDate: new Date()},
                    { id: 3, description: 'Visit India' , done: false, targetDate: new Date()}
                ]
        }
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
class WelcomeComponent extends Component {
    render() {
        return (
            <>
            <h1>Welcome!</h1>
                <div className='container'>Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link>.</div>
            </>
        )
    }
}
function ErrorComponent() {
    return <div>An Error Occurred.</div>
}
class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'Neema',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    handleChange(event) {
        console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked() {
        if (this.state.username === 'Neema' && this.state.password === '123') {
            AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password);
            this.props.navigate(`/welcome/${this.state.username}`)
            // this.setState({ showSuccessMessage: true })
            // this.setState({ hasLoginFailed: false })

        } else {
            console.log("Sorry Try again");
            this.setState({ hasLoginFailed: true })
            this.setState({ showSuccessMessage: false })
        }
        //  console.log(this.state)
    }
    render() {
        return (
            <div className='LoginComponent'>
                <h1>Login</h1>
                <div className='container' >
                {this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Success</div>}
                UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button className='btn btn-success' type="submit" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }

}

export default TodoApp