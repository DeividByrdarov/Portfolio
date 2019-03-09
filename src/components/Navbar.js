import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logo from "../assets/images/logo.png"

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo"/>
          <p>Deivid Byrdarov</p>
        </div>
        <div className="navbar-burger">
          <FontAwesomeIcon icon={faBars}/>
        </div>
      </div>
    )
  }
}

export default Navbar
