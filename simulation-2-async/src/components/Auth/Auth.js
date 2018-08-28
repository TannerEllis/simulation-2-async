import React, { Component } from 'react';
import axios from 'axios';
import AuthLogo from '../Auth/auth_logo.png';
import './Auth.css'

class Auth extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);

    }

    handleUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleLogin(){
        axios.post('/api/auth/login', {username: this.state.username, password: this.state.password}).then((res)=> {
            this.props.history.push('/dashboard')
            console.log('Login Successful')
        }) 
    }

    handleRegister(){
        axios.post('/api/auth/register', {username: this.state.username, password: this.state.password}).then((res)=>{
            this.props.history.push('/dashboard')
            console.log('Registration Successful')
        })
    }

    render() {
        return (
            <div className="auth">
                <div className="login-bg">
                    <div className="login">
                        <img className="logo" src={AuthLogo} alt="HouserLogo" />
                        <h4 className="user" >Username</h4>
                        <input className="auth-input" type="text" onChange={this.handleUsername} value={this.state.username} />
                        <h4 className="pass" >Password</h4>
                        <input className="auth-input" type="password" onChange={this.handlePassword} value={this.state.password} />
                        <div className="auth-btn" >
                            <button onClick={this.handleLogin} className="login-btn">Login</button>
                            <button onClick={this.handleRegister} className="register-btn" >Register</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;