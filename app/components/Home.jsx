var React = require('react');
var Jumbotron = require('Jumbotron');
var Work = require('Work');
var WhatIDo = require('WhatIDo');
var Contact = require('Contact');
var Footer = require('Footer');

var Home = (props) => {
  return(
    <div>
      <Jumbotron/>
      <Work/>
      <WhatIDo/>
      <Contact/>
      <Footer/>
    </div>
  );
};

module.exports = Home;
