var React = require('react');
var Marque = require('Marque');
var $ = require('jQuery');
import Scrollchor from 'react-scrollchor';

var Jumbotron = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <div className="container topBottomLargeMargins">
                    <div className="col-sm-8 col-sm-offset-2">
                        <h1><strong>Daniel Pape</strong>: A product designer and front end developer based in London, England.</h1>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Jumbotron;
