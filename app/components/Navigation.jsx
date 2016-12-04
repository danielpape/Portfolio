var React = require('react');
var {Link, IndexLink} = require('react-router');
var Marque = require('Marque');
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

var Navigation = React.createClass({
    handleClick: function(eventKey) {
        console.log('Hello ' + eventKey);
    },
    render: function() {
        return (
          <div className="header container">
            <div className="col-xs-6 links">
              <Marque/>
            </div>
            <div className="col-xs-3 links tablet">
               <p className="truncate"><strong>Email:</strong> <a href={'https://itunes.apple.com/gb/app/eve-alarm-time-to-sleep/id633081958?mt=8#'}>danielwpape<span className="at">@</span>gmail.com</a></p>
               <p className="truncate"><strong>Twitter</strong> <a href={'https://twitter.com/danielpape'}><span className="at">@</span>danielpape</a></p>
                <p className="truncate"><strong>GitHub</strong> <a href={'https://github.com/danielpape'}>/danielpape</a></p>
            </div>
            <div className="col-xs-3 links mobile">
               <p className="truncate"><a href={'https://itunes.apple.com/gb/app/eve-alarm-time-to-sleep/id633081958?mt=8#'}>Email</a></p>
               <p className="truncate"><a href={'https://twitter.com/danielpape'}>Twitter</a></p>
               <p className="truncate"><a href={'https://github.com/danielpape'}>GitHub</a></p>
            </div>
            <div className="col-xs-3 links tablet">
              <p><strong>Products:</strong> <a href={'https://itunes.apple.com/gb/app/eve-alarm-time-to-sleep/id633081958?mt=8#'}>Eve Alarm</a></p>
              <p><strong>&nbsp;</strong> <a href={'https://twitter.com/danielpape'}>Independent</a></p>
              <p><strong>&nbsp;</strong> <a href={'https://github.com/danielpape'}>Alta</a></p>
            </div>
            <div className="col-xs-3 links mobile">
              <p><a href={'https://itunes.apple.com/gb/app/eve-alarm-time-to-sleep/id633081958?mt=8#'}>Eve Alarm</a></p>
              <p><a href={'https://twitter.com/danielpape'}>Independent</a></p>
              <p><a href={'https://github.com/danielpape'}>Alta</a></p>
            </div>
        </div>
        );
    }
});

module.exports = Navigation;
