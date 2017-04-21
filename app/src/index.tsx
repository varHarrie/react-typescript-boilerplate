import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {observer} from 'mobx-react'
import {observable, action} from 'mobx'
import {inject, provideInstance, provideSingleton} from './libs/IoC'

(function (window: any) {
  window.React = React
  window.ReactDOM = ReactDOM
  window.observer = observer
  window.observable = observable
  window.action = action
  window.inject = inject
  window.provideInstance = provideInstance
  window.provideSingleton = provideSingleton
})(window)

// Execute before import React Component

import {AppContainer} from 'react-hot-loader'
import App from './App'
import './styles/index.css'

// tslint:disable-next-line:variable-name
const render = (App: any, callback?: () => void) => {
  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById('app'),
    callback
  )
}

render(App, () => {
  if (module.hot) {
    module.hot.accept('./App', () => {
      const next = require('./App').default
      render(next)
    })
  }
})
