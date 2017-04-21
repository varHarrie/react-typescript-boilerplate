import {Container, interfaces} from 'inversify'
import getDecorators from 'inversify-inject-decorators'
import {makeFluentProvideDecorator} from 'inversify-binding-decorators'
import 'reflect-metadata'

export const kernel = new Container()

const provide = makeFluentProvideDecorator(kernel)

type IdentifierType = string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>

export function provideInstance (identifier: IdentifierType) {
  return provide(identifier).done()
}

export function provideSingleton (identifier: IdentifierType) {
  return provide(identifier).inSingletonScope().done()
}

export const inject = getDecorators(kernel).lazyInject
