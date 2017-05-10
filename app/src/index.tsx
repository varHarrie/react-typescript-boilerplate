import './globals'
import './styles/index.css'

import {AppContainer} from 'react-hot-loader'
import App from './App'

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
