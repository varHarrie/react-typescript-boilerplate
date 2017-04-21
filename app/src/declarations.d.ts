import * as R from 'react'
import * as RD from 'react-dom'

declare global {
  const module: any
  const require: any
  const process: any
  const React: typeof R
  const ReactDOM: typeof RD
}
