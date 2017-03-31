var React = require('react');
var Jumbotron = require('Jumbotron');
var Contact = require('Contact');
var Footer = require('Footer');

var Home = (props) => {
  return(
    <div>
      <Jumbotron/>
      <Contact/>
    </div>
  );
};

module.exports = Home;
