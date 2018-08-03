var React = require('react')
var ReactDOM = require('react-dom')
var ReactPivot = require('./index.js')

module.exports = function (el, opts) {
  ReactDOM.render(
    React.createElement(ReactPivot, opts),
    el
  )
}
