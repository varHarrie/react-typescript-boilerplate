import {createBrowserHistory, History, Location, LocationState} from 'history'

@provideSingleton(RouterStore)
export default class RouterStore {
  history: History
  @observable location: Location

  constructor () {
    this.history = createBrowserHistory()
    this._updateLocation(this.history.location)
    this.history.listen(this._updateLocation)
    this.push = this.push.bind(this)
    this.replace = this.replace.bind(this)
    this.go = this.go.bind(this)
    this.goBack = this.goBack.bind(this)
    this.goForward = this.goForward.bind(this)
  }

  @action.bound
  _updateLocation (location: Location) {
    this.location = location
  }

  push (path: string | Location, state?: LocationState) {
    if (typeof path === 'string') this.history.push(path, state)
    else this.history.push(path)
  }

  replace (path: string | Location, state?: LocationState) {
    if (typeof path === 'string') this.history.replace(path, state)
    else this.history.replace(path)
  }

  go (n: number) {
    this.history.go(n)
  }

  goBack () {
    this.history.goBack()
  }

  goForward () {
    this.history.goForward()
  }
}
