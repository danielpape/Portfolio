var React = require('react');
var Navigation = require('Navigation');
var Jumbotron = require('Jumbotron');
var Work = require('Work');
var WhatIDo = require('WhatIDo');
var Contact = require('Contact');
var Footer = require('Footer');

var Main = (props) => {
  return(
    <div>
      <Navigation/>
      <Jumbotron/>
      <Work/>
      <WhatIDo/>
      <Contact/>
      <Footer/>
    </div>
  );
};

module.exports = Main;
