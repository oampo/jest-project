var React = require('react/addons');
require("react-tap-event-plugin")();

var App = require('./components/app');
var Order = require('./components/order');

document.addEventListener('DOMContentLoaded', function() {
    var TestUtils = React.addons.TestUtils;
    var component = React.render(<App><Order /></App>, document.body);
});

