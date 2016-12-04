var React = require('react');
var Marque = require('Marque');
var $ = require('jQuery');
import Scrollchor from 'react-scrollchor';

var Jumbotron = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <div className="container topBottomMargins">
                    <div className="col-sm-6">
                        <h1>I'm Daniel Pape, a product designer and front end developer based in London, England.</h1>
                        <button>Find out more</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Jumbotron;
