const render = require('./render')
const createElement = require('./createElement')
const createStore = require('./createStore')

function Component(props) {
  this.props = props
  this.setState = () => { throw new Error('Unsupported. Use props and abstract components to manage state') }
}

module.exports = {
  render,
  createElement,
  createStore,
  Component
}
