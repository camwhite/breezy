import * as components from './components'

const registerProgrammatic = (app, component) => {
  const Programmatic = {
    open(params, parent = null) {
      const Component = app.extend(component)
      return new Component({
        el: document.createElement('div'),
        propsData: params,
        parent
      })
    }
  }
  const dollar = component.name.replace('T', '$').toLowerCase()
  app.config.globalProperties[dollar] = Programmatic
}

export default {
  install: app => {
    for (const componentKey in components) {
      if (components[componentKey].programmatic) {
        registerProgrammatic(app, components[componentKey])
      }
      app.component(
        components[componentKey].name,
        components[componentKey]
      )
    }
  }
}
