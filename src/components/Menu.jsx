import React, {Component} from 'react'

export class Menu extends Component {
    onLogOut = () => {
        localStorage.clear();
        window.location = "/login";
    }

    render() {
        return (
            <li>
                <a href="#!" onClick={this.onLogOut}>
                    <i class="material-icons left">power_settings_new</i>
                    <i class="material-icons left">exit_to_app</i>
                    Logout
                </a>
            </li>
        )
    }
}

export default Menu
