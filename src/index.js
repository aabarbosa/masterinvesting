import DOM from 'react-dom'
import React from  'react'
import Application from './Application'
import register from './RegisterServiceWorker'

DOM.render(<Application />, document.getElementById('root'))
register()