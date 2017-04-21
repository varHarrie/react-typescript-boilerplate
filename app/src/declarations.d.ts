import * as R from 'react'
import * as RD from 'react-dom'
import * as mobx from 'mobx'
import * as mobxReact from 'mobx-react'
import * as IoC from './libs/IoC'

declare global {
  const module: any
  const require: any
  const process: any
  const React: typeof R
  const ReactDOM: typeof RD
  const observer: typeof mobxReact.observer
  const observable: typeof mobx.observable
  const action: typeof mobx.action
  const inject: typeof IoC.inject
  const provideInstance: typeof IoC.provideInstance
  const provideSingleton: typeof IoC.provideSingleton
}
