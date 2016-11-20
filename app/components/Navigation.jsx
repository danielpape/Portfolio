var React = require('react');
var {Link, IndexLink} = require('react-router');
var Marque = require('Marque');
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

var Navigation = React.createClass({
    handleClick: function(eventKey) {
        console.log('Hello '+eventKey);
    },
    render: function() {
        return (
            <Navbar collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Daniel Pape</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/work">About</NavItem>
                        <NavItem eventKey={2} href="#">Contact</NavItem>
                        <NavDropdown eventKey={3} title="Work" id="basic-nav-dropdown">
                            <MenuItem href="/work">Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
});

module.exports = Navigation;
