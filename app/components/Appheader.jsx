var React = require('react');
import {Col,Image} from 'react-bootstrap';

var Appheader = () => {
    return (
      <section className="appsSplash">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12">
                    <h1>Eve Alarm</h1>
                    <h2>An app that helps you improve your sleep by reminding you when to go to bed</h2>
                      <p className="topMarginSmall"><strong>Role:</strong> Design & Development</p>
                      <p><strong>Platform:</strong> iOS</p>
                      <p><strong>Language:</strong> Objective-C</p>
                      <p className="topMarginSmall"><strong>Link:</strong> <a href="https://itunes.apple.com/gb/app/eve-alarm-time-to-sleep/id633081958?mt=8">AppStore</a></p>
                  </div>
              </div>
          </div>
      </section>
    );
};

module.exports = Appheader;
