var React = require('react');
var Marque = require('Marque');
var $ = require('jQuery');

var Jumbotron = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <div className="container topBottomLargeMargins">
                    <div className="col-sm-12">
                        <h1>Hello, I'm <strong>Daniel Pape</strong></h1>
                        <h2>I currently work as a product designer at <a target="_blank" href="http://independent.co.uk" className="independent">The Independent Newspaper</a>, specialising in user interface design, idea generation & iOS development. I develop <a target="_blank" href="https://appstore.com/danielpape" className="myOwnApps">my own iOS applications</a> in my spare time and have been featured in the App Store <em>New &amp; Noteworthy</em> and <em>What's Hot</em> sections.</h2>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Jumbotron;
