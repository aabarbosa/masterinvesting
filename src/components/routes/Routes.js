import React from 'react'
import { Switch, Route } from 'react-router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './Routes.css'

import Screener from '../screener/Screener'
import News from '../screener/News'
import Home from '../home/Home'


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
              <Route path="/projects" component={News} />
              <Route path="/blogs" component={Screener} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </main>
  )
}

export default Routes