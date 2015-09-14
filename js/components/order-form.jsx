var React = require('react');
var mui = require('material-ui');
require('../../css/components/order-form.css');

var List = mui.List;
var ListItem = mui.ListItem;
var ListDivider = mui.ListDivider;
var RadioButtonGroup = mui.RadioButtonGroup;
var RadioButton = mui.RadioButton;
var Checkbox = mui.Checkbox;
var RaisedButton = mui.RaisedButton;


var OrderForm = React.createClass({
    render: function() {
        var selectedBacon = this.props.order.bacon.find(function(option) {
            return option.selected == true;
        });

        var baconOptions = this.props.order.bacon.map(function(option) {
            return <RadioButton label={option.name} key={option.id}
                                value={option.id.toString()}
                                className="list-radio" />;
        });

        var saladOptions = this.props.order.salad.map(function(option) {
            return (
                <ListItem primaryText={option.name}  key={option.id}
                          leftCheckbox={
                    <Checkbox checked={option.selected}
                              onCheck={this.onSaladCheck}
                              id={option.id.toString()} />
                } />
            );
        }.bind(this));

        var condimentOptions = this.props.order.condiments.map(function(option) {
            return (
                <ListItem primaryText={option.name} key={option.id}
                          leftCheckbox={
                    <Checkbox checked={option.selected}
                              onCheck={this.onCondimentCheck}
                              id={option.id.toString()} />
                } />
            );
        }.bind(this));

        return (
            <form className="order-form">
                <List subheader="Order Form"
                      style={{margin: 'auto', width: '500px'}}>
                    <RadioButtonGroup
                            name="bacon"
                            valueSelected={selectedBacon.id.toString()}
                            onChange={this.onBaconChange}>
                        {baconOptions}
                    </RadioButtonGroup>
                    <ListDivider />
                    {saladOptions}
                    <ListDivider />
                    {condimentOptions}
                </List>
                <RaisedButton label="Order" primary={true} />
            </form>
        );
    },

    onBaconChange: function(event, checked) {
        if (this.props.onBaconChange) {
            this.props.onBaconChange(parseInt(checked));
        }
    },

    onSaladCheck: function(event, checked) {
        if (this.props.onSaladChange) {
            this.props.onSaladChange(parseInt(event.target.id), checked);
        }
    },

    onCondimentCheck: function(event, checked) {
        if (this.props.onCondimentChange) {
            this.props.onCondimentChange(parseInt(event.target.id), checked);
        }
    }
});

module.exports = OrderForm;
