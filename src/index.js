import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import App from './containers/App'

render (
    <BrowserRouter>
            <App store={store}/>
    </BrowserRouter>,
    window.document.getElementById('root')
)

/*          <BrowserRouter>
            <App />
        </BrowserRouter>, */