var React = require('react');
var Jumbotron = require('Jumbotron');
var Contact = require('Contact');
var FrontpageWork = require('FrontpageWork');
var EveningStandard = require('EveningStandard');
var Independent = require('Independent');
var Eve = require('Eve');

var Home = (props) => {
  return(
    <div>
      <Jumbotron/>
      <EveningStandard/>
      <Independent/>
      <Eve/>
    </div>
  );
};

module.exports = Home;
