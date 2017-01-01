var React = require('react');
var Jumbotron = require('Jumbotron');
var Contact = require('Contact');
var Footer = require('Footer');
var EveDescription = require('EveDescription');

var Home = (props) => {
  return(
    <div>
      <Jumbotron/>
      <EveDescription/>
      <Contact/>
      <Footer/>
    </div>
  );
};

module.exports = Home;
