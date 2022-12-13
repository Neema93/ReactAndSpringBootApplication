import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import withNavigation from './WithNavigation'
import withParams from './WithParams';

import AuthenticateRoute from './AuthenticateRoute';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';
import ListTodosComponent from './ListTodosComponent';
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import TodoComponent from './TodoComponent';
class TodoApp extends Component {

    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent); 
        const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));
        return (
            <div className='TddoApp'>
                <Router>
                <HeaderComponentWithNavigation />
                    <Routes>
                    <Route path="/" element={<LoginComponentWithNavigation />} />
                  <Route path="/login" element={<LoginComponentWithNavigation />} />
                  <Route path="/welcome/:name" element={
                    <AuthenticateRoute>
                      <WelcomeComponentWithParams />
                    </AuthenticateRoute>
                  } />
                  <Route path="/todos/:id" element={ 
			            	<AuthenticateRoute>
			            		<TodoComponentWithParamsAndNavigation />
			            	</AuthenticateRoute>
			            } />
                  <Route path="/todos" element={
                    <AuthenticateRoute>
                      <ListTodosComponentWithNavigation /> 
                    </AuthenticateRoute>
                  } />
                  <Route path="/logout" element={
                    <AuthenticateRoute>
                      <LogoutComponent />
                    </AuthenticateRoute>
                  } />
                  <Route path="*" element={<ErrorComponent />} />
                   </Routes>
                    <FooterComponent />
                </Router>

            </div>
        )
    }
}


export default TodoApp