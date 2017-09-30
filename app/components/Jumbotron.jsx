var React = require('react');
var Marque = require('Marque');
var $ = require('jQuery');

var Jumbotron = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-9">
                        <h1>I am a product designer specialising in user interface design, idea generation & iOS development.</h1>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Jumbotron;
