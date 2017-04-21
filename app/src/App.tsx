import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginView from './views/LoginView'
import HomeView from './views/HomeView'

export default class App extends React.Component<void, void> {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={LoginView}/>
          <Route path='/' component={HomeView}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
