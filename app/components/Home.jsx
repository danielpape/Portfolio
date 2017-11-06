var React = require('react');
var Jumbotron = require('Jumbotron');
var Contact = require('Contact');
var FrontpageWork = require('FrontpageWork');
var EveningStandard = require('EveningStandard');

var Home = (props) => {
  return(
    <div>
      <Jumbotron/>
      <FrontpageWork/>
    </div>
  );
};

module.exports = Home;
