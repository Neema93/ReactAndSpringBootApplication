import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import withNavigation from './WithNavigation'
import withParams from './WithParams';

class TodoApp extends Component {

    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);

        return (
            <div className='TddoApp'>
                <Router>
                    <Routes>
                     
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        {/* <Route path="/login" element={<LoginComponent/>} /> */}
                        <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                        <Route path="*" element={<ErrorComponent />} />
                       
                    </Routes>
                </Router>

            </div>
        )
    }
}
class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <div>Welcome {this.props.params.name}</div> 
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
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Success</div>}
                UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button type="submit" onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

}

export default TodoApp