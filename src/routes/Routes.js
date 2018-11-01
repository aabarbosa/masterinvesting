import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Screener from '../components/Screener/Screener'
//import News from '../screener/News'
//import Home from '../home/Home'
import StockDetails from '../components/StockDetails/StockDetails'
import Tiles from '../components/Tiles/Tiles'
import Portfolio from '../components/Portfolio/Portfolio'
import App from '../containers/App'

const Routes = (props) => {
  return (
    <main>
      <TransitionGroup className="switch-routes">
        <CSSTransition 
          key={props.location.key} 
          classNames="fade" 
          timeout={350}>
          <div className="switch-wrapper">
            <Switch 
              location={props.location}>
             {/* <Route path="/projects" component={News} />*/}
              <Route path="/blogs" component={Screener} />
             {/* <Route path="/" component={Home} />*/}
              <Route component={ App } path="/" exact />
              <Route component={ Screener } path="/screener" />
              <Route component={ StockDetails } path="/company/:id" />
              <Route component={ Tiles } path="/watchlist" />
              <Route component={ Portfolio } path="/portfolio" />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </main>
  )
}

export default Routes