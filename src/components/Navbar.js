import React, { useState } from "react"
import { Link } from "react-router-dom"
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
        <div onClick={_toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className={"navbar-nav" + (menuOpened ? " active" : " closed")}>
        <div className="navbar-nav-close" onClick={_toggleMenu}>
          <FontAwesomeIcon size="2x" icon={faTimes} />
        </div>
        <ul className="navbar-nav-menu">
          <Link to="/" className="navbar-nav-item">
            Home
          </Link>
          <Link to="/" className="navbar-nav-item">
            About
          </Link>
          <Link to="/" className="navbar-nav-item">
            Contact Me
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
