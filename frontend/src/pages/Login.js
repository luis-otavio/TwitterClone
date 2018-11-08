import React, { Component } from 'react'
import './Login.css'
import TwitterLogo from '../twitter.svg'

export default class Login extends Component {
    state = {
        username: '',
    }

    handleSumbit = (e) => {
        e.preventDefault()
        const { username } = this.state

        if (!username.length) return
        localStorage.setItem('@GoTwitter:username', username)

        this.props.history.push('/timeline')
    }

    handleInputChange = (e) => {
        this.setState({ username:  e.target.value})
    }

    render() {
        return (
            <div className="login-wrapper">
                <img src={TwitterLogo} alt="GoTwitter" />
                <form onSubmit={this.handleSumbit}>
                    <input value={this.state.username} onChange={this.handleInputChange} placeholder="Nome de usuário" />
                    <button type="submit"> Entrar </button>
                </form>
            </div>
        )
    }
}