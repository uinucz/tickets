import React from "react"
import Navigation from "./Navigation"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MainPage from "./MainPage"
import Movie from "./Movie"

function App() {
  return (
    <Router>
      <Navigation />
      <br />

      <Switch>
        <Route Route path="/movies/:id">
          <Movie />
        </Route>
        <Route path="/tickets">
          <MainPage />
        </Route>
        <Route path="/account">
          <MainPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
