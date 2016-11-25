var React = require('react');
var Marque = require('Marque');
var $ = require('jQuery');
import Scrollchor from 'react-scrollchor';

var Jumbotron = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <div className="container topBottomMargins">
                  <div className="col-sm-3"></div>
                    <div className="col-sm-6 card">
                        <Marque/>
                        <h1>Hello, welcome to my corner of the internet.</h1>
                        <h2>I'm Daniel Pape, a product designer and front end developer based in London, England. I'm excited to show you some of the great applications and websites that I've worked on.</h2>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        );
    }
});

module.exports = Jumbotron;
