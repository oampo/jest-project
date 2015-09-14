var React = require('react');

var OrderForm = require('./order-form');

var Order = React.createClass({
    getInitialState: function() {
        return {
            bacon: [{
                id: 0,
                name: 'Bacon',
                selected: true
            },
            {
                id: 1,
                name: 'Vegan Bacon',
                selected: false
            }],
            salad: [{
                id: 0,
                name: 'Lettuce',
                selected: true
            },
            {
                id: 1,
                name: 'Tomato',
                selected: true
            }],
            condiments: [{
                id: 0,
                name: 'Mayonnaise',
                selected: true
            },
            {
                id: 1,
                name: 'Mustard',
                selected: true
            }]
        }
    },

    render: function() {
        return <OrderForm order={this.state}
                          onBaconChange={this.onBaconChange}
                          onSaladChange={this.onSaladChange}
                          onCondimentChange={this.onCondimentChange} />
    },

    onBaconChange: function(id) {
        var bacon = this.state.bacon;
        bacon[id].selected = true;

        for (var i=0; i<bacon.length; i++) {
            bacon[i].selected = false;
        }

        bacon[id].selected = true;

        this.setState({
            bacon: bacon
        });
    },

    onSaladChange: function(id, selected) {
        var salad = this.state.salad;
        salad[id].selected = selected;
        this.setState({
            salad: salad
        });
    },

    onCondimentChange: function(id, selected) {
        var condiments = this.state.condiments;
        condiments[id].selected = selected;
        this.setState({
            condiments: condiments
        });
    },
});

module.exports = Order;
