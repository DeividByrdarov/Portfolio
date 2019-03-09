import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./routes/Home"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </>
      </BrowserRouter>
    )
  }
}

export default App
