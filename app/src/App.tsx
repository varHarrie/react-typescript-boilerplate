import HomeView from './views/HomeView'
import LoginView from './views/LoginView'
import RouterStore from './stores/RouterStore'
import {Route, Router, Switch} from 'react-router-dom'

export default class App extends React.Component<void, void> {
  @inject(RouterStore) routerStore: RouterStore

  render () {
    const history = this.routerStore.history
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/login' component={LoginView}/>
          <Route path='/' component={HomeView}/>
        </Switch>
      </Router>
    )
  }
}
