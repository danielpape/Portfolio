var React = require('react');
var Marque = require('Marque');
var $ = require('jQuery');
var Scroll  = require('react-scroll');

var Jumbotron = React.createClass({
  render: function(){
  return(
    <div className="jumbotron">
        <div className="container-fluid topBottomMargins">
            <Marque/>
            <div className="col-sm-12 topborder">
            </div>
            <div className="col-sm-6">
                <h1>Hi, I'm <strong>Daniel Pape</strong>.</h1>
                <h2>I'm a product designer and front end developer who creates engaging iOS apps based in London, England</h2>
            </div>
            <div className="col-sm-6 links">
                <p><strong>Apps</strong> <a href={'https://itunes.apple.com/gb/app/eve-alarm-time-to-sleep/id633081958?mt=8#'}>Eve Alarm</a> &#149; <a href={'https://itunes.apple.com/gb/app/mapgrounds/id792151906?mt=8'}>Mapgrounds</a> &#149; <a href={'https://itunes.apple.com/us/app/progress-1000-by-london-evening/id931391607?mt=8'}>Progress 1000</a>                    &#149; <a href="https://itunes.apple.com/gb/app/copywriter/id670760844?mt=8">CopyWriter</a></p>
                <p><strong>About</strong> <a to="work">My Work</a> &#149; <a to="whatIdo">What I do</a></p>
                <p><strong>Contact</strong> <a to="contact">Email</a> &#149; <a href={'https://twitter.com/danielpape'} target="_blank">Twitter</a> &#149; <a href={'https://github.com/danielpape'} target="_blank">GitHub</a></p>
            </div>
        </div>
    </div>
  );
}
});

module.exports = Jumbotron;
