/* eslint-disable space-before-function-paren */
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './Redux/store'
import './App.css'
import LandingPage from './Container/LandingPage'
import PortfolioGalery from './Container/PortfolioGalery'
import NavbarOpenMenu from './Container/NavbarOpenMenu'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/portfolioGalery" component={PortfolioGalery} />
          <Route path="/navbarMenu" component={NavbarOpenMenu} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
