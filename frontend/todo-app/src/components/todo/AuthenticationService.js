class AuthenticationService {
    registerSuccessfullLogin(username, password) {
        console.log("hello",username,password)
        sessionStorage.setItem('authenticatedUser', username);
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

}
export default new AuthenticationService()