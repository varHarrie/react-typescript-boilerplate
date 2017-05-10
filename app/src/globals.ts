import * as R from 'react'
import * as RD from 'react-dom'
import {observer} from 'mobx-react'
import {observable, action, computed} from 'mobx'
import {inject, provideInstance, provideSingleton} from './libs/IoC'

(function (window: any) {
  window.React = R
  window.ReactDOM = RD
  window.observer = observer
  window.observable = observable
  window.action = action
  window.computed = computed
  window.inject = inject
  window.provideInstance = provideInstance
  window.provideSingleton = provideSingleton
})(window)
