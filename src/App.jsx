import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import ShowPage from './pages/ShowPage'

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul class="navList">
            <li>
              <Link to="/">Go Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/tv/:id/" component={ShowPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
