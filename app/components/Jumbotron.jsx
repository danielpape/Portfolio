var React = require('react');
var Marque = require('Marque');
var $ = require('jQuery');

var Jumbotron = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <div className="container topBottomLargeMargins">
                    <div className="col-sm-12">
                        <h1>Hello, I'm <strong>Daniel Pape</strong></h1><h2>a product designer and front end developer</h2>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Jumbotron;
