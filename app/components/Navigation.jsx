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
            <div className="col-sm-6 links">
              <Marque/>
            </div>
            <div className="col-sm-3 links">
               <p className="truncate"><strong>Email:</strong> <a href={'https://itunes.apple.com/gb/app/eve-alarm-time-to-sleep/id633081958?mt=8#'}>danielwpape@gmail.com</a></p>
               <p className="truncate"><strong>Twitter</strong> <a href={'https://twitter.com/danielpape'}>@danielpape</a></p>
                <p className="truncate"><strong>GitHub</strong> <a href={'https://github.com/danielpape'}>/danielpape</a></p>
            </div>
            <div className="col-sm-3 links">
              <p><strong>Products:</strong> <a href={'https://itunes.apple.com/gb/app/eve-alarm-time-to-sleep/id633081958?mt=8#'}>Eve Alarm</a></p>
              <p><strong>&nbsp;</strong> <a href={'https://twitter.com/danielpape'}>Independent</a></p>
              <p><strong>&nbsp;</strong> <a href={'https://github.com/danielpape'}>Alta</a></p>
            </div>
        </div>
        );
    }
});

module.exports = Navigation;
