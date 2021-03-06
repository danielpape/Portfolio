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
            <div className="col-xs-6 tablet">
              <Link to="/"><Marque/></Link>
            </div>
            <div className="col-xs-4 mobile">
              <Link to="/"><Marque/></Link>
            </div>
            <div className="col-xs-3 tablet">
               <p className="truncate"><strong>Email:</strong> <a href={'mailto:danielwpape@gmail.com'}>danielwpape<span className="at">@</span>gmail.com</a></p>
               <p className="truncate"><strong>Twitter</strong> <a href={'https://twitter.com/danielpape'}><span className="at">@</span>danielpape</a></p>
               <p className="truncate"><strong>GitHub</strong> <a href={'https://github.com/danielpape'}>/danielpape</a></p>
          </div>
            <div className="col-xs-4 mobile">
               <p className="truncate"><a href={'mailto:danielwpape@gmail.com'}>Email</a></p>
               <p className="truncate"><a href={'https://twitter.com/danielpape'}>Twitter</a></p>
               <p className="truncate"><a href={'https://github.com/danielpape'}>GitHub</a></p>
            </div>
            <div className="col-xs-3 tablet">
              <p className="truncate"><strong>Products:</strong><Link to={'/independent'}>Independent</Link></p>
              <p className="truncate"><strong>&nbsp;</strong><Link to={'/eveningstandard'}>Evening Standard</Link></p>
              <p className="truncate"><strong>&nbsp;</strong> <Link to={'/eve'}>Eve&nbsp;Alarm</Link></p>
            </div>
            <div className="col-xs-4 mobile">
              <p className="truncate"><Link to={'/independent'}>Independent</Link></p>
              <p className="truncate"><Link to={'/eveningstandard'}>Evening Standard</Link></p>
              <p className="truncate"><Link to={'/eve'}>Eve&nbsp;Alarm</Link></p>
            </div>
        </div>
        );
    }
});

module.exports = Navigation;
