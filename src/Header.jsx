import React, { Component } from 'react'
import './myStyles.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                {/*Header Component */}
                <h2 className="welcome">Welcome to our studio!</h2>
                <h1 className="meet">IT'S NICE TO MEET YOU</h1>
            </div>
        )
    }
}
