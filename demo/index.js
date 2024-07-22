import React from 'react'
import ReactDOM from 'react-dom'
import 'react-calendar-timeline-css'
import App from './app'
import { createRoot } from 'react-dom/client'

const render = AppToRender => {
  createRoot(document.getElementById('root')).render(<AppToRender />)

}

render(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default

    render(NextApp)
  })
}
