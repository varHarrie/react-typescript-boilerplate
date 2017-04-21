import {createBrowserHistory, History, Location} from 'history'

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

  push (location: Location) {
    this.history.push(location)
  }

  replace (location: Location) {
    this.history.replace(location)
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
