import React, { Component } from 'react'
import Menu from './Menu'

export class Header extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            // sidenav
            const elemsSideNav = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elemsSideNav, {
                draggable: true
            });

            // collaps
            const elemsCollaps = document.querySelectorAll('.collapsible');
            M
                .Collapsible
                .init(elemsCollaps, {});
        });
    }

    render() {
        return (
            <header>
                <nav className="light-blue darken-3" role="navigation">
                    <div className="nav-wrapper">
                        <a href="#!" data-target="nav-mobile" className="sidenav-trigger show-on-large">
                            <i className="material-icons">menu</i>
                        </a>

                        <ul className="right hide-on-med-and-down">
                            <Menu />
                        </ul>

                        <ul id="nav-mobile" className="sidenav sidenav-fixed">
                            <li className="logo">
                                <a href="#!">
                                    <img src="/favicon.png" alt="KrmPesan" height="120px" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">Dashboard</a>
                            </li>
                            <li className="no-padding">
                                <ul className="collapsible collapsible-accordion">
                                    <li>
                                        <a href="#!" className="collapsible-header">Dropdown
                                            <i className="material-icons">arrow_drop_down</i>
                                        </a>
                                        <div className="collapsible-body">
                                            <ul>
                                                <li>
                                                    <a href="#!">First</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Second</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Third</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Fourth</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
