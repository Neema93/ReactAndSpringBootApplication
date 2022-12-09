import React,{Component} from 'react'
import AuthenticationService from './AuthenticationService.js';
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

export default LoginComponent