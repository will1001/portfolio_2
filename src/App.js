/* eslint-disable space-before-function-paren */
import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Switch, Route } from 'react-router-dom'
import store from './Redux/store'
import './App.css'
import LandingPage from './Container/LandingPage'
import PortfolioGalery from './Container/PortfolioGalery'
import NavbarOpenMenu from './Container/NavbarOpenMenu'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function App() {
  return (
    <Provider store={store}>
      <HashRouter basename="/">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={300}
              >
                <Switch location={location}>
                  <Route path="/" exact component={LandingPage} />
                  <Route path="/portfolioGalery" component={PortfolioGalery} />
                  <Route path="/navbarMenu" component={NavbarOpenMenu} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </HashRouter>
    </Provider>
  )
}

export default App
