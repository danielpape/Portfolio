var React = require('react');
var Marque = require('Marque');
var $ = require('jQuery');

var Jumbotron = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-6 topcard">
                      <p>Hello, I am</p>
                      <h1>Daniel Pape</h1>
                        <h2>I am a product designer specialising in user interface design, idea generation & iOS development.</h2>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Jumbotron;
