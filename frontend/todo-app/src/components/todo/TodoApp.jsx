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
    constructor(props){
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

    handleChange(event){
        console.log(this.state);
        this.setState({
            [event.target.name] : event.target.value
        })
    }
   
    loginClicked(){
        if(this.state.username === 'Neema' && this.state.password==='123'){
            console.log("successful")
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
            
        } else {
            console.log("Sorry Try again");
            this.setState({hasLoginFailed:true})
            this.setState({showSuccessMessage:false})
        }
      //  console.log(this.state)
    }
    render(){
        return (
            <div className='LoginComponent'>
              <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials>
               <ShowvalidCredentials showSuccessMessage={this.state.showSuccessMessage}></ShowvalidCredentials>
                UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button type="submit" onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
    
}
function ShowInvalidCredentials(props) {
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }
    return null
}
function ShowvalidCredentials(props) {
    if(props.showSuccessMessage){
        return <div>Login Success</div>
    }
    return null
}
export default TodoApp