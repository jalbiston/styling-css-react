import React, { Component } from 'react'
import Header from "./Header"
import Stylesheet from './Stylesheet'


export default class index extends Component {
  render() {
    return (
      // App Component
      <div className="app">
        <img src ="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" className="startbootstrap"/>
        <Header />
        
        <div className="btn">
        <button className="button">TELL ME MORE</button>
        </div>
      </div>
    )
  }
}

