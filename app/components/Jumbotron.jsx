var React = require('react');
var Marque = require('Marque');
var $ = require('jQuery');
import Scrollchor from 'react-scrollchor';

var Jumbotron = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <div className="container topBottomLargeMargins">
                    <div className="col-sm-12">
                        <h1>Daniel Pape</h1><h2>A product designer and front end developer based in London, England.</h2>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Jumbotron;
