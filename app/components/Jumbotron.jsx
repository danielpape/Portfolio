var React = require('react');
var Marque = require('Marque');
var $ = require('jQuery');
import Scrollchor from 'react-scrollchor';

var Jumbotron = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <div className="container topBottomMargins">
                    <div className="col-sm-12">
                        <h1>I'm <strong>Daniel Pape</strong>, a product designer and front end developer based in London, England.</h1>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Jumbotron;
