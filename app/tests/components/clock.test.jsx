var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Jumbotron = require('Jumbotron');

describe('Jumbotron', ()=>{
  it('should exist', ()=> {
    expect(Jumbotron).toExist();
  });
});
