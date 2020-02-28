import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (
            <main>
                <div className="section" id="index-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m8 offset-m1 xl7 offset-xl1 center-on-small-only">
                                <h1 className="header">Getting Started</h1>
                                <h4 className="light">Learn how to easily start using Materialize in your website.</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="section col s12 m8 offset-m1 xl7 offset-xl1">
                            <h5>Parallax Template</h5>
                            <p>This is the simplest starter page with a Header, Call-to-Action, and Icon Features. </p>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Dashboard
