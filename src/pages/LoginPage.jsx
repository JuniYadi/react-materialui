import React, { Component } from 'react';
import './login.css';
import Helmet from 'react-helmet';
import Auth from '../controllers/Auth';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redirect: false
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        // set auth instance
        this.auth = new Auth()
    }

    handleInputChange(event) {
        event.preventDefault();

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.auth.onLogin(this.state.email, this.state.password)
            .then((res) => {
                return res.data
            })
            .then((data) => {
                alert(data.jwt)
                this.redirectUser()
            })
            .catch((err) => {
                const MySwal = withReactContent(Swal)
                MySwal.fire(
                    'Error..!!!',
                    'Username or Password Wrong.!!!',
                    'error'
                )
            })
    }

    redirectUser = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Member Area Login - {process.env.REACT_APP_TITLE}</title>
                </Helmet>

                <div id="login-page" className="row">
                    <div className="col s12 z-depth-6 card-panel">
                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <div className="center">
                                <img
                                    src="/favicon.png"
                                    alt=""
                                />
                                <p>Member Area Login Form</p>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <input className="validate" id="email" name="email" type="email" onChange={this.handleInputChange} />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <input className="validate" id="password" name="password" type="password" onChange={this.handleInputChange} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="submit" className="btn waves-effect waves-light col s12" value="Login" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default LoginPage
