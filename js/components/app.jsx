var React = require('react/addons');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

var App = React.createClass({
    childContextTypes: {
        muiTheme:  React.PropTypes.object
    },

    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render: function() {
        return (
            <div>
            {React.addons.cloneWithProps(this.props.children)}
            </div>
        );
    }
});

module.exports = App;
