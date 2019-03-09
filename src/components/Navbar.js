import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

import logo from "../assets/images/logo.png"

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const _toggleMenu = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <p>Deivid Byrdarov</p>
      </div>
      <div className="navbar-burger">
        <a onClick={_toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </a>
      </div>
      <div className={"navbar-nav" + (menuOpened ? " active" : " closed")}>
        <a className="navbar-nav-close" onClick={_toggleMenu}>
          <FontAwesomeIcon size="2x" icon={faTimes} />
        </a>
        <ul className="navbar-nav-menu">
          <li className="navbar-nav-item">Home</li>
          <li className="navbar-nav-item">About</li>
          <li className="navbar-nav-item">Contact Me</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
